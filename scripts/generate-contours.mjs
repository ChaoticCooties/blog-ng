// Generates topographic contour textures for the Field Survey design.
// Heightfield (seeded fBm value noise + terrain peaks) -> marching squares
// -> joined, Chaikin-smoothed polylines. Every 5th level is an index contour.
// Output SVGs are used as CSS masks, so stroke color is irrelevant (black).
//
// Usage: node scripts/generate-contours.mjs

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'textures');

const TEXTURES = [
  // Hero: summit in the right two-thirds; flat ground on the left where the title sits.
  { name: 'contours-hero', width: 1600, height: 720, seed: 7, levels: 22, flatUntil: 0.42, peaks: [[0.74, 0.46, 1.1, 0.2], [0.95, 0.1, 0.4, 0.16]] },
  // Statement (About hero): summit in the top-right corner, flat ground under the headline and intro.
  { name: 'contours-statement', width: 1600, height: 720, seed: 11, levels: 20, flatUntil: 0.72, labelMinX: 0.82, peaks: [[0.92, 0.16, 1.1, 0.16]] },
  // Band: broad, low-relief terrain for wide section bands.
  { name: 'contours-band', width: 1600, height: 480, seed: 21, levels: 16, flatUntil: 0.3, labels: false, peaks: [[0.78, 0.6, 0.7, 0.28]] },
  // Strip: header strip for post pages, relief at the far right.
  { name: 'contours-strip', width: 1600, height: 360, seed: 42, levels: 14, flatUntil: 0.55, labelMinX: 0.8, peaks: [[0.9, 0.35, 0.8, 0.22]] },
];

const CELL = 10;
const ELEVATION_BASE = 120; // metres at level 0 (synthetic survey labels)
const ELEVATION_STEP = 20;
const LABELS_PER_INDEX_LINE = 1;
const INDEX_EVERY = 5;
const CHAIKIN_PASSES = 2;
const MIN_POINT_GAP = 6;

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeValueNoise(rand, size) {
  const grid = Array.from({ length: size * size }, rand);
  const at = (x, y) => grid[((y % size) + size) % size * size + (((x % size) + size) % size)];
  const smooth = (t) => t * t * (3 - 2 * t);
  return (x, y) => {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const sx = smooth(x - x0);
    const sy = smooth(y - y0);
    const top = at(x0, y0) * (1 - sx) + at(x0 + 1, y0) * sx;
    const bottom = at(x0, y0 + 1) * (1 - sx) + at(x0 + 1, y0 + 1) * sx;
    return top * (1 - sy) + bottom * sy;
  };
}

const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function heightfield({ width, height, seed, peaks, flatUntil = 0 }) {
  const rand = mulberry32(seed);
  const noise = makeValueNoise(rand, 64);
  const cols = Math.ceil(width / CELL) + 1;
  const rows = Math.ceil(height / CELL) + 1;
  const field = new Float64Array(cols * rows);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const u = (i * CELL) / width;
      const v = (j * CELL) / height;
      let h = 0;
      let amp = 0.5;
      let freq = 2.2;
      for (let o = 0; o < 3; o++) {
        h += amp * noise(u * freq * (width / height), v * freq);
        amp *= 0.45;
        freq *= 2;
      }
      // Flatten relief toward the left edge so text sits on sparse ground.
      h *= 0.25 + 0.75 * smoothstep(flatUntil * 0.4, flatUntil + 0.15, u);
      for (const [px, py, strength, radius] of peaks) {
        const dx = (u - px) * (width / height);
        const dy = v - py;
        h += strength * Math.exp(-(dx * dx + dy * dy) / (2 * radius * radius));
      }
      field[j * cols + i] = h;
    }
  }
  return { field, cols, rows };
}

// Marching squares: returns line segments for one iso level.
function isoSegments({ field, cols, rows }, level) {
  const segments = [];
  const interp = (a, b, va, vb) => a + ((level - va) / (vb - va)) * (b - a);

  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const tl = field[j * cols + i];
      const tr = field[j * cols + i + 1];
      const br = field[(j + 1) * cols + i + 1];
      const bl = field[(j + 1) * cols + i];
      const idx = (tl > level ? 8 : 0) | (tr > level ? 4 : 0) | (br > level ? 2 : 0) | (bl > level ? 1 : 0);
      if (idx === 0 || idx === 15) continue;

      const x = i * CELL;
      const y = j * CELL;
      const top = [interp(x, x + CELL, tl, tr), y];
      const right = [x + CELL, interp(y, y + CELL, tr, br)];
      const bottom = [interp(x, x + CELL, bl, br), y + CELL];
      const left = [x, interp(y, y + CELL, tl, bl)];

      const table = {
        1: [[left, bottom]], 2: [[bottom, right]], 3: [[left, right]], 4: [[top, right]],
        5: [[left, top], [bottom, right]], 6: [[top, bottom]], 7: [[left, top]], 8: [[left, top]],
        9: [[top, bottom]], 10: [[left, bottom], [top, right]], 11: [[top, right]], 12: [[left, right]],
        13: [[bottom, right]], 14: [[left, bottom]],
      };
      segments.push(...table[idx]);
    }
  }
  return segments;
}

// Join segments that share endpoints into polylines.
function joinSegments(segments) {
  const key = ([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`;
  const byPoint = new Map();
  segments.forEach((seg, index) => {
    for (const p of seg) {
      const k = key(p);
      if (!byPoint.has(k)) byPoint.set(k, []);
      byPoint.get(k).push(index);
    }
  });

  const used = new Uint8Array(segments.length);
  const lines = [];

  const extend = (line, fromEnd) => {
    for (;;) {
      const tip = fromEnd ? line[line.length - 1] : line[0];
      const next = (byPoint.get(key(tip)) || []).find((s) => !used[s]);
      if (next === undefined) return;
      used[next] = 1;
      const [a, b] = segments[next];
      const other = key(a) === key(tip) ? b : a;
      if (fromEnd) line.push(other);
      else line.unshift(other);
    }
  };

  segments.forEach((seg, index) => {
    if (used[index]) return;
    used[index] = 1;
    const line = [seg[0], seg[1]];
    extend(line, true);
    extend(line, false);
    lines.push(line);
  });
  return lines;
}

// Drop points closer than MIN_POINT_GAP to the last kept point.
function decimate(points) {
  const kept = [points[0]];
  for (let k = 1; k < points.length - 1; k++) {
    const [x0, y0] = kept[kept.length - 1];
    const [x1, y1] = points[k];
    if (Math.hypot(x1 - x0, y1 - y0) >= MIN_POINT_GAP) kept.push(points[k]);
  }
  kept.push(points[points.length - 1]);
  return kept;
}

function chaikin(points) {
  let pts = decimate(points);
  for (let pass = 0; pass < CHAIKIN_PASSES; pass++) {
    if (pts.length < 3) return pts;
    const out = [pts[0]];
    for (let k = 0; k < pts.length - 1; k++) {
      const [x0, y0] = pts[k];
      const [x1, y1] = pts[k + 1];
      out.push([0.75 * x0 + 0.25 * x1, 0.75 * y0 + 0.25 * y1], [0.25 * x0 + 0.75 * x1, 0.25 * y0 + 0.75 * y1]);
    }
    out.push(pts[pts.length - 1]);
    pts = out;
  }
  return pts;
}

// Place elevation numerals along the longest index lines, on gentle
// segments, in the right-hand part of the field (away from text).
function elevationLabels(lines, elevation, spec) {
  const out = [];
  const candidates = [...lines].sort((a, b) => b.length - a.length).slice(0, LABELS_PER_INDEX_LINE + 3);
  for (const line of candidates) {
    if (out.length >= LABELS_PER_INDEX_LINE) break;
    for (let k = Math.floor(line.length * 0.35); k < line.length - 8; k += 4) {
      const [x0, y0] = line[k];
      const [x1, y1] = line[k + 8];
      const angle = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI;
      // Central safe area, so background-size: cover cropping never cuts a label.
      const inField =
        x0 > spec.width * (spec.labelMinX ?? Math.max(0.5, Math.min(0.8, (spec.flatUntil || 0) + 0.1))) &&
        x0 < spec.width * 0.93 &&
        y0 > spec.height * 0.28 &&
        y0 < spec.height * 0.72;
      if (inField && Math.abs(angle) < 50) {
        out.push(`<text x="${Math.round(x0)}" y="${Math.round(y0 - 6)}" transform="rotate(${angle.toFixed(1)} ${Math.round(x0)} ${Math.round(y0)})">${elevation}</text>`);
        break;
      }
    }
  }
  return out;
}

function toPath(points) {
  const r = (n) => Math.round(n);
  return points.map(([x, y], k) => `${k === 0 ? 'M' : 'L'}${r(x)} ${r(y)}`).join('');
}

function buildSvg(spec) {
  const hf = heightfield(spec);
  let min = Infinity;
  let max = -Infinity;
  for (const v of hf.field) {
    if (v < min) min = v;
    if (v > max) max = v;
  }

  const paths = [];
  const labels = [];
  for (let n = 1; n < spec.levels; n++) {
    const level = min + ((max - min) * n) / spec.levels;
    const lines = joinSegments(isoSegments(hf, level)).filter((l) => l.length > 6);
    if (lines.length === 0) continue;
    const isIndex = n % INDEX_EVERY === 0;
    const smoothed = lines.map((l) => chaikin(l));
    const d = smoothed.map(toPath).join('');
    paths.push(
      `<path d="${d}" stroke-width="${isIndex ? 2.2 : 0.8}" stroke-opacity="${isIndex ? 1 : 0.45}"/>`
    );
    if (isIndex && spec.labels !== false) labels.push(...elevationLabels(smoothed, ELEVATION_BASE + n * ELEVATION_STEP, spec));
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${spec.width} ${spec.height}" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round">${paths.join('')}</g><g fill="#000" font-family="Literata, Georgia, serif" font-style="italic" font-size="15">${labels.join('')}</g></svg>\n`;
}

mkdirSync(OUT_DIR, { recursive: true });
for (const spec of TEXTURES) {
  const svg = buildSvg(spec);
  const file = join(OUT_DIR, `${spec.name}.svg`);
  writeFileSync(file, svg);
  console.log(`${spec.name}.svg  ${(svg.length / 1024).toFixed(1)} KB`);
}
