# Muhammad Owais Raza — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP (desktop scroll effects only)

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel (existing project: owais-raza-portfolio)
Windows: double-click `deploy.cmd` (preview) or run `deploy.cmd prod` (production).
macOS/Linux: `./deploy.sh` (preview) or `./deploy.sh prod` (production).
The script installs dependencies, logs in if needed, links the project and deploys.
Better: push this folder to a GitHub repo and import it in Vercel — every push then deploys automatically.

## Where things live
| What | File |
|---|---|
| All copy: bio, stats, services, projects, case studies, skills, experience | `content/site.ts` |
| Colours (resume palette) and motion timings | `app/globals.css` (`:root` tokens) |
| Fonts | `app/layout.tsx` (Inter Tight via `next/font`) |
| Scroll reveal, counters, parallax, stacking cards | `components/Motion.tsx` |
| Section components | `components/*.tsx` |
| Images | `public/images/*.webp` |
| Resume PDFs | `public/docs/` |

## Change the colours
Edit the RGB triplets in `:root` in `app/globals.css`. Nothing is hard-coded in components.

## Add or replace a project screenshot
1. Put a 16:10 WebP (about 1280×800) in `public/images/`.
2. Add `image`, `alt`, `w`, `h` to the project in `content/site.ts`. The Lux Style Awards tile is a typographic placeholder until you add one.

## Checks run before delivery
- `next build` passes (types + lint), first-load JS about 98 kB.
- axe-core (WCAG 2 A/AA + best practices): 0 violations.
- No horizontal scroll at 390px and 1440px; `prefers-reduced-motion` respected.
