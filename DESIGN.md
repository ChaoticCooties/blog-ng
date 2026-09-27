---
name: Cooties@Blog
description: A research-lab journal for AI security work, set in a naturalist field survey.
colors:
  fern: "#36704D"
  forest: "#1D3526"
  fern-wash: "#DCE8D9"
  tag-green: "#DCE7D6"
  contour-sage: "#8FAE8C"
  danger: "#A4452F"
  lichen: "#F1F4EC"
  paper: "#FAFBF7"
  panel: "#E7ECE1"
  code-bg: "#E9EEE4"
  rule: "#D6DECF"
  rule-strong: "#B9C7B2"
  moss-ink: "#1C2B21"
  ink-2: "#435347"
  ink-3: "#56665A"
  figure-mid: "#7C8E7D"
  on-deep-strong: "#FFFFFF"
  on-deep: "#E4EDE6"
  on-deep-2: "#C3D5C8"
  on-deep-3: "#98B4A0"
  on-deep-line: "#4A7059"
  on-deep-contour: "#3F654E"
typography:
  display:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.5rem + 5.2vw, 5.75rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 24"
  headline:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.375rem, 1.6rem + 3.2vw, 3.875rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 24"
  quote:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 24"
  title-featured:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
    fontVariation: "'opsz' 24"
  title:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.625rem, 1.35rem + 1vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 24"
  title-list:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.15rem + 0.8vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.3
    fontVariation: "'opsz' 24"
  subtitle:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 24"
  card-title:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.3
  heading-4:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  standfirst:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.05rem + 0.55vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.45vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  annotation:
    fontFamily: "Literata, Iowan Old Style, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  ui:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  label-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "4px"
  md: "6px"
  button: "8px"
  lg: "10px"
  xl: "12px"
  pill: "999px"
spacing:
  gutter: "2rem"
  gutter-mobile: "1.25rem"
  measure: "40rem"
  wide: "60rem"
  wide-rail: "50rem"
  page: "76rem"
  rail: "12rem"
  split-gap: "2rem 4rem"
  band: "clamp(4rem, 2.5rem + 5vw, 7rem)"
components:
  filter-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 1rem"
    height: "40px"
  filter-chip-active:
    backgroundColor: "{colors.fern}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
  tag-pill:
    backgroundColor: "{colors.tag-green}"
    textColor: "{colors.fern}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.7rem"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.forest}"
    typography: "{typography.ui}"
    rounded: "{rounded.button}"
    padding: "0.7rem 1.4rem"
    height: "44px"
  button-light-hover:
    backgroundColor: "{colors.lichen}"
    textColor: "{colors.forest}"
  button-ghost:
    textColor: "{colors.on-deep}"
    typography: "{typography.ui}"
    rounded: "{rounded.button}"
    padding: "0.7rem 1.4rem"
    height: "44px"
  button-ghost-hover:
    textColor: "{colors.on-deep-strong}"
  contents-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "1.25rem 1.5rem"
  post-nav-link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.moss-ink}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.25rem"
  code-block:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.moss-ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.lg}"
    padding: "3.25rem 1.5rem 1.25rem"
  copy-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.md}"
    padding: "0.3rem 0.6rem"
  copy-button-copied:
    textColor: "{colors.fern}"
  copy-button-failed:
    textColor: "{colors.danger}"
  figure-caption:
    textColor: "{colors.ink-2}"
    typography: "{typography.ui}"
    width: "40rem"
---

# Design System: Cooties@Blog

## Overview

**Creative North Star: "The Field Survey Journal"**

The site is a research-lab journal in the structure of Transformer Circuits, OpenAI interpretability, and Goodfire: split label-and-content layouts, a byline set as a definition list, a centered reading measure, and numbered figures that break out to a wider column. That structure sits in a naturalist field survey. The page is lichen off-white with a fine paper grain, the ink is moss, the one accent is fern, and heroes and section bands carry generated topographic contour fields with heavier index contours and italic elevation numerals.

The survey material frames the work and never competes with it. Texture lives at the edges of the reading experience (heroes, bands, the top of a post) and falls away before the text starts. Post bodies are clean pages. Density is low and deliberate: generous band padding, one accent, hairline rules instead of boxes. The system rejects stock topographic wallpaper and the cream-and-serif nature look; the contours are generated for each surface and placed to avoid text.

**Key Characteristics:**

- Lichen page with paper grain; moss ink; a single fern accent; a forest-green band for emphasis.
- Generated contour fields, applied as CSS masks, only in heroes and section bands.
- Literata for titles and italic map-annotation labels; Geist for text and UI.
- Split label/content layout as the standing section structure.
- Distill-style post column: 40rem text measure, 60rem wide figure column, unframed figures with numbered HTML captions.
- The robot logo appears once, in the site header, unchanged.

## Colors

A restrained green-cast palette: tinted neutrals do almost all the work, and one fern accent carries interaction and emphasis.

### Primary

- **Fern** (`fern`): The only accent. Link underlines (at 45% mix), link hover, the active filter chip, tag-pill text, arrow links, the author GitHub link, the 2px top rule on emphasis blocks, the active contents-rail marker, curly quote marks on the proof quote, the italic "Figure N." caption numeral, the copied state of the copy button, and focus outlines.
- **Forest** (`forest`): The deep band background for the closing call to action, the skip link, and the text color on light buttons placed on that band.
- **Fern Wash** (`fern-wash`): Text selection background, and the soft fill for highlighted nodes inside diagrams.
- **Tag Green** (`tag-green`): Tag-pill fill.

### Secondary

- **Contour Sage** (`contour-sage`): The color of contour lines on light surfaces. The contour texture is a mask, so this token alone decides the line color. Opacity varies by surface: 0.55 on heroes, 0.45 on the post strip, 0.28 on soft section bands, and 0.7 on the forest band.

### Tertiary

- **Danger** (`danger`): A rust red reserved for failure states. Its only use is the copy button's failed state (border and text). It's a status color, not a second accent; don't use it for emphasis or decoration.

### Neutral

- **Lichen** (`lichen`): Page background, always under the paper grain. Also the `theme-color` and the light-button hover fill.
- **Paper** (`paper`): White bands, code blocks, filter chips, post navigation cards, the copy button, and neutral fills inside diagrams. The lightest surface.
- **Panel** (`panel`): The collapsed contents panel below 1440px, and muted zone fills inside diagrams.
- **Code Background** (`code-bg`): Inline code chips.
- **Rule** (`rule`): Hairlines between bands, header and footer borders, byline and author-block borders, table rows, contents-rail entries, and inline code borders.
- **Rule Strong** (`rule-strong`): Post-row separators, filter-chip and copy-button borders, blockquote rules, table header rules, and axis and outline strokes inside diagrams.
- **Moss Ink** (`moss-ink`): All headings, body text, and figure titles.
- **Ink 2** (`ink-2`): Ledes, standfirsts, descriptions, figure captions, the author bio, secondary prose, and primary labels inside diagrams.
- **Ink 3** (`ink-3`): Metadata, side labels, byline terms, contents links at rest, list markers, heading anchors, and secondary labels inside diagrams.
- **Figure Mid** (`figure-mid`): The one diagram-only mid-tone, used for arrows, arrowheads, dashed connectors, and data points. It holds at least 3:1 against paper, so non-text marks stay visible.
- **On-deep set** (`on-deep-strong`, `on-deep`, `on-deep-2`, `on-deep-3`, `on-deep-line`, `on-deep-contour`): Colors for the forest band. `on-deep-strong` (pure white) is for headings, the ghost-button hover text, and the focus ring on the band; `on-deep` is body text; `on-deep-2` is secondary text; `on-deep-3` is annotations; `on-deep-line` is button borders; `on-deep-contour` is the contour line color.

### Named Rules

**The One Accent Rule.** Fern is the only chromatic accent. Any new emphasis uses fern, a heavier rule, or type weight; it never introduces a second hue. Danger is a status color for failure, not an accent.

**The Mask Color Rule.** Contour lines take their color from the `--contour` custom property through a CSS mask. Change the line color by setting `--contour` on the surface, as the forest band does; never bake color into the texture files.

**The Alpha Stop Convention.** The `#000` values in the stylesheet are mask-gradient alpha stops, not colors. In `mask-image` gradients, black means "fully shown" and `transparent` means "hidden"; they shape where the contour field shows (the top-right corner ellipse and the bottom fade). They're never painted, so they aren't palette colors. Write new mask stops the same way.

**The Snapped Figure Rule.** Diagram SVGs use palette tokens only: `fern`, `fern-wash`, `paper`, `panel`, `rule-strong`, `moss-ink`, `ink-2`, `ink-3`, plus `figure-mid` for arrows and points. Don't introduce a new hex inside a figure.

## Typography

**Display Font:** Literata (with Iowan Old Style, Georgia, serif)
**Body Font:** Geist (with system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, SF Mono, Menlo)

**Character:** Literata at a fixed optical size (`opsz` 24, weight 500) reads like a journal masthead with a field-guide warmth; its italic doubles as the handwriting of a survey map. Geist keeps the text and interface precise and technical.

### Hierarchy

The ramp has two families of steps: fluid `clamp()` steps for display, titles, and ledes, and fixed rem steps for body and interface text. Every size in the build maps to one of the following steps.

- **Display** (500, `clamp(2.75rem, 1.5rem + 5.2vw, 5.75rem)`, 1.02): The About statement headline only, capped at 16ch.
- **Headline** (500, `clamp(2.375rem, 1.6rem + 3.2vw, 3.875rem)`, 1.08): Page and post titles (`h1`).
- **Quote** (500, `clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)`, 1.18): The About proof quote, with fern curly quotes.
- **Title featured** (500, `clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)`, 1.15): The featured (newest) post title on the index.
- **Title** (500, `clamp(1.625rem, 1.35rem + 1vw, 2rem)`, 1.18): Section headings (`h2`).
- **Title list** (500, `clamp(1.375rem, 1.15rem + 0.8vw, 1.75rem)`, 1.3): Post-row titles on the index.
- **Subtitle** (500, 1.375rem, 1.2): `h3`, including focus-area titles.
- **Card title** (Literata 500, 1.125rem, 1.3): Post navigation titles and the author name.
- **Heading 4** (Geist 600, 1rem): `h4`. Inside post bodies, `h4` steps up to 1.0625rem to match body text.
- **Standfirst** (400, `clamp(1.1875rem, 1.05rem + 0.55vw, 1.4375rem)`, 1.45): Post standfirsts in `ink-2`. The About statement lede uses this step at 40ch.
- **Lede** (400, `clamp(1.125rem, 1.05rem + 0.45vw, 1.375rem)`, 1.45): The index hero lede in `ink-2`, 36ch.
- **Body large** (400, 1.125rem, 1.7): About prose paragraphs. The featured post description sits between body large and body at 1.1875rem.
- **Body** (400, 1.0625rem, 1.7; 1rem below 640px): Reading text in a 40rem column, about 70 characters per line; post descriptions; About secondary lede. Focus-area summaries use 1rem.
- **Annotation** (Literata italic, 1.0625rem): Side labels in split layouts and the proof-quote attribution. On the forest band, annotations use `on-deep-3`. Smaller annotations follow the ramp: the About author byline at 1.125rem in `ink-2`, previous and next labels at 0.9375rem, and the mobile figure scroll hint at 0.875rem.
- **UI** (Geist 400 or 500, 0.9375rem): Header links, filter chips, buttons, byline values, figure captions, table text, the author bio, focus-area post lists, the back link, and the skip link.
- **Label** (Geist 400, 0.875rem, tabular numerals): Dates, post-row metadata, footer, and the contents rail.
- **Label small** (Geist 400 or 500, 0.8125rem): Byline terms (`dt`), tag pills, post tags, the copy button, and depth-2 contents entries. The filter-chip count uses the same step.
- **Mono** (Geist Mono, 0.875rem in blocks, 0.84em inline): Code only.

### Named Rules

**The Map Annotation Rule.** Labels that name a section or a field are Literata italic in sentence case, like notes on a survey sheet. They're never uppercase, letterspaced, or set in Geist.

**The Fixed Optical Size Rule.** Literata headings turn off automatic optical sizing and hold `opsz` 24 at weight 500 at every size, so display and section titles share one cut.

**The Ramp Rule.** New text takes a size from the hierarchy in the preceding list. Interface text is 0.9375rem, metadata 0.875rem, and fine labels 0.8125rem; don't add in-between steps.

## Layout

The page container is 76rem plus a 2rem gutter on each side (1.25rem at 640px and below). Sections are full-bleed bands with vertical padding of `clamp(4rem, 2.5rem + 5vw, 7rem)`; adjacent bands meet on a 1px `rule` hairline. The home hero is shorter (`clamp(2.5rem, 1.5rem + 4vw, 5rem)`) so the post list starts within the first screen, and the About statement is taller (`clamp(4rem, 2.5rem + 7vw, 9rem)`). A page that ends on a band meets the footer with no gap.

The standing section structure is the **split**: a one-third label column and a two-thirds content column with a `2rem 4rem` gap, collapsing to one column at 800px. The label column holds an italic annotation, or the sticky filter list on the index. When the split collapses on About, the side labels are hidden rather than stacked above the content. Hero titles and ledes are left-aligned.

The About page runs five bands in order: the statement (headline, then a Literata-italic author byline in the left column beside the lede), the proof quote with its attribution and arrow link on a paper band, "The work" on a soft contour band, the focus areas on a paper band, and the forest Connect band. Focus areas are derived from the post categories (`AI safety` and `Cybersecurity`), so each area links to the index filtered to that topic.

The index filter keeps its state in the URL (`?topic=`), so filtered views are linkable.

Posts use a Distill-style named grid: a centered text column of 40rem and a wide column of 60rem. Body elements sit in the text column; diagrams, images, and tables break out to the wide column. The post header spans the full width on a contour strip that fades out toward the text. The post ends with tags, an author block, previous and next cards, and a back link.

The contents appears when a post has at least three sections (h2 to h4, indented by depth). It's a `<details>` disclosure. At 1440px and wider, it's open and fixed as a 12rem side rail, 6.5rem from the top, with its left edge at `min(50% - page/2, 50% - wide/2 - 13rem)`. That aligns it with the header logo while keeping it clear of wide figures. Between 1440px and 1679px, the wide column narrows to 50rem so the rail fits beside figures. The rail hides when the footer scrolls into view. Below 1440px, it's a collapsed panel under the byline that opens on tap. The active section is tracked from page load.

On mobile (640px and below), diagrams return to the text column and render at their native viewBox scale: the SVG takes a fixed width per diagram (`--diagram-width`, 720px by default, up to 960px), and it scrolls sideways inside the column with a sticky italic "Scroll sideways to see the full figure" hint. The caption stays in the column below.

### Named Rules

**The Clean Page Rule.** Texture lives in heroes and section bands only. Post bodies have no contours behind reading text; the post header strip fades out before the body starts.

**The Clear Ground Rule.** Contour lines and elevation labels stay clear of text areas. Each texture is generated with flat ground where its text sits, and when a layout still puts text over relief, use the corner mask (as the About statement does) to confine contours to the top-right corner.

**The Clear Rail Rule.** The contents rail never overlaps content. It sits in the margin, narrows the figure column when the margin is tight, and hides near the footer.

## Elevation & Depth

The system is flat. There are no box shadows anywhere. Depth comes from tonal layering (lichen page, paper bands, panel inset, forest band), 1px hairline rules, and the texture layers: a fractal-noise paper grain composited over the page and paper backgrounds, and contour fields drawn on a clipped pseudo-element behind content. Hero and statement contour fields settle in once on load (fade and 1.03 scale over 0.8s, ease-out); `prefers-reduced-motion` turns this off.

The one shading device is the scroll-edge shadow inside code blocks: a 0.75rem moss gradient at 14% that appears only at an edge where a line overflows. It signals that the block scrolls; it doesn't lift the block.

### Named Rules

**The Flat Survey Rule.** Surfaces never lift. To separate or emphasize, change the tone, add a hairline, or add a 2px fern top rule; never add a shadow. Scroll-edge shading is an overflow cue, not elevation.

## Shapes

Corners are gently rounded and scale with the element: 4px for inline code, 6px for the copy button and skip link, 8px for buttons, 10px for code blocks and post navigation cards, and 12px for the contents panel and images. Chips and tags are full pills (999px). Lines are the dominant form: hairline rules divide rows, bands, bylines, and the author block; a 2px fern rule caps emphasis blocks such as the proof caption and focus areas. The contour textures supply the only organic geometry, with 0.8 regular strokes and 2.2 index strokes on every fifth level.

### Named Rules

**The Unframed Figure Rule.** Figures sit directly on the page. Don't put diagrams in boxed panels, cards, or tinted backgrounds.

## Components

### Buttons

Buttons are quiet and appear only on the forest band.

- **Shape:** Gently rounded (8px), minimum height 44px.
- **Light:** Paper fill, forest text, paper border; Geist 500 at the UI step. Hover shifts the fill to lichen.
- **Ghost:** Transparent with an `on-deep-line` border and `on-deep` text. Hover brightens the text to `on-deep-strong` and the border to `on-deep`.
- **Focus:** 2px outline offset 3px, fern on light surfaces and `on-deep-strong` on the forest band.
- **Arrow link:** The primary call to action on light surfaces is a Geist 500 fern text link with an inline SVG arrow that shifts 3px on hover, not a filled button.

### Chips

- **Filter chip:** Paper fill, `rule-strong` border, `ink-2` text, pill shape, with a tabular count in `ink-3`. Hover darkens the border and text. Pressed (`aria-pressed="true"`): fern fill, paper text, count in paper. The filter list is vertical in the sticky label column and wraps into a row below 800px, where chips grow to 44px.
- **Tag pill:** Tag-green fill, fern text, Geist 500 at the label-small step, used for the category on each post row.
- **Post tag:** Outline pill with a `rule` border and `ink-2` text in the post footer.

### Cards / Containers

- **Post row:** Not a card. Each row is divided by a `rule-strong` top hairline, and the whole row is the hit target through the title link. Hover turns the title fern. The first (newest) post is featured with a larger title and description.
- **Post navigation card:** Paper fill, 1px `rule` border, 10px corners; the border turns fern on hover. Labels are italic annotations, and titles use the card-title step. The next card aligns right; the pair stacks below 640px.
- **Author block:** Between two `rule` hairlines at the end of each post, above the navigation cards: the author name in Literata (card-title step), a one-line bio in `ink-2`, and a fern GitHub link. It stacks to one column below 640px.

### Code block

- **Structure:** Each `pre` is wrapped in a positioned code-block container, so the copy button stays fixed in the top-right corner while the code scrolls sideways.
- **Surface:** Paper fill, 1px `rule` border, 10px corners, 3.25rem top padding to clear the button, and scroll-edge shading that appears only on overflow.
- **Focus:** The scrollable `pre` takes the 2px fern focus ring.
- **Copy button:** Paper fill, `rule-strong` border, `ink-2` text at the label-small step. Copied: fern border and text with a check icon. Failed: `danger` border and text.

### Figure

- **Structure:** A figure element holds a scroll wrapper around the SVG and an HTML caption. Titles live in the caption, not inside the SVG; the SVG keeps an accessible `title` and `desc`.
- **Caption:** Centered at the 40rem measure below the figure, at the UI step in `ink-2`. A CSS counter prefixes "Figure N." in italic Literata fern, followed by a bold `moss-ink` title and then the caption text.
- **Color:** Snapped to palette tokens, per the Snapped Figure Rule.
- **Mobile:** Described in Layout.

### Navigation

- **Header:** The robot logo at 50px and the Literata 600 wordmark on the left; Geist links at the UI step on the right in `ink-2`. The current page is `moss-ink` with a 2px fern underline offset 0.5em. Touch targets are at least 44px. The header sits on the page with a `rule` bottom border.
- **Contents:** Described in Layout. The summary reads "Contents" with a count. Links are Geist at the label step in `ink-3` with a 1px `rule` left edge on the rail; hover and the active section turn `moss-ink`, and the active entry takes a fern left edge.
- **Heading anchors:** Section headings in posts reveal a link icon in `ink-3` on hover or focus.
- **Footer:** Copyright and Research, About, and RSS links at the label step between a `rule` top border and the page end. The RSS feed is also linked in `<head>`.

### Byline

A definition list (Author, Published, Category, Reading time) between two `rule` hairlines. Columns auto-fit at a minimum of 7rem each and wrap as space runs out. Terms are `ink-3` at the label-small step; values are `moss-ink` at the UI step with tabular numerals.

### Contour field

A signature surface treatment: a full-bleed band with a contour texture (hero, statement, band, or strip) masked in `--contour`, with optional fade (toward the bottom) and corner (top-right only) variants. The field clips its own overflow, so the load-in scale never spills past the band. The textures come from `scripts/generate-contours.mjs`: a seeded heightfield, marching squares, and Chaikin smoothing, with index contours every fifth level and italic elevation numerals placed away from text.

## Do's and Don'ts

### Do:

- **Do** use the split label/content layout for new sections, with an italic Literata annotation in the label column.
- **Do** put contour fields only in heroes and section bands, and set `--contour-opacity` for the surface (0.55 hero, 0.45 strip, 0.28 soft band, 0.7 forest band).
- **Do** keep contours clear of text, and use the corner or fade mask when text and relief would overlap.
- **Do** break figures, images, and tables out to the 60rem wide column and leave them unframed.
- **Do** caption every diagram with an HTML figcaption (bold title, then text) and let the counter number it.
- **Do** keep diagram SVGs legible on mobile at their native scale with a per-diagram `--diagram-width`, horizontal scroll, and the italic scroll hint.
- **Do** separate content with hairline rules and tonal steps instead of shadows or boxes.
- **Do** take every font size from the recorded ramp.
- **Do** keep every interactive target at least 44px tall, with a 2px fern focus outline (`on-deep-strong` on the forest band).

### Don't:

- **Don't** recolor, redraw, crop, or restyle the robot logo, and don't use it anywhere but the site header (not in heroes, bands, or decoration).
- **Don't** place contours or elevation labels behind post body text.
- **Don't** introduce a second accent hue or colors outside the moss and fern range; `danger` is for failure states only.
- **Don't** add new hex values inside diagrams; snap to palette tokens and `figure-mid`.
- **Don't** put figure titles inside the SVG.
- **Don't** add box shadows or lifted cards.
- **Don't** put diagrams in bordered or tinted panels.
- **Don't** let the contents rail overlap figures or the footer.
- **Don't** use stock topographic images or tile a contour pattern as wallpaper; generate textures with the script so relief avoids text.
- **Don't** replace the research-journal structure with a themed costume concept.
