# Deploying to Netlify

## One-Click Deploy

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize
   - Select your repository
   - Netlify will auto-detect Astro settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Done!** Your site will be live at `your-site-name.netlify.app`

## Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Auto-Deploy

Every push to `main` branch automatically triggers a new deployment.

## Environment Variables

If you need environment variables:
1. Go to "Site settings" → "Environment variables"
2. Add your variables
3. Rebuild the site

That's it! Netlify makes it incredibly simple.
