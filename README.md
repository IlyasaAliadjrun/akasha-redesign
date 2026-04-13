# Akasha Wira International — Cinematic Redesign

Apple/Tesla-inspired cinematic product site untuk PT Akasha Wira International Tbk (IDX: ADES).

## Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- Framer Motion
- Plus Jakarta Sans (Google Fonts)

## Run
```bash
npm install
npm run dev
```
Buka http://localhost:3000

## Struktur
- `app/page.tsx` — Homepage (7 cinematic scenes)
- `app/brands/[slug]/page.tsx` — Brand page template (dynamic route untuk 9 brand)
- `app/about`, `app/investor`, `app/careers`, `app/contact` — halaman info
- `lib/brands.ts` — sumber data semua brand, produk, dan features
- `components/home/*` — scene homepage (HeroCarousel, DivisionCards, StickyProductReveal, BentoGrid, SensoryStrip, CompanyStatement)
- `components/brand/*` — template brand page (Hero, ScrollFeatureReveal, ProductLineup, LifestyleGallery, CrossSell, CTA)
- `components/layout/*` — Navbar, MegaMenu, Footer

## Brand Routes
- `/brands/nestle-pure-life`
- `/brands/vica`
- `/brands/hair-energy`
- `/brands/make-it`
- `/brands/makarizo-professional`
- `/brands/wonhae`
- `/brands/omoide`
- `/brands/floaty`
- `/brands/fitmeup`

## Design principles
- Satu ide per viewport
- Full-bleed imagery
- Casual-modern typography (Plus Jakarta Sans, sentence case)
- Scroll-triggered reveals
- `prefers-reduced-motion` respected
