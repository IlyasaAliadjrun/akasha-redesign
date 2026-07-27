# AGENTS.md

Guidance for AI coding agents (Jules, Claude Code, Cursor, etc.) working on this repository.

---

## 1. Project overview

**Akasha Wira International — Cinematic Redesign**

A cinematic, Apple/Tesla-inspired marketing website for **PT Akasha Wira International Tbk** (IDX: ADES), an Indonesian consumer goods company managing 9 brands across 4 divisions (mineral water, beauty & personal care, professional salon, food).

The site is a content-driven marketing showcase — there is no backend, no auth, no database, no API routes. All content is static and lives in TypeScript files inside `lib/`.

The primary audience is Indonesian, so user-facing copy may mix Indonesian and English. Code, comments, identifiers, and commit messages should remain in English.

---

## 2. Tech stack

| Concern | Choice |
|---|---|
| Framework | **Next.js 14.2.5** (App Router) |
| Language | **TypeScript 5** (strict mode) |
| Styling | **Tailwind CSS 3.4** |
| Animation | **Framer Motion 11** |
| Fonts | Plus Jakarta Sans (via `next/font/google`) |
| Images | `next/image` with remote patterns whitelisted in [next.config.mjs](next.config.mjs) |
| Node | Node 20 (matches `@types/node ^20`) |

There is no test framework, no Storybook, no linter config beyond `next lint`, and no CI configured in this repo.

---

## 3. Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server on http://localhost:3000
npm run typecheck # tsc --noEmit (non-incremental — writes no shared file)
npm run build    # production build (this is the closest thing to a CI check — it runs the TS compiler)
npm run build:verify # same build, reserved for infra / final-integration sessions (see below)
npm run start    # serve the production build
npm run lint     # next lint (eslint-config-next, `next/core-web-vitals`) — baseline is clean
```

**Before opening a PR, you must at minimum run `npm run build` and confirm it succeeds.** There are no unit tests to run.

**Exception — parallel per-brand sessions.** When several sessions run at once (one brand each), `npm run build`
is **forbidden**: concurrent builds fight over the output dir and crash every session. Those sessions verify with
`npm run typecheck` + `npm run lint` plus their **own isolated dev server**, and never build:

```bash
NEXT_DIST_DIR=.next-{brand} PORT=31xx npm run dev
```

`next.config.mjs` reads `NEXT_DIST_DIR` (default `.next`) and derives a matching `tsconfig.next-{brand}.json`, so no
two sessions share a build dir, a port, or a tsconfig. See [docs/BRAND_PAGE_GUIDE.md](docs/BRAND_PAGE_GUIDE.md) §5.

The infra / final-integration session builds via `npm run build:verify`, and only when no other session is running.
Brand auto-discovery is verified to survive a production build: `lib/brands.ts` uses webpack `require.context` with a
static path. Never replace it with a runtime `fs.readdirSync` or a variable dynamic `import()` — both work in dev and
silently drop routes from the build.

---

## 4. Repository layout

```
app/                          Next.js App Router pages
├── layout.tsx                Root layout — Navbar, Footer, BackToTop, Plus Jakarta Sans
├── page.tsx                  Homepage (7 cinematic scenes)
├── not-found.tsx             404
├── about/page.tsx
├── brands/[slug]/page.tsx    Dynamic brand page template (9 brands)
├── careers/page.tsx
├── contact/page.tsx
├── governance/page.tsx
├── investor/page.tsx
└── globals.css

components/
├── home/                     Homepage scenes (HeroCarousel, DivisionCards, StickyProductReveal,
│                             BentoGrid, SensoryStrip, CompanyStatement)
├── brand/                    Brand-page templates (BrandPage, SubBrandPage) + sections
│                             (BrandHero, BrandIntro, ScrollFeatureReveal, ProductLineup,
│                             WhyThisProduct, CrossSell, BrandCTA)
├── page/                     PageHero — full-screen hero shared by the non-brand pages
│                             (About, Investor, Governance, Contact, Careers)
├── subbrand/                 Sub-brand (product-line) page: SubBrandTemplate + sections
│                             (SubBrandHero, SubBrandSpec, SubBrandShowcase)
├── investor/                 RevenueChart
└── layout/                   Navbar, MegaMenu, Footer, BackToTop

lib/
├── brands.ts                 Source of truth for all 9 brands, products, features, divisions
└── investor.ts               Financial/investor data
```

There are no other top-level source folders. `node_modules/`, `.next/`, and `tsconfig.tsbuildinfo` are generated and gitignored — never edit them.

---

## 5. Path aliases

`@/*` resolves to the repo root (see [tsconfig.json](tsconfig.json)).

```ts
import Navbar from "@/components/layout/Navbar";
import { BRANDS } from "@/lib/brands";
```

Always use `@/...` for imports across folders. Use relative imports only within a sibling folder.

---

## 6. Brand routes

All brand slugs are defined in [lib/brands.ts](lib/brands.ts) and rendered through the single dynamic route [app/brands/[slug]/page.tsx](app/brands/[slug]/page.tsx), which picks one of two templates:

- **Top-level brand** → [components/brand/BrandPage.tsx](components/brand/BrandPage.tsx)
- **Sub-brand** (has a `parent`, e.g. Hair Energy under Makarizo) → [components/brand/SubBrandPage.tsx](components/brand/SubBrandPage.tsx)

**Umbrella brands have no page.** A brand that has sub-brands (currently `makarizo` and `makarizo-professional`) exists only to group them: `/brands/makarizo` returns a **404 — deliberately not a redirect**. Consequences you must respect:

- `generateStaticParams` builds from `pageBrands()`, not `BRANDS`.
- **Never** hardcode `` `/brands/${slug}` `` for a brand that might be an umbrella. Use **`brandHref(slug)`** from [lib/brands.ts](lib/brands.ts) — it resolves an umbrella to its `flagship` sub-brand. Listings that shouldn't show umbrellas at all use `pageBrands()`.
- Helpers: `isUmbrella(brand)`, `pageBrands()`, `brandHref(slug)`, `childrenOf(slug)`.

**Brands are auto-discovered — do not edit a shared registry to add one.** Each brand is a standalone module in `content/brands/*.ts` (default-exporting a `Brand`); `lib/brands.ts` collects them via webpack `require.context`. **Adding a brand = one new file in `content/brands/` + its asset folder — nothing else is touched.** To *edit* an existing brand, edit its own file in `content/brands/`. Do **not** add brands to `lib/brands.ts`, and do **not** create per-brand page files. Full workflow, section anatomy, and the "structure = Hair Energy" rules live in **[docs/BRAND_PAGE_GUIDE.md](docs/BRAND_PAGE_GUIDE.md)** — read it before building any brand page.

**Sub-brands (product lines).** A third level exists below brands: a *product line* inside a brand — e.g. Hair Energy's Fibertherapy Creambath, Scentsations, Shampoo, Vitaglitz. These are the "sub-brands". Like brands, they are **auto-discovered**: each is a standalone module in `content/sub-brands/*.ts` (default-exporting a `SubBrand`), collected by `lib/subBrands.ts` via `require.context`. **Adding a sub-brand = one new file in `content/sub-brands/` + its nested asset folder.** They render at the nested route **`/brands/{parent}/{line}`** (e.g. `/brands/hair-energy/creambath`) via [components/subbrand/SubBrandTemplate.tsx](components/subbrand/SubBrandTemplate.tsx).

- **Not in the navbar.** A sub-brand page is reached only by clicking a variant banner in the parent brand's showcase — wire it with `href` on the `ShowcaseVariant` in [lib/brands.ts](lib/brands.ts).
- **Layout** = brand page minus About + Product-lineup: **banner (parallax) → showcase (title image + card grid) → cross-sell → CTA**. The banner keeps parallax; the showcase does **not** (each card image is whole). Card images already include their own background + border, so no card chrome is drawn around them — the image is placed as-is (see `SubBrandShowcase`). Cross-sell + CTA use the **parent** brand ("Rasakan Hair Energy sekarang").
- **Skeleton-first.** Every image field in `SUB_BRANDS` may be empty — an empty slot renders a plain placeholder, so the page works as a wireframe until assets are dropped into `public/brand/{parent}/{line}/{hero,showcase}/` and the paths are filled in. Copy is placeholder too; replace with real wording.
- Terminology note: `components/brand/SubBrandPage.tsx` is a *different, older* thing (the template for a brand that has a `parent` umbrella, e.g. Hair Energy under Makarizo). The product-line template is `components/subbrand/SubBrandTemplate.tsx`.

---

## 7. Design system (Tailwind)

Custom tokens live in [tailwind.config.ts](tailwind.config.ts). Use these instead of arbitrary values whenever possible:

- **Colors:** `text-ink` (#0A0A0A), `bg-paper` (#FAFAFA), division accents (`accent-beverage`, `accent-beauty`, `accent-professional`, `accent-food`, `accent-wellness`), per-brand colors (`brand-npl`, `brand-vica`, `brand-he`, `brand-makeit`, `brand-makpro`, `brand-wonhae`, `brand-omoide`, `brand-floaty`, `brand-fitmeup`).
- **Typography:** `text-hero`, `text-headline`, `text-subhead` (responsive `clamp()` sizes). Font family is `font-sans` (Plus Jakarta Sans).
- **Widths:** `max-w-8xl` (1400px), `max-w-9xl` (1600px).
- **Breakpoints:** standard Tailwind + `xs` (400px) and `3xl` (1920px).

---

## 8. Design principles (must follow)

This site has a strong aesthetic identity. Preserve it:

1. **One idea per viewport.** Don't cram multiple competing messages into a single scroll position.
2. **Full-bleed imagery.** Hero and feature sections should fill the viewport edge-to-edge.
3. **Casual-modern typography.** Plus Jakarta Sans, sentence case (not Title Case Like This), tight letter spacing on display text (`tracking-tightish`).
4. **Scroll-triggered reveals.** Use Framer Motion's `whileInView` or `useScroll` for entrance animations.
5. **Respect `prefers-reduced-motion`.** Any new motion must degrade gracefully — Framer Motion handles this automatically when you use its `MotionConfig` / reduced-motion hooks; if you write custom animations, gate them on the user's preference.
6. **Sentence case in copy.** Indonesian and English copy should both use sentence case unless it's a proper noun or product name.
7. **Responsive, ratio-aware assets.** Every image must be reasoned about on **both** desktop and mobile before it ships — see §9. All content sections share one width token (`max-w-content`); only the main banners are full-bleed.

---

## 9. Assets, responsiveness & image ratios (consider on EVERY asset change)

Any change that touches an image, an aspect ratio, a section's width, or how an asset is displayed **must** be reasoned about per viewport (desktop **and** mobile) and then reflected in the asset guide, so the design team can supply correctly-sized files.

1. **Two viewports, always.** Before changing how an asset renders, work out its display box on **desktop** (the ~900px-wide centered content column) and on **mobile** (full width minus gutter, or full-screen for banners). A landscape asset dropped into a portrait mobile box crops heavily — call it out and pick the right ratio for each view.
2. **Shared section width.** All content sections use the `max-w-content` token (driven by `--content-w` in [app/globals.css](app/globals.css), currently `980px`). Only the main banners ([HeroCarousel](components/home/HeroCarousel.tsx), [BrandHero](components/brand/BrandHero.tsx)) are full-bleed. **Do not reintroduce ad-hoc `max-w-[…]` values on sections** — use `max-w-content` so every section stays edge-aligned. To retune the whole site's width, change the one CSS variable.
3. **Keep the asset guide in sync.** When you change a ratio, width, fit, or add/rename an asset, update **both** [docs/PANDUAN-ASET.md](docs/PANDUAN-ASET.md) and [docs/CHEATSHEET-ASET.md](docs/CHEATSHEET-ASET.md): ratio + resolution + folder + desktop/mobile behavior. This is the **one exception** to "don't update docs unless asked" (§10) — these asset docs MUST stay current.
4. **Best ratio per viewport.** Cards (product, About, division, brand grid, showcase) keep the **same** ratio on both viewports. Full-bleed banners **differ**: the brand banner is 16:9 on desktop but wants a separate **9:16** mobile asset. Record the chosen ratio for *both* views in the guide (see PANDUAN §2b "Rasio terbaik per viewport").
5. **Fit matters.** `object-cover` crops (keep the subject centered in the safe-zone); `object-contain` shows the whole asset (needs a clean solid/transparent background). Always state which one applies.
6. **next/image hygiene.** Always `fill` + an accurate `sizes`; ship one high-res master per asset (≥2× retina) and let the system downscale.

---

## 10. Coding conventions

- **TypeScript strict** — no `any` unless unavoidable, and never widen function signatures to escape a type error.
- **Functional React components only.** No class components.
- **Client components must declare `"use client";`** at the top. Server components are the default in App Router; only opt into client when you need state, effects, or browser APIs (most Framer Motion components require client).
- **Images:** always `next/image`. If you reference a new remote host, add it to `images.remotePatterns` in [next.config.mjs](next.config.mjs).
- **No new dependencies without good reason.** The dependency surface is intentionally small (Next, React, Framer Motion, Tailwind). If a task seems to need a new library, prefer writing it yourself first.
- **No comments explaining what the code does.** Only add a comment when *why* is non-obvious (a workaround, a hidden constraint, a subtle invariant).
- **No README/docs updates unless asked** — *except* the asset guide ([docs/PANDUAN-ASET.md](docs/PANDUAN-ASET.md), [docs/CHEATSHEET-ASET.md](docs/CHEATSHEET-ASET.md)), which §9 requires you to keep in sync on any asset/ratio/width change. Don't generate other planning or status markdown files.

---

## 11. Working with content (lib/brands.ts, lib/investor.ts)

These are the **single source of truth** for site content. When the user asks to change copy, add a product, swap an image, or tweak a feature card:

1. Find the entry: a brand → `content/brands/{slug}.ts`; a sub-brand → `content/sub-brands/{parent}--{slug}.ts`; investor data → `lib/investor.ts`. (`lib/brands.ts` / `lib/subBrands.ts` now hold only the `Brand`/`SubBrand` types, `DIVISIONS`, and helpers — the registries are auto-discovered from `content/`; don't add data there.)
2. Edit the brand's own file — do not duplicate the content into a component.
3. Components consume the data; they should not hardcode brand-specific strings.

The `Brand` type in `lib/brands.ts` (and `SubBrand` in `lib/subBrands.ts`) defines the schema. Respect it. Note `accentClass` (`bg-brand-*`) is legacy and unused — brand accent colour comes from `accentHex`; do not add `bg-brand-*` keys to `tailwind.config.ts`.

---

## 12. Verification before reporting done

For any change touching code:

1. Run `npm run build` and confirm it succeeds (this is the closest thing to a type check + lint we have).
   **In a parallel per-brand session, run `npm run typecheck` + `npm run lint` instead — `npm run build` is forbidden there (§3).**
2. For UI changes, run `npm run dev` and visually confirm the page renders correctly (parallel sessions: with their own
   `NEXT_DIST_DIR`+`PORT`). State explicitly if you couldn't verify visually.
3. Check both desktop and mobile widths — many components rely on responsive Tailwind classes.
4. If you touched a brand page, verify **every brand slug** still behaves: each slug in `pageBrands()` renders 200, and each umbrella slug (`makarizo`, `makarizo-professional`) returns 404. They share one route.

If `npm run build` fails, **fix the root cause**. Do not weaken types, suppress errors with `@ts-ignore`, or comment out broken code to make the build pass.

---

## 13. Things to avoid

- **Don't add a backend, API routes, database, or auth.** This is a static marketing site.
- **Don't introduce CSS-in-JS (styled-components, emotion).** Tailwind only.
- **Don't replace Framer Motion** with another animation library.
- **Don't generate placeholder Lorem Ipsum** when modifying brand copy — ask, or leave the existing copy.
- **Don't delete or rename files** that are imported elsewhere without updating all imports.
- **Don't commit `node_modules/`, `.next/`, or `tsconfig.tsbuildinfo`.** They're gitignored for a reason.
- **Don't run destructive git commands** (`reset --hard`, `push --force`, branch deletion) without explicit instruction.

---

## 14. Platform notes

The maintainer develops on **Windows 11 with PowerShell**. Paths in this repo use forward slashes in code (`@/components/...`) but file system operations may need backslashes when run from PowerShell. If you generate shell scripts, prefer cross-platform npm scripts in `package.json` over `.sh` files.

---

## 15. When in doubt

- Read [lib/brands.ts](lib/brands.ts) first — most "how does this work?" questions about content are answered there.
- Read [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx) to understand how scenes compose.
- Read [tailwind.config.ts](tailwind.config.ts) to see what design tokens already exist before inventing new ones.
- If a request is ambiguous, ask one clarifying question rather than guessing.
