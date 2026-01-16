# PRIMLogix Marketing Site (Prim React)

[![Build](https://img.shields.io/badge/build-vite-blue)](https://vitejs.dev/)
[![Tag](https://img.shields.io/github/v/tag/carlcgb/prim-react?label=tag)](https://github.com/carlcgb/prim-react/tags)
[![Last Commit](https://img.shields.io/github/last-commit/carlcgb/prim-react?label=last%20commit)](https://github.com/carlcgb/prim-react/commits/main)

Marketing and pricing site for PRIMLogix, built with Vite + Tailwind CSS, deployed on WordPress/Google Cloud VM.

## Highlights
- Multi-page static site (Home, Pricing, Solutions, Industries, Resources, Company)
- Bilingual content (EN/FR) with client-side toggle
- Modular components in `src/components`
- WordPress integration with dynamic asset loading
- Deployed on Google Cloud VM at `34.23.76.77`

## Scripts
- `npm run dev` — start local dev server
- `npm run build` — build production assets
- `npm run preview` — preview production build

## Project Structure
- `src/components` — UI sections (header, footer, hero, etc.)
- `src/pages` — page templates
- `src/entries` — page entry points
- `src/data/content.js` — copy + content data
- `src/styles/main.css` — Tailwind base + custom utilities
- `wordpress/` — WordPress theme files (functions.php, templates)
- `public/` — static assets

## Development
1. `npm install`
2. `npm run dev`
3. Open the local URL shown in the terminal.

## Preview on LAN
`npm run preview -- --host 0.0.0.0 --port 4173`

## Deployment

The site is deployed to a WordPress theme on Google Cloud VM. See **[MAINTENANCE.md](./MAINTENANCE.md)** for complete deployment instructions.

### Quick Deploy
```powershell
# Build
.\node_modules\.bin\vite build
Copy-Item dist\.vite\manifest.json dist\manifest.json -Force

# Package
cd dist; Compress-Archive -Path * -DestinationPath ..\primlogix-dist.zip -Force; cd ..

# Upload & Deploy
gcloud compute scp primlogix-dist.zip wordpress-prim-vm:/tmp/primlogix-dist.zip --zone=us-east1-b
gcloud compute ssh wordpress-prim-vm --zone=us-east1-b --command="cd /var/www/html/wp-content/themes/primlogix-theme && sudo rm -rf dist/* && sudo unzip -o /tmp/primlogix-dist.zip -d dist/ && sudo chown -R www-data:www-data dist/ && sudo chmod -R 755 dist/"
```

## Documentation
- **[MAINTENANCE.md](./MAINTENANCE.md)** — Complete maintenance and deployment guide

