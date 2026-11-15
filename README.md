# Sahil Bhankhor — Portfolio

Personal developer portfolio rebuilt with **React**, **Vite**, and **Tailwind CSS v4**, blending **Brutalism**, **Minimalism**, and **Glassmorphism** into a clean, lightweight, deployment-ready build.

## Stack & Optimization

- **Framework:** React 19 + Vite 6 + Tailwind CSS v4
- **Zero bloated libraries:** Custom inline SVG icons (no external icon CDN), no heavy animation libraries
- **Optimized media:** Signature helmet artwork compressed to WebP (~60 KB vs. original 1.1 MB PNG — ~95% reduction)
- **Clean Git hygiene:** `.gitignore` excludes `node_modules/` and `dist/`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploying to Vercel

1. Push this repository to GitHub (`SahilBhankhor/Portfolio`).
2. Import the repository in [Vercel](https://vercel.com/new) — `vercel.json` is already configured.
3. Vercel automatically runs `npm run build` and deploys `dist/`.

## Deploying to GitHub Pages

A ready-to-use GitHub Actions workflow is included at `.github/workflows/deploy.yml` and `vite.config.js` uses `base: './'`:

1. Push to the `main` branch on GitHub.
2. Go to **Repository Settings → Pages → Source** and select **GitHub Actions**.
3. Every push to `main` builds and deploys automatically.
