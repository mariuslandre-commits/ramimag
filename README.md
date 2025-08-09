# Marius André — Director of Business Development (Next.js)

Executive-grade personal site. Stack: **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Framer Motion + MDX + next/image**.

> **Brand**: Colors aligned to **coesio.com** (deep navy, avocado green, light blue, orange). Update the tokens in `tailwind.config.ts` (and duplicated CSS vars in `styles/globals.css`) with the **exact hex values** you want. Current values are AA-contrast safe approximations.

## Quick start
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```
Deploy on **Vercel**: push to GitHub → "New Project" → import repo → build.

## File layout
- `app/` — App Router pages (`/`, `/journey`, `/case-studies/[slug]`), SEO (`robots.ts`, `sitemap.ts`), API route for contact form.
- `components/` — UI components, analytics placeholders, case-study card, timeline, testimonials, contact form.
- `content/case-studies/*.mdx` — MDX case studies with front-matter (title, summary).
- `data/` — `icp.yml`, `training.yml`, `logos.json`, `testimonials.json`.
- `public/` — images + `resume.pdf`.
- `styles/globals.css` — base styles, focus states, reduced motion.
- `lib/` — MDX loader and JSON‑LD helpers.

## Content editing
- **Hero / Pillars**: `components/Hero.tsx`
- **Metrics**: `components/Metrics.tsx`
- **Logos**: drop grayscale SVG/PNGs into `public/logos` and list in `data/logos.json`
- **ICP / Playbooks**: `data/icp.yml`
- **Training**: `data/training.yml` (add badges later if needed)
- **Testimonials**: `data/testimonials.json` (role/company optional)
- **Case studies**: add MDX files in `content/case-studies` and they auto‑route to `/case-studies/[slug]`
- **Resume**: place your PDF as `public/resume.pdf`

## Forms
API route posts to **Formspark** if `FORMSPARK_FORM_ID` is set; otherwise logs to server console in dev. Swap to Resend easily in `app/api/contact/route.ts`.

## Analytics
Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable tracking (optional).

## Accessibility & Performance
- WCAG 2.2 AA contrast (tokens chosen accordingly)
- Keyboard focus states
- `prefers-reduced-motion` respected (reduced smooth scroll)
- `next/image` for optimized images
- Core Web Vitals target ≥95 (ship small, avoid heavy libs)

## SEO
- Canonical + OG/Twitter meta in `app/layout.tsx`
- `robots.ts` & `sitemap.ts`
- JSON‑LD (**Person**) injected via `lib/seo.ts`

## shadcn/ui
Minimal primitives (`button`, `card`, `input`, `textarea`). Add more with `npx shadcn-ui@latest add <component>` if desired.

## Color tokens (update here for brand parity)
```ts
// tailwind.config.ts
brand: {
  navy:   '#0B2333',
  navy2:  '#133A4F',
  light:  '#A7CDE6',
  green:  '#6EA245',
  orange: '#F29D49',
}
```
Mirror in `styles/globals.css` CSS variables for non‑Tailwind usages.

## Lovable handoff
- Upload the zipped project or connect your GitHub repo to Lovable.
- Ensure `public/resume.pdf` exists (rename your provided CV to `resume.pdf`).
- Replace images in `public/images` (headshot, panel, team). Suggested aspect ratios: headshot **4:5**, panel/team **16:9**.
- Update palette hexes to **match coesio.com** exactly (single source of truth: `tailwind.config.ts`).

## TODOs
- [ ] Replace brand hexes with exact **coesio.com** values if different.
- [ ] Add real logos to `public/logos` and list them in `data/logos.json`.
- [ ] Drop your actual headshot and photos into `public/images`.
- [ ] Confirm testimonials with full names/titles as permitted.
- [ ] Add Calendly link when ready.
