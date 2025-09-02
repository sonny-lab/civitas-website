# Civitas Website Deployment Guide

## Overview
Your Civitas website is now ready for permanent deployment! You have several excellent options for hosting your React website with your custom domain from Namecheap.

## Deployment Options

### Option 1: Netlify (Recommended)
**Best for:** Ease of use, automatic deployments, excellent performance

**Pros:**
- Free tier with generous limits
- Automatic deployments from GitHub
- Built-in CDN for fast global loading
- Easy custom domain setup
- SSL certificates included
- Form handling capabilities

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your `civitas-website` repository
5. Build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Once deployed, go to Site settings > Domain management
8. Add your custom domain from Namecheap
9. Follow Netlify's instructions to update your DNS settings in Namecheap

### Option 2: Vercel
**Best for:** React/Next.js optimization, developer experience

**Pros:**
- Excellent React support
- Automatic deployments from GitHub
- Global CDN
- Free tier available
- Easy custom domain setup

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up/log in
2. Click "New Project"
3. Import your `civitas-website` repository from GitHub
4. Vercel will auto-detect it's a React app
5. Deploy with default settings
6. Add your custom domain in the project dashboard

### Option 3: GitHub Pages
**Best for:** Simple, free hosting directly from GitHub

**Pros:**
- Completely free
- Direct integration with your GitHub repository
- Simple setup

**Cons:**
- Less features compared to Netlify/Vercel
- Manual build process required

**Steps:**
1. In your GitHub repository, go to Settings > Pages
2. Source: Deploy from a branch
3. Branch: Select `main` and `/docs` folder (you'll need to build to docs folder)
4. Or use GitHub Actions for automated builds

## Custom Domain Setup (Namecheap)

Once you've deployed to your chosen platform, you'll need to configure your Namecheap domain:

### For Netlify/Vercel:
1. In your hosting platform, add your custom domain
2. Note the DNS records provided (usually CNAME or A records)
3. In Namecheap:
   - Go to Domain List > Manage > Advanced DNS
   - Add the DNS records provided by your hosting platform
   - Wait 24-48 hours for DNS propagation

### DNS Records Example (Netlify):
- Type: CNAME
- Host: www
- Value: [your-site-name].netlify.app

- Type: A
- Host: @
- Value: [IP provided by Netlify]

## Content Management Workflow

With your new Markdown-based system:

1. **Add new blog posts:** Create `.md` files in `content/blog/`
2. **Add development updates:** Create `.md` files in `content/development/`
3. **Run the update script:** `./update_content.sh`
4. **Commit and push:** Git will automatically trigger a new deployment

## Recommended: Netlify
For your use case, I recommend **Netlify** because:
- It's beginner-friendly
- Excellent free tier
- Automatic deployments from GitHub
- Great performance with global CDN
- Easy custom domain setup
- Reliable and widely used

## Next Steps
1. Choose your preferred hosting platform
2. Follow the deployment steps above
3. Configure your custom domain
4. Test the live website
5. Start adding content using your new Markdown workflow!

Your website will be automatically redeployed every time you push changes to your GitHub repository.

