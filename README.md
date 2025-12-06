# blog-ng

A clean, minimalist blog built with Astro featuring a warm orange color scheme and off-white background. Focused on AI and cybersecurity research content.

## Features

- 🎨 Beautiful color-coded categories (Orange for AI, Sage Green for Cybersecurity, Golden Yellow for AI/Cyber)
- 📱 Fully responsive design
- ⚡ Lightning-fast static site generation with Astro
- 📝 MDX support for rich content
- 🎯 Clean, research-focused layout
- 🚀 Automated GitHub Pages deployment

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
├── public/                    # Static assets (favicon, etc)
├── src/
│   ├── components/            # Reusable components
│   │   └── PostCard.astro
│   ├── content/               # Content collections
│   │   ├── blog/              # Blog posts (MDX)
│   │   └── config.ts          # Content schema
│   ├── layouts/               # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/                 # Route pages
│   │   ├── index.astro        # Homepage
│   │   └── blog/
│   │       └── [...slug].astro  # Dynamic blog routes
│   └── styles/
│       └── global.css         # Global styles
├── astro.config.mjs           # Astro configuration
└── package.json
```

## Adding Blog Posts

Blog posts are managed using Astro Content Collections with MDX support.

To add a new post, create an `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
date: 2025-12-07
description: "A brief description of your post"
category: "AI"  # Options: AI, Cybersecurity, AI / Cyber
tags: ["tag1", "tag2"]
---

Your content here...
```

### Category Colors
- **AI**: Orange (#F05D23)
- **Cybersecurity**: Sage Green (#70A37F)
- **AI / Cyber**: Golden Yellow (#D4A015)

## Deployment

### GitHub Pages (Configured)

The site is configured for automatic deployment to GitHub Pages via GitHub Actions.

**Setup:**

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/chaoticooties/chaoticooties.github.io.git
   git branch -M main
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. Your site will be live at:
   - GitHub URL: `https://chaoticooties.github.io/`
   - Custom domain: `https://cooties.io/` (if configured)

**Automatic Deployments:**
- Every push to `main` branch triggers automatic build and deployment
- Check deployment status in the **Actions** tab

### Alternative Deployment Options

**Netlify:**
- Change `site` in `astro.config.mjs` to your Netlify URL
- Connect repository to Netlify
- Auto-deploys on push

**Vercel/Cloudflare Pages:**
- Connect GitHub repository
- Auto-detects Astro configuration
- Fast global CDN

## Customization

### Colors
Edit colors in `src/styles/global.css`:
```css
:root {
  --color-primary: #F05D23;      /* Orange */
  --color-bg: #FAF8F5;           /* Off-white */
  --color-text: #1A1A1A;         /* Near-black */
}
```

### Fonts
Current fonts (in `global.css`):
- Display: Crimson Pro (serif)
- Body: DM Sans (sans-serif)

Change the Google Fonts import to use different fonts.

## Tech Stack

- **Framework:** Astro 5.0
- **Content:** MDX for blog posts with Content Collections
- **Fonts:** Google Fonts (Crimson Pro, DM Sans)
- **Deployment:** GitHub Pages with GitHub Actions
- **Hosting:** Static HTML/CSS/JS (works anywhere)

## License

MIT
