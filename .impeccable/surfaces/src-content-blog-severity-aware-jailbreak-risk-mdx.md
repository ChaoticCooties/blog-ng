---
version: 1
slug: "src-content-blog-severity-aware-jailbreak-risk-mdx"
primary_target: "src/content/blog/severity-aware-jailbreak-risk.mdx"
related_targets: ["route:/blog/severity-aware-jailbreak-risk", "src/components/severity/BinaryContrast.astro", "src/components/severity/PortfolioCoverage.astro", "src/components/severity/SeverityBreakdown.astro", "src/components/severity/BestOfSeverity.astro"]
---

# What an attack success rate leaves out

Mode: **Read**. Extend this article within the incumbent research-journal style, explicitly pinned by the user through the existing “Anatomy of a Jailbreak” post. No visual-world exploration or new global system is required; `DESIGN.md` and `.impeccable/design.json` remain unchanged.

## Reading purpose and figures

Help readers distinguish binary success, request coverage across repeated attempts, and ordinal severity without treating judge labels as demonstrated harmful capability. Four numbered figures follow the argument:

1. **BinaryContrast:** two supplied response summaries can each contribute one binary success while raising different questions about usefulness and consequences. Procedural details are omitted; no severity scores are assigned to these examples.
2. **PortfolioCoverage:** paired horizontal-bar panels share a 0–100% scale. Individual-response rates divide by **1,590 responses per run**; ten-attempt request coverage divides by **159 requests per run**. Counts are:

   | Run | Successful responses / 1,590 | Requests reached / 159 |
   | --- | ---: | ---: |
   | Renegade / Llama | 466 | 123 |
   | GCG / Llama | 72 | 44 |
   | Renegade / Gemma | 213 | 78 |
   | GCG / Gemma | 76 | 29 |

   The study totals 6,360 responses: 159 requests × ten selected suffixes × two attacks × two models. The portfolio is not independent random sampling.
3. **SeverityBreakdown:** each stacked bar totals that run’s **binary successes**, not all responses. Renegade / Llama uses 466 as its denominator: scores 0–1 = 171, score 2 = 79, score 3 = 216. GCG / Gemma uses 76: scores 0–1 = 56, score 2 = 18, score 3 = 2; 52 of those 76 scored 0. Scores 0–1 are grouped consistently because their separate counts were not supplied for Renegade / Llama. Labels retain the small score-3 count. Severity is ordinal and was assessed only after a binary-positive judgement.
4. **BestOfSeverity:** explicitly illustrative sequence `[0,0,0,0,0,0,3,0,0,0]`, with the sole score 3 at attempt seven. The default ten-attempt state shows mean 0.30, highest score 3, and “Yes” for at least one score 3. The mean illustrates dilution, not calibrated risk; this is not measured run data.

## Article implementation

Figures use semantic HTML and CSS, existing fern/moss tokens and type, unframed presentation, readable text counts, and the incumbent numbered HTML captions. This article’s responsive figures reflow: the binary comparison stacks at 540px, portfolio panels at 640px, and the ten-attempt strip tightens spacing at 420px. These are local figure decisions, not changes to the site’s existing SVG conventions.

All four figures carry useful static content. The range control is hidden until enhancement initializes; its native keyboard operation updates the attempt budget, included responses, and polite live summary. The static ten-attempt result remains available without JavaScript. The control has a visible focus outline and a 44px minimum height.

The article remains `draft: true`, displays the draft notice, and emits `noindex, nofollow`. Its direct route is generated for review; production homepage listings, RSS, and published-post navigation exclude it. No deployment is part of this handoff.

## Evidence and verification

Figure data comes from the user-supplied project summary; this work did not audit CSVs or independently validate the biological example, judge outputs, or model identifier. Do not invent observations, severity splits, or unknown repository/report links.

The implementation handoff records a successful production build and desktop/mobile preview verification at **1440px / 390px**, including the keyboard enhancement and static fallback. Screenshots are available in `/tmp/severity-preview.cuwGiw/` (`desktop-header.png`, `mobile-header.png`, desktop/mobile `figure-1` through `figure-4`, and `reference-figure.png`). The separate finish review returned **Approved**, with no material findings. Production preview: `http://127.0.0.1:4322/blog/severity-aware-jailbreak-risk/`.
