# AI Experiments Blog

A clean, minimalist blog built with Astro featuring a warm orange color scheme (#F05D23) and off-white background. Inspired by OpenAI/Anthropic research blogs.

## Features

- 🎨 Beautiful orange (#F05D23) and off-white (#FAF8F5) color scheme
- 📱 Fully responsive design
- ⚡ Lightning-fast static site generation with Astro
- 🎯 Clean, research-focused listing layout
- 🌐 Easy deployment to Netlify, Vercel, or GitHub Pages

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
├── public/             # Static assets (favicon, etc)
├── src/
│   ├── components/     # Reusable components
│   │   └── PostCard.astro
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/          # Route pages
│   │   ├── index.astro       # Homepage
│   │   ├── about.astro       # About page
│   │   └── blog/
│   │       └── model-confessions.astro
│   └── styles/
│       └── global.css        # Global styles
├── astro.config.mjs    # Astro configuration
└── package.json
```

## Adding Blog Posts

Currently using static data. To add posts, simply create new `.astro` files in `src/pages/blog/`.

For a more scalable approach with Markdown files, consider using Astro Content Collections (see Astro docs).

## Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect repository to Netlify
3. Netlify auto-detects Astro
4. Deploy!

### GitHub Pages
1. Uncomment and set `base` in `astro.config.mjs`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Cloudflare Pages
1. Connect your GitHub repository
2. Auto-deploys on push
3. Fast global CDN

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

- **Framework:** Astro 4.0
- **Fonts:** Google Fonts (Crimson Pro, DM Sans)
- **Deployment:** Static HTML/CSS/JS (works anywhere)

## License

MIT
