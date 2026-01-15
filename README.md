# PRIMLogix Marketing Site (Prim React)

[![Build](https://img.shields.io/badge/build-vite-blue)](https://vitejs.dev/)
[![Tag](https://img.shields.io/github/v/tag/carlcgb/prim-react?label=tag)](https://github.com/carlcgb/prim-react/tags)
[![Last Commit](https://img.shields.io/github/last-commit/carlcgb/prim-react?label=last%20commit)](https://github.com/carlcgb/prim-react/commits/main)

Marketing and pricing site for PRIMLogix, built with Vite + Tailwind CSS.

## Highlights
- Multi-page static site (Home, Pricing, Solutions, Industries, Resources, Company).
- Bilingual content (EN/FR) with client-side toggle.
- Modular components in `src/components`.

## Scripts
- `npm run dev` — start local dev server
- `npm run build` — build production assets
- `npm run preview` — preview production build

## Project Structure
- `src/components` — UI sections
- `src/pages` — page templates
- `src/entries` — page entry points
- `src/data/content.js` — copy + content data
- `src/styles/main.css` — Tailwind base + custom utilities
- `public/` — static assets

## Development
1. `npm install`
2. `npm run dev`
3. Open the local URL shown in the terminal.

## Preview on LAN
`npm run preview -- --host 0.0.0.0 --port 4173`

