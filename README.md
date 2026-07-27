# Akasha Wira International — Cinematic Redesign

Apple/Tesla-inspired cinematic product site untuk PT Akasha Wira International Tbk (IDX: ADES).

## Stack
- Next.js 14 App Router + TypeScript (strict)
- Tailwind CSS 3.4
- Framer Motion 11
- Plus Jakarta Sans + Poppins (self-hosted via `next/font/local`)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run typecheck # tsc --noEmit
npm run lint     # next lint
npm run build    # prerender (JANGAN dijalankan di sesi paralel per-brand — lihat AGENTS.md §3)
```

## Struktur
- `app/page.tsx` — Homepage (cinematic scenes)
- `app/brands/[slug]/page.tsx` — Brand page (dynamic route)
- `app/brands/[slug]/[line]/page.tsx` — Sub-brand / product-line page
- `app/about`, `app/investor`, `app/careers`, `app/contact`, `app/governance` — halaman info
- `content/brands/*.ts` — **satu file config per brand** (sumber data brand: teks, warna, produk, showcase)
- `content/sub-brands/*.ts` — satu file config per sub-brand (product line)
- `lib/brands.ts`, `lib/subBrands.ts` — tipe + helper; registry `BRANDS`/`SUB_BRANDS` **di-auto-discover** dari `content/` (webpack `require.context`)
- `components/home/*` — scene homepage (HeroCarousel, DivisionCards, StickyProductReveal, BentoGrid, SensoryStrip, CompanyStatement)
- `components/brand/*` — section brand page (BrandHero, ProductLineup, BrandIntro, BrandAbout, BrandShowcase, CrossSell, BrandCTA)
- `components/subbrand/*` — section sub-brand page (SubBrandHero, SubBrandShowcase, SubBrandTemplate)
- `components/layout/*` — Navbar, MegaMenu, Footer, BackToTop

## Menambah brand / sub-brand
**Registrasi otomatis.** Menambah brand = membuat **satu file** `content/brands/{slug}.ts` + folder aset
`public/brand/{slug}/`. Menambah sub-brand = satu file `content/sub-brands/{parent}--{slug}.ts` + folder
aset bersarang. Tidak perlu mengedit registry mana pun; route muncul otomatis.

Panduan lengkap (struktur wajib = Hair Energy, aturan aset, checklist): **[docs/BRAND_PAGE_GUIDE.md](docs/BRAND_PAGE_GUIDE.md)**.
Konvensi umum: **[AGENTS.md](AGENTS.md)**. Spesifikasi ukuran aset: `docs/PANDUAN-ASET.md` dkk.

## Design principles
- Satu ide per viewport
- Full-bleed imagery (hanya banner hero yang full-bleed; section lain pakai `max-w-content`)
- Casual-modern typography (Plus Jakarta Sans, sentence case)
- Scroll-triggered reveals
- `prefers-reduced-motion` respected
