# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — type-check with `tsc -b` then build with Vite
- `npm run lint` — ESLint across the project
- `npm run deploy` — build then deploy to GitHub Pages via `gh-pages -d dist`

No test framework is configured.

## Architecture

Single-page personal portfolio site (syzzhd.web.id). React 19 + TypeScript + Vite + Tailwind CSS 3.

### App structure

`App.tsx` composes the full page: `SmoothScroll` (Lenis) wraps everything, `Preloader` and `FullscreenMenu` are overlays, then a scrollytelling hero followed by the main content sections stacked in a single `div`.

### Key directories

- `src/components/sections/` — page sections (hero-scrolly, bento-stats, project-showcase, cta, etc.). Each is a self-contained section of the page.
- `src/components/ui/` — reusable animated primitives (text-reveal, background-beams, spotlight, bento-grid, fade-in, badge, section wrapper). Many are Aceternity UI-style components using Framer Motion.
- `src/components/layout/` — app shell: smooth-scroll (Lenis), preloader, fullscreen-menu, footer. Note: `layout.tsx` contains an older Layout/Navbar/Footer that is **not currently used** by App.tsx.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

### Styling

- Dark-only theme: black background, white text, emerald-500 accent.
- Font: Outfit (Google Fonts import in `index.css`, configured in `tailwind.config.js`).
- Tailwind config adds CSS custom properties for all colors via `addVariablesForColors` plugin, and defines `spotlight`/`shimmer` keyframe animations.
- Custom scrollbar and selection styles in `index.css`.

### Animation approach

Scroll-driven animations use Framer Motion's `useScroll` + `useTransform` (see `hero-scrolly.tsx`). Entry animations use the custom `FadeIn` component. Text effects use `TextReveal` (word-by-word scroll reveal) and `TextGenerateEffect`.

### Deployment

GitHub Pages with custom domain `syzzhd.web.id` (CNAME in `public/`). Vite `base` is set to `'/'`.
