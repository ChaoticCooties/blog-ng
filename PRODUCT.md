# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **AI safety and ML-security researchers.** They arrive from a link, a paper thread, or a feed, and they read long-form technical work closely: arguments, methods, diagrams, and math. They judge the author by the rigor of the writing.
- **General technical readers.** Engineers interested in AI and security, often arriving from social media or aggregators. They skim the index, pick one post, and decide within a screen whether it rewards reading.

## Product Purpose

Cooties@Blog is the personal research blog of Chegne Eu Joe, published at `cooties.io`. It publishes long-form writing on AI security, LLM pentesting, supply-chain vulnerability research, and opinion on AI and the security labor market. Success means a reader finishes a post, understands the argument, and comes away trusting the author's judgment.

## Positioning

Hands-on offensive security work written up with the care of research writing: real findings (for example, a backdoor found by an agentic scanner) explained through custom diagrams and plain argument, not vendor marketing or listicles.

## Operating Context

- Posts are MDX in `src/content/blog/`, with frontmatter: `title`, `description`, `date`, `category` (`AI`, `Cybersecurity`, `AI / Cyber`), optional `tags`, and `draft`.
- Posts embed custom Astro diagram components (`src/components/*Diagram.astro`, `ContextDifferential`, `FuzzyBoundaries`, `LanguageAmbiguity`, `ArchitectureBenchmark`), code blocks with a copy button, and KaTeX math.
- Posts run from about 1,100 to 4,800 words.
- The site is static Astro 5 with `@astrojs/mdx`, deployed through GitHub Actions (`.github/workflows/deploy.yml`).

## Capabilities and Constraints

- Pages: index (post list with category filter), post template, About.
- Must keep: MDX content and frontmatter schema, diagram components (restyled, not removed), code copy button, KaTeX rendering, Open Graph and Twitter metadata, and existing URLs (`/`, `/about`, `/blog/<slug>`).
- Four published posts; the index must still work with a handful of posts and scale to dozens.

## Brand Commitments

- Name: **Cooties@Blog**, with the short form "Cooties" in navigation. The author's name appears as the byline.
- Existing assets: the robot mascot mark (inline SVG in `BaseLayout.astro`, also `public/favicon.svg` and `public/favicon2.svg`), `public/og-image.png`, and `public/project-umbra-logo.png`.
- The user named research-lab publications as references: Goodfire research, Anthropic research, and Transformer Circuits.
- **Standing preference (2026-09-26):** the site follows the research-lab journal convention, played straight at those publications' craft level. A themed concept (lab notebook with graph-paper margins) was built and rejected: no grid paper, no margin-column layouts, no costume concepts.

## Evidence on Hand

- Four real posts with original diagrams. No testimonials, press, or metrics exist; don't fabricate them.

## Product Principles

1. The writing leads; everything else serves comprehension.
2. Rigor is visible: diagrams, math, and code read as first-class evidence, not decoration.
3. Findings stay factual; no hype framing.
4. A handful of posts should look deliberate, not sparse.
