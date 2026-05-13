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
npm run build    # production build (this is the closest thing to a CI check — it runs the TS compiler)
npm run start    # serve the production build
npm run lint     # run next lint
```

**Before opening a PR, you must at minimum run `npm run build` and confirm it succeeds.** There are no unit tests to run.

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
├── brand/                    Brand-page sections (BrandHero, BrandIntro, ScrollFeatureReveal,
│                             ProductLineup, WhyThisProduct, CrossSell, BrandCTA)
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

The 9 brand slugs are defined in [lib/brands.ts](lib/brands.ts) and rendered through [app/brands/[slug]/page.tsx](app/brands/[slug]/page.tsx):

```
/brands/nestle-pure-life
/brands/vica
/brands/hair-energy
/brands/make-it
/brands/makarizo-professional
/brands/wonhae
/brands/omoide
/brands/floaty
/brands/fitmeup
```

When adding or modifying a brand, update [lib/brands.ts](lib/brands.ts) — do **not** create per-brand page files. The single dynamic route renders all of them.

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

---

## 9. Coding conventions

- **TypeScript strict** — no `any` unless unavoidable, and never widen function signatures to escape a type error.
- **Functional React components only.** No class components.
- **Client components must declare `"use client";`** at the top. Server components are the default in App Router; only opt into client when you need state, effects, or browser APIs (most Framer Motion components require client).
- **Images:** always `next/image`. If you reference a new remote host, add it to `images.remotePatterns` in [next.config.mjs](next.config.mjs).
- **No new dependencies without good reason.** The dependency surface is intentionally small (Next, React, Framer Motion, Tailwind). If a task seems to need a new library, prefer writing it yourself first.
- **No comments explaining what the code does.** Only add a comment when *why* is non-obvious (a workaround, a hidden constraint, a subtle invariant).
- **No README/docs updates unless asked.** Don't generate planning or status markdown files.

---

## 10. Working with content (lib/brands.ts, lib/investor.ts)

These files are the **single source of truth** for site content. When the user asks to change copy, add a product, swap an image, or tweak a feature card:

1. Find the entry in `lib/brands.ts` or `lib/investor.ts`.
2. Edit there — do not duplicate the content into a component.
3. Components consume the data; they should not hardcode brand-specific strings.

The `Brand` type in `lib/brands.ts` defines the schema. Respect it.

---

## 11. Verification before reporting done

For any change touching code:

1. Run `npm run build` and confirm it succeeds (this is the closest thing to a type check + lint we have).
2. For UI changes, run `npm run dev` and visually confirm the page renders correctly. State explicitly if you couldn't verify visually.
3. Check both desktop and mobile widths — many components rely on responsive Tailwind classes.
4. If you touched a brand page, verify **all 9 brand slugs** still render (they share one template).

If `npm run build` fails, **fix the root cause**. Do not weaken types, suppress errors with `@ts-ignore`, or comment out broken code to make the build pass.

---

## 12. Things to avoid

- **Don't add a backend, API routes, database, or auth.** This is a static marketing site.
- **Don't introduce CSS-in-JS (styled-components, emotion).** Tailwind only.
- **Don't replace Framer Motion** with another animation library.
- **Don't generate placeholder Lorem Ipsum** when modifying brand copy — ask, or leave the existing copy.
- **Don't delete or rename files** that are imported elsewhere without updating all imports.
- **Don't commit `node_modules/`, `.next/`, or `tsconfig.tsbuildinfo`.** They're gitignored for a reason.
- **Don't run destructive git commands** (`reset --hard`, `push --force`, branch deletion) without explicit instruction.

---

## 13. Platform notes

The maintainer develops on **Windows 11 with PowerShell**. Paths in this repo use forward slashes in code (`@/components/...`) but file system operations may need backslashes when run from PowerShell. If you generate shell scripts, prefer cross-platform npm scripts in `package.json` over `.sh` files.

---

## 14. When in doubt

- Read [lib/brands.ts](lib/brands.ts) first — most "how does this work?" questions about content are answered there.
- Read [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx) to understand how scenes compose.
- Read [tailwind.config.ts](tailwind.config.ts) to see what design tokens already exist before inventing new ones.
- If a request is ambiguous, ask one clarifying question rather than guessing.
