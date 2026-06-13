# Keshav Swami — Portfolio

Cold Cosmos + Fluid Glassmorphism developer portfolio.
Built with React, Three.js, and Vite. Deploys free to GitHub Pages or Vercel.

---

## Editing Content

**All your content lives in one file: `src/data.js`**

- Add/remove projects → edit the `projects` array
- Update skills → edit the `skills` array
- Change bio, links, stats → edit the `personal` object
- Add research → edit the `research` array
- Update experience → edit the `experience` array

You never need to touch any component file to update content.

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Deploy to GitHub Pages (Free)

1. Push the project to a GitHub repo
2. Run `npm run build` — this creates a `dist/` folder
3. Install the deploy tool:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
5. Run `npm run deploy`
6. Go to your repo → Settings → Pages → set source to `gh-pages` branch

Your site will be live at: `https://keshavswami04.github.io/portfolio`

---

## Deploy to Vercel (Easiest, Free)

1. Push to GitHub
2. Go to vercel.com → Import project → select your repo
3. Vercel auto-detects Vite — just click Deploy
4. Done. Gets a free `.vercel.app` domain instantly.

---

## Tech Stack

- React 18 + Vite
- Three.js (3D icosahedron + wave plane)
- Pure CSS animations (no extra animation libraries needed)
- Google Fonts: Syne (display) + DM Sans (body) + JetBrains Mono (code)

---

## Customization Tips

### Change accent colors
Edit CSS variables in `src/index.css`:
```css
--ice: #7dd8f8;        /* primary ice blue */
--magenta: #f020a0;    /* magenta accent */
```

### Change 3D speed / behavior
Edit `src/components/HeroCanvas.jsx`:
- Wave speed: `t * 0.6` → increase for faster waves
- Icosahedron rotation: `t * 0.15` → increase for faster spin
- Particle count: change `220` in the particle section

### Loading screen duration
Edit `src/components/Loader.jsx`:
- `t1 = 800ms` → when name appears
- `t2 = 2600ms` → when tide is full
- `t3 = 3800ms` → fade out starts
- `t4 = 4200ms` → site appears
