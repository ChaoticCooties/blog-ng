// Renders the shared social share cards from scripts/og/card.html.
// Needs Playwright and a Chrome install. Playwright isn't a project
// dependency; point PLAYWRIGHT at an installed copy:
//   PLAYWRIGHT=/path/to/node_modules/playwright/index.mjs node scripts/og/render-og.mjs
// Outputs 2400x1260 PNGs (2x of the 1200x630 og:image size).

import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { chromium } = await import(process.env.PLAYWRIGHT ?? 'playwright');

const here = dirname(fileURLToPath(import.meta.url));
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUTS = {
  blog: join(here, '..', '..', 'public', 'og-image.png'),
  umbra: process.env.UMBRA_OG || join(here, 'umbra-og.png'),
};

const browser = await chromium.launch({ executablePath: CHROME, args: ['--allow-file-access-from-files'] });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
for (const [card, out] of Object.entries(OUTPUTS)) {
  await page.goto(`${pathToFileURL(join(here, 'card.html')).href}?card=${card}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out });
  console.log(`${card} -> ${out}`);
}
await browser.close();
