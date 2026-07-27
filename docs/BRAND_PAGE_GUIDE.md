# BRAND_PAGE_GUIDE.md — Brand Page & Sub-Brand Page

Next.js 14.2.5 App Router · TypeScript strict · Tailwind 3.4 · Framer Motion 11. Situs statis.
Konvensi umum: [AGENTS.md](../AGENTS.md). Ukuran kirim ke tim desain: `docs/UKURAN-KIRIM-TIM-DESIGN.md`,
`RASIO-ASET-BRAND-PAGE.md`, `UKURAN-ASET-BRAND-PAGE.md`, `PANDUAN-ASET.md`, `CHEATSHEET-ASET.md`.

---

## 1. Cara kerja & scope

**Titik masuk wajib — buka file ini dulu sebagai acuan, jangan lanjut sebelum membacanya:**

| File | Peran |
|---|---|
| [content/brands/060-hair-energy.ts](../content/brands/060-hair-energy.ts) | **Contoh acuan brand page.** Tiru bentuknya. |
| [content/sub-brands/010-hair-energy--creambath.ts](../content/sub-brands/010-hair-energy--creambath.ts) | **Contoh acuan sub-brand page.** |
| [components/brand/BrandPage.tsx](../components/brand/BrandPage.tsx) · [SubBrandPage.tsx](../components/brand/SubBrandPage.tsx) | Renderer brand page (struktur section identik). |
| [components/subbrand/SubBrandTemplate.tsx](../components/subbrand/SubBrandTemplate.tsx) | Renderer sub-brand page. |
| [lib/brands.ts](../lib/brands.ts) · [lib/subBrands.ts](../lib/subBrands.ts) | Tipe + registry auto-discovery. **Jangan disentuh.** |

**Prasyarat: wajib ada file referensi desain.** Tidak ada lampiran → **BERHENTI**, minta user upload dulu. Jangan mengarang desain, jangan mulai dengan asumsi "nanti disusul".

**Folder default sebuah brand** — `public/brand/{slug}/` berisi `hero/` · `product-lineup/` · `showcase/` · `about/`.

**Dua sinyal, peran berbeda:**

| Sinyal | Menentukan |
|---|---|
| **Folder aset** `public/brand/{slug}/` | **APA yang dibangun.** Hanya keempat folder default → brand page saja. Tiap folder **di luar** keempat itu = **satu sub-brand page**. |
| **Lampiran referensi** | **TAMPILAN** (warna/tipografi/foto/mood). 1 file = brand page saja; >1 file = ada sub-brand page. |

- Konfirmasi silang: jumlah folder ekstra harus cocok dengan jumlah lampiran >1.
- **Kedua sinyal bertentangan → BERHENTI, tanya user** (mis. lampiran menyebut sub-brand yang tidak ada foldernya).
- Yang **bukan** pertentangan: 1 lampiran + ada folder ekstra. Bangun brand page **dan** semua sub-brand page-nya;
  sub-brand tanpa referensi sendiri mengikuti arah visual brand induk. Jangan mengarang gaya baru.

**Umbrella ≠ sub-brand.** Umbrella (`makarizo`, `makarizo-professional`) tidak punya halaman → `/brands/{slug}` **404
disengaja**; ditandai punya anak ber-`parent`. Brand ber-`parent` (mis. `hair-energy`) tetap punya brand page penuh.
Sub-brand/product-line ada di `/brands/{parent}/{line}`.

**Data wajib:** `division` ∈ `beverage|beauty|mens|food`. `hero: boolean` = ikut carousel homepage (default `false`).
`accentHex` = warna aksen (inline style). `accentClass` legacy, isi apa saja, **jangan** tambah warna ke `tailwind.config.ts`.
Path aset selalu `/brand/{slug}/{folder}/...`. Slug & nama file lowercase-dash.

---

## 2. Aturan emas — struktur dari Hair Energy, tampilan dari lampiran

File referensi adalah tujuan **TAMPILAN saja**. **Bukan acuan struktur.**

Struktur **wajib identik** dengan Hair Energy: daftar section, nama, urutan, bentuk/anatomi, komponen yang dipakai.
**Tidak boleh** ada section dikurangi, ditambah, digabung, dipecah, atau diganti nama.
Section yang tidak terlihat di referensi **tetap dibangun** — isi dengan aset folder brand, beri gaya sesuai referensi.
Aset untuk section itu benar-benar tidak ada → **LAPOR ke user**, jangan diam-diam menghilangkan.

**Checklist section — brand page** (urutan wajib persis):

| # | Section | Sumber data | Auto-skip bila data kosong? |
|---|---|---|---|
| 1 | `BrandHero` | `heroLayers`/`heroImage`, `heroContent`, `bannerBg` | tidak |
| 2 | `ProductLineup` | `products[]`, `lineupTitle` | **ya** |
| 3 | `BrandIntro` | `description` | tidak |
| 4 | `BrandAbout` | `about[]` | **ya** |
| 5 | `BrandShowcase` | `showcase` | **ya** |
| 6 | `CrossSell` | otomatis dari registry | tidak |
| 7 | `BrandCTA` | `accentHex`, `tagline` | tidak |

> Section 2/4/5 hilang sendiri kalau datanya kosong. Membiarkannya kosong = menghapus section = **dilarang**.
> `ScrollFeatureReveal` & `WhyThisProduct` dikomentari site-wide di `BrandPage.tsx` — **jangan di-uncomment** untuk satu brand.

**Checklist section — sub-brand page:** `SubBrandHero` → `SubBrandShowcase` → `CrossSell` (pakai parent) → `BrandCTA` (pakai parent).
Sub-brand tidak ada di navbar; dicapai lewat `href` pada varian showcase brand induk.

### Pengecualian tunggal: hero tanpa wording

Brand yang hero-nya **hanya wordmark + gambar produk** (wordmark sudah memuat tagline sebagai bagian gambar — mis. VICA, Wonhae):
blok teks hero boleh tidak ada. **Selain wording hero, tidak ada elemen struktural lain yang boleh dikurangi.**

- **Deteksi:** folder `hero/` **dan** file referensi tidak punya teks tagline/heading terpisah, hanya wordmark art + produk.
- **Ini varian komponen yang sudah didukung, bukan improvisasi.** `BrandHero` merender blok tagline/subtitle/CTA
  **hanya jika** salah satu dari `tagline`/`subtitle`/`ctaText` diisi. Jadi cukup isi `heroContent` dengan `logo` +
  posisi saja, **tanpa** ketiga field itu. Lihat `content/brands/` VICA/Wonhae sebagai contoh hidup.
- `heroContent.theme`: `"dark"` = teks gelap (banner terang), `"light"`/kosong = teks putih. Set sesuai `bannerBg`;
  navbar ikut mengecat dirinya dari nilai ini.

**Yang memang beda tiap brand:** warna (`accentHex`, `bannerBg`), tipografi & mood (via aset), teks/copywriting,
aset gambar, jumlah item produk. **Ragu antara referensi vs Hair Energy → struktur ke Hair Energy, tampilan ke referensi.**

---

## 3. Integritas aset

### 3.1 Audit sebelum dipakai

Untuk **setiap** aset: baca **dimensi natural (px)** dan rasio dari file (jangan menebak). Bandingkan dengan
**lebar slot di breakpoint terbesar × 2** (high-DPI). Kurang → masuk daftar temuan.

**Ukuran render maksimal tiap slot — brand page** (`components/brand/`):

| Section · slot | Render box desktop | `object-fit` | `sizes` di kode | Sumber min |
|---|---|---|---|---|
| Hero · background layer (full-bleed) | = lebar viewport | cover | `(min-width:768px) 50vw, 100vw` ⚠️ | **3840×2160** |
| Hero · produk layer (sized) | cap `width` layer (HE `min(28vw,56vh)` ≈ 540px) | contain | `50vw` | **1800×2400** |
| Hero · wordmark | `logoWidth`/`maxWidth` (HE ≈ 350–500px) | contain | `40vw` | **900×620** |
| ProductLineup · kartu | **380px** (`max-w-[380px]`, 1:1) | contain | `(min-width:1024px)27vw,(min-width:640px)46vw,80vw` | **1200×1200** |
| BrandAbout · kartu | ≈ 300×400 (3 kolom dlm 980, 3:4); 2 kartu → 2 kolom ≈ 440×587, 1 kartu → tetap ≈ 360 | **cover** | `33vw`/`50vw`/`360px` sesuai jumlah kartu | **900×1200** |
| Showcase · title graphic | **768px** (`max-w-3xl`) atau `heroMaxWidth` | contain | `(min-width:768px)768px,100vw` | **1800×1200** |
| Showcase · varian bg | ≈ 900px | cover | `(min-width:1024px)900px,100vw` | **2160×1015** |
| Showcase · varian produk | ≈ 820px | contain | `(min-width:1024px)820px,92vw` | tinggi ≥ **1200** |

**Sub-brand page** (`components/subbrand/`):

| Section · slot | Render box desktop | `object-fit` | `sizes` di kode | Sumber min |
|---|---|---|---|---|
| SubBrandHero · wordmark | `md:w-[120px]` | contain | `220px` | **480×331** |
| SubBrandHero · produk layer | cap `width` fixed px (180–350) | contain | `50vw` / `60vw` | ≥ **900px** sisi panjang |
| Showcase · title | `max-w-xl` 576px | contain | `(min-width:768px)384px,66vw` ⚠️ | **1800×1200** |
| Showcase · featured | `max-w-2xl` 672px | contain | `(min-width:768px)672px,88vw` | **1440×600** |
| Showcase · kartu grid | ≈ 324px (2 kolom dlm 672) | contain | `(min-width:768px)330px,44vw` | **800×1000** |

> ⚠️ Dua `sizes` diketahui under-serve: hero background di `BrandHero.tsx` (`50vw` untuk banner full-bleed) dan
> sub-brand showcase title di `SubBrandShowcase.tsx` (`384px`). Tetap kirim/pakai aset seukuran kolom "sumber min".

### 3.2 Aset kurang memadai → LAPOR, jangan diakali

Wajib dilaporkan: resolusi di bawah kebutuhan render · rasio tidak cocok dengan slot · file rusak/format salah.
Format tabel laporan:

| File | Dimensi asli | Rasio asli | Dibutuhkan (dim/rasio) | Section | Dampak bila dipaksakan |
|---|---|---|---|---|---|
| `brand/x/hero/1.png` | 900×1200 | 3:4 | ≥1800×2400 · 3:4 | Hero produk | Blur/pecah di retina |

**DILARANG:** upscale melebihi resolusi natural · stretch sampai rasio berubah · mengubah ukuran/struktur section agar aset muat ·
mengganti dengan aset luar/placeholder · diam saja.
**Sementara menunggu jawaban user:** render cara paling aman (rasio asli dipertahankan, `object-fit` sesuai slot) — **tapi tetap laporkan.**

### 3.3 Aset memadai → tidak boleh pecah saat render

- `srcset`/`sizes` benar (`next/image` `fill` + `sizes`); varian terbesar cukup untuk high-DPI.
- **Dimensi intrinsik selalu diset** — `aspectRatio`/`productAspect`/`cardAspect` pada tiap layer & slot (cegah layout shift).
- Rasio asli dijaga dengan `object-fit` (`cover` = crop, subjek di safe-zone tengah ±80%; `contain` = utuh). Jangan ter-stretch.
- **Tidak ada `transform: scale()` yang membesarkan melebihi resolusi natural — termasuk hover & animasi.**
  (`ProductLineup` punya `group-hover:scale-110` + opsi `imageScale`: pastikan aset cukup besar.)
- Wordmark & ikon: **SVG** bila tersedia. Jangan raster kecil lalu dibesarkan.
- **Hero tidak di-lazy-load** (`priority` sudah diset di komponen).
- PNG transparan untuk produk/wordmark, JPG untuk foto cover. Jangan kompres ulang aset yang sudah dioptimasi.
- **Dedup hanya di dalam satu folder `product-lineup/`**, hanya file **byte-identik**. Folder `hero/`/`showcase/`/`about/`
  dan lintas brand↔sub-brand: **tidak pernah** di-dedup.

---

## 4. Responsivitas

| Nama | px | Perilaku yang diharapkan |
|---|---|---|
| `xs` | 400 | Penyesuaian halus layout mobile tersempit |
| `sm` | 640 | Grid mulai muncul (About 1→3 kolom); rail lineup align ke gutter `max-w-content` |
| `md` | **768** | **Batas mobile/desktop** (`useIsMobile`). Hero & showcase beralih ke layout desktop; panah nav desktop muncul |
| `lg` | 1024 | Padding section `px-10`, ukuran penuh |
| `xl` / `2xl` | 1280 / 1536 | — |
| `3xl` | 1920 | Layar sangat lebar |

Semua section konten pakai token **`max-w-content`** (`--content-w: 980px` di `app/globals.css`; area gambar efektif ~900px).
**Hanya banner hero yang full-bleed.** Jangan `max-w-[…]` ad-hoc.

**5 masalah responsif yang paling sering menggigit:**
1. `heroLayers` diposisikan pakai vw/% → meleset di HP. **Selalu isi `mobile:{…}`** tiap layer + `heroContent.mobile.logoWidth`.
2. Produk showcase overflow banner di HP (drift parallax) → pakai `variant.mobile:{ productHeight, productShiftX, productShiftY }`.
3. `object-cover` di About/hero memotong ±15% tepi; di HP potret hero background hanya terlihat ~26% bagian tengah →
   jaga subjek di safe-zone tengah ±80%, sediakan `mobile.src` crop bila perlu.
4. `overflow-x: hidden` pada html/body memecah `position: sticky` di Chrome untuk `/brands/*` → pakai `overflow-x: clip`
   pada section bermasalah (sudah diatur di `globals.css`). Jangan diubah.
5. Rail horizontal (lineup/about/cross-sell) sudah punya panah + drag + snap, dan Framer Motion sudah menghormati
   `prefers-reduced-motion` → jangan ganti polanya atau bikin animasi custom yang mengabaikannya.

---

## 5. Aturan sesi paralel

**Dev server terisolasi — wajib, tiap sesi pakai dist dir & port sendiri:**
```bash
NEXT_DIST_DIR=.next-{brand} PORT=31xx npm run dev     # bash
$env:NEXT_DIST_DIR=".next-{brand}"; $env:PORT="31xx"; npm run dev   # PowerShell
```
`next.config.mjs` membaca `NEXT_DIST_DIR` (default `.next`) **dan** menurunkan `tsconfig.next-{brand}.json` sendiri —
tanpa itu `next dev` menulis ulang `tsconfig.json` bersama dan sesi paralel saling merusak. Keduanya sudah gitignored.

**Sesi per-brand DILARANG menjalankan build dalam bentuk apa pun** — `npm run build`, `npm run build:verify`,
`next build`, dengan atau tanpa `NEXT_DIST_DIR`. Build yang bentrok bikin semua sesi crash. Verifikasi kamu cukup:
**`npm run typecheck` + `npm run lint` + dev server sendiri** — tidak ada yang menulis file bersama, dan baseline
keduanya bersih, jadi error apa pun berarti buatanmu.

**Build hanya lewat `npm run build:verify`** — khusus sesi infrastruktur / integrasi akhir, dan **hanya saat tidak ada
sesi lain berjalan** (`npm run build` dibiarkan untuk CI/deploy). Auto-discovery sudah dibuktikan bertahan di production
build: `require.context` = API build-time webpack dengan path statis. **Jangan perkenalkan** `fs.readdirSync` runtime
atau dynamic import bervariabel — keduanya jebol saat build meski normal di dev.

**Registrasi otomatis — tidak ada file bersama yang perlu diedit.** `BRANDS`/`SUB_BRANDS` di-auto-discover dari
`content/brands/*.ts` & `content/sub-brands/*.ts`; route, navbar/MegaMenu, Footer, CrossSell, DivisionCards,
`generateStaticParams` semuanya turunan. Menambah brand = **1 folder aset `public/brand/{slug}/` + 1 file config
`content/brands/{NNN}-{slug}.ts`. Titik.** Prefiks angka (kelipatan 10) hanya mengatur urutan listing.

**HARAM disentuh:** `lib/brands.ts`, `lib/subBrands.ts`, `tailwind.config.ts`, `app/globals.css`, `components/**`,
`app/brands/**`, dan file config brand lain. **Perlu mengedit file di luar folder/file brand-mu → BERHENTI dan lapor.**
Satu-satunya kemungkinan pengecualian: `next.config.mjs` `images.remotePatterns` bila brand memuat gambar dari host
eksternal baru — normalnya tidak perlu, semua aset lokal di `public/brand/...`.

---

## 6. Checklist selesai

- [ ] Daftar & urutan section sama persis dengan Hair Energy (§2); tidak ada yang hilang/tambah/gabung/pecah/ganti nama.
- [ ] Section auto-skip (`ProductLineup`/`BrandAbout`/`BrandShowcase`) terisi datanya.
- [ ] Tidak ada broken image; semua gambar tajam di DPR 1× **dan** 2× pada breakpoint terbesar.
- [ ] Tidak ada upscale/stretch/scale-di-atas-natural (termasuk hover); dimensi intrinsik & `sizes` diset.
- [ ] Bersih di xs(400) / sm(640) / md(768) / lg(1024) / 3xl(1920): tidak ada horizontal scroll, teks terpotong, gambar gepeng.
- [ ] `npm run typecheck` **dan** `npm run lint` bersih; dev server sendiri jalan tanpa error baru. (Build tidak dijalankan sama sekali.)
- [ ] Semua route brand & sub-brand baru bisa diakses (200); umbrella tetap 404.
- [ ] Tidak ada placeholder, lorem ipsum, TODO, atau `console.log`.
- [ ] Tidak ada file di luar folder aset & file config brand ini yang tersentuh (`git status` bersih dari file lain).
- [ ] Temuan aset bermasalah sudah dilaporkan ke user dalam tabel §3.2.

---

## 7. Anti-pattern

- ❌ Mulai tanpa file referensi yang dilampirkan.
- ❌ Menyimpulkan struktur dari file referensi, bukan dari Hair Energy.
- ❌ Menghapus/menambah/menggabung/memecah/mengganti nama section — atau membiarkan data section kosong agar hilang.
- ❌ Meng-uncomment `ScrollFeatureReveal`/`WhyThisProduct` untuk satu brand.
- ❌ Upscale/stretch aset, atau menyembunyikan masalah aset alih-alih melaporkannya.
- ❌ Mendaftarkan brand manual ke `lib/brands.ts`/`lib/subBrands.ts`, atau mengedit file bersama apa pun.
- ❌ Mengubah file Hair Energy atau brand lain.
- ❌ Menjalankan build apa pun, atau `npm run dev` tanpa `NEXT_DIST_DIR`+`PORT` sendiri.
- ❌ Membuat komponen baru padahal `components/brand/*` & `components/subbrand/*` sudah ada.
- ❌ Hardcode teks/warna/produk di komponen — semuanya dari file `content/`.
- ❌ Menambah warna `bg-brand-*` ke `tailwind.config.ts`, atau styling di luar Tailwind + `max-w-content`.
