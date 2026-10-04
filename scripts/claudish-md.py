#!/usr/bin/env python3
"""Chunked plain-English pass over an .mdx/.md post.

Runs the claudish default prompt one section at a time instead of over the whole
file. A small model asked to restyle 40KB summarises it; asked to restyle one
section it restyles it.

Every chunk is validated before it is accepted: the rewrite must preserve each
number, each <Ref> id, each standalone component tag, every heading, and the
code-fence count. A chunk that fails any check is discarded and the original is
kept, so a bad rewrite can lose formatting but never facts.

Writes NAME.plain.EXT next to the input and prints a per-chunk report.

  OPENROUTER_API_KEY=... python3 scripts/claudish-md.py src/content/blog/post.mdx
  CLAUDISH_MODEL=anthropic/claude-sonnet-5.5 python3 scripts/claudish-md.py post.mdx
"""
import json, os, re, sys, urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor

PROMPT = (
    "You rewrite Markdown prose into much simpler, plain English. Keep every fact, "
    "name, number, link, and file path. Keep all Markdown structure — headings, lists, "
    "tables, and links. Do NOT change fenced code blocks or any YAML frontmatter; "
    "reproduce them exactly. Output ONLY the rewritten Markdown, with no preamble, "
    "labels, or commentary."
)
EXTRA = (
    " Do not change, remove, or reorder any JSX tag such as <Ref id=\"x\" /> or "
    "<ComponentName />; reproduce them exactly where they appear. Do not merge, drop, "
    "or summarise paragraphs — rewrite every one."
)
MODEL = os.environ.get("CLAUDISH_MODEL", "google/gemma-4-26b-a4b-it")
URL = os.environ.get("CLAUDISH_OPENAI_URL", "https://openrouter.ai/api/v1") + "/chat/completions"
KEY = os.environ.get("CLAUDISH_OPENAI_KEY") or os.environ.get("OPENROUTER_API_KEY", "")
MAX_CHARS = int(os.environ.get("CLAUDISH_CHUNK_CHARS", "3000"))

NUM = re.compile(r"(?<![\w.])\d+(?:[.,]\d+)*%?")
REF = re.compile(r'<Ref\s+id="([^"]+)"')
COMP = re.compile(r"^<[A-Z][A-Za-z]* />$", re.M)
HEAD = re.compile(r"^#{1,6} .*$", re.M)


def facts(t):
    return (Counter(NUM.findall(t)), Counter(REF.findall(t)),
            Counter(COMP.findall(t)), Counter(HEAD.findall(t)), t.count("```"))


def check(src, out):
    if not out.strip():
        return "empty"
    a, b = facts(src), facts(out)
    for name, i in (("numbers", 0), ("refs", 1), ("components", 2), ("headings", 3)):
        missing = a[i] - b[i]
        if missing:
            return f"{name} lost: {', '.join(sorted(missing))[:70]}"
    if a[4] != b[4]:
        return "code fences changed"
    words = len(out.split()) / max(len(src.split()), 1)
    if words < 0.55:
        return f"compressed to {words:.0%}"
    return None


def split(body):
    """Section-sized chunks, further split at blank lines when oversized."""
    parts, cur = [], []
    for line in body.split("\n"):
        if line.startswith("## ") and cur:
            parts.append("\n".join(cur)); cur = []
        cur.append(line)
    if cur:
        parts.append("\n".join(cur))
    out = []
    for p in parts:
        if len(p) <= MAX_CHARS:
            out.append(p); continue
        buf = []
        for para in p.split("\n\n"):
            if buf and sum(len(x) + 2 for x in buf) + len(para) > MAX_CHARS:
                out.append("\n\n".join(buf)); buf = []
            buf.append(para)
        if buf:
            out.append("\n\n".join(buf))
    return out


def rewrite(chunk):
    if not chunk.strip() or not re.search(r"[A-Za-z]{4}", chunk):
        return chunk, "skipped (no prose)"
    req = {"model": MODEL, "messages": [
        {"role": "system", "content": PROMPT + EXTRA},
        {"role": "user", "content": chunk}]}
    r = urllib.request.Request(
        URL, data=json.dumps(req).encode(),
        headers={"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(r, timeout=300) as f:
            out = json.load(f)["choices"][0]["message"]["content"]
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")[:140].replace("\n", " ")
        return chunk, f"HTTP {e.code}: {body}"
    except Exception as e:
        return chunk, f"request failed: {type(e).__name__}"
    out = re.sub(r"^```(?:markdown|mdx)?\n|\n```$", "", out.strip())
    why = check(chunk, out)
    return (chunk, f"REJECTED — {why}") if why else (out, "ok")


def main(path):
    if not KEY:
        sys.exit("no OPENROUTER_API_KEY / CLAUDISH_OPENAI_KEY")
    src = open(path).read()
    m = re.match(r"\A---\n.*?\n---\n", src, re.S)
    head, body = (m.group(0), src[m.end():]) if m else ("", src)
    imports = ""
    im = re.match(r"\A\s*(?:import .*\n)+", body)
    if im:
        imports, body = im.group(0), body[im.end():]

    chunks = split(body)
    print(f"{len(chunks)} chunks, model {MODEL}\n", file=sys.stderr)
    with ThreadPoolExecutor(max_workers=4) as ex:
        results = list(ex.map(rewrite, chunks))

    bad = 0
    for i, (_, status) in enumerate(results):
        if status != "ok":
            bad += status.startswith("REJECTED") or status.startswith("request")
            first = chunks[i].strip().split("\n")[0][:58]
            print(f"  [{i:2}] {status:<46} {first}", file=sys.stderr)

    out_path = re.sub(r"(\.[^.]+)$", r".plain\1", path)
    open(out_path, "w").write(head + imports + "\n".join(t for t, _ in results))
    kept = len(results) - bad
    print(f"\n{kept}/{len(results)} chunks rewritten, {bad} fell back to the original",
          file=sys.stderr)
    print(out_path)


if __name__ == "__main__":
    main(sys.argv[1])
