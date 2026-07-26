# BRAND_PAGE_GUIDE.md — Panduan tunggal pembuatan Brand Page & Sub-Brand Page

> **Untuk siapa:** sesi Claude Code (atau developer) yang **belum pernah melihat project ini**
> dan diberi tugas membuat satu brand page baru. Baca dokumen ini + folder aset brand +
> file referensi desain, lalu kerjakan. Tidak perlu menebak apa pun; kalau ada yang
> ambigu, itu bug dokumen — laporkan.
>
> **Prinsip inti dokumen ini, hafalkan:**
> 0. **Wajib ada file referensi dulu.** Kalau user TIDAK melampirkan file referensi desain, **BERHENTI** — minta file-nya diupload dulu sebelum mengerjakan apa pun (lihat §A "Prasyarat").
> 1. **Struktur halaman = Hair Energy. Selalu. Tanpa kecuali** (satu pengecualian: hero tanpa wording — lihat §C).
> 2. **Tampilan (warna/tipografi/foto/mood) = file referensi.** Referensi **bukan** acuan struktur.
> 3. **Menambah brand = membuat satu file config baru + satu folder aset. Titik.** Tidak pernah mengedit file milik brand lain.
> 4. **Aset tidak boleh pecah/gepeng.** Kalau aset kurang, **lapor** — jangan diakali.

Project ini: **Next.js 14.2.5 (App Router) + TypeScript strict + Tailwind 3.4 + Framer Motion 11**.
Situs marketing statis, tanpa backend. Baca juga [AGENTS.md](../AGENTS.md) untuk konvensi umum
dan lima dokumen aset di `docs/` (lihat §D) untuk ukuran kirim ke tim desain.

---

## Daftar isi
- [A. Menentukan scope: brand page saja, atau ada sub-brand?](#a-menentukan-scope)
- [B. Hair Energy sebagai acuan struktural](#b-hair-energy-sebagai-acuan-struktural)
- [C. ATURAN EMAS — struktur dari Hair Energy, tampilan dari referensi](#c-aturan-emas)
- [D. Integritas aset — jangan sampai gambar pecah](#d-integritas-aset)
- [E. Prioritas kualitas (kemiripan visual + responsivitas)](#e-prioritas-kualitas)
- [F. Checklist verifikasi sebelum lapor selesai](#f-checklist-verifikasi)
- [G. Registrasi otomatis (auto-discovery) — tidak ada file bersama](#g-registrasi-otomatis)
- [H. Anti-pattern (jangan dilakukan)](#h-anti-pattern)

---

<a id="a-menentukan-scope"></a>
## A. Menentukan scope: brand page saja, atau ada sub-brand?

### Prasyarat — WAJIB ada file referensi dulu (berhenti kalau belum ada)

**File referensi desain adalah syarat mutlak sebelum mulai.** Referensi menentukan tampilan akhir
(warna, tipografi, fotografi, mood) **dan** jumlah scope (§A: 1 file = brand page saja; >1 file =
ada sub-brand).

- Kalau user **tidak melampirkan** file referensi apa pun → **BERHENTI. Jangan mulai membuat/menebak
  apa pun.** Minta user mengupload file referensi desain dulu, lalu tunggu.
- **Jangan** mengarang desain sendiri, memakai folder aset saja tanpa referensi, atau mulai dengan
  asumsi "nanti disusul". Tanpa referensi, kemiripan visual (prioritas #1, §E) tidak bisa dinilai.
- Baru lanjut setelah minimal **satu** file referensi tersedia.

> Kalimat yang bisa dipakai: *"Belum ada file referensi desain yang dilampirkan. Tolong upload dulu
> file referensi untuk brand ini (satu file = brand page saja; lampirkan file tambahan untuk tiap
> sub-brand). Saya lanjut begitu file-nya ada."*

Sebuah brand punya folder aset di `public/brand/{slug}/`. **Empat folder default** sebuah brand:

```
public/brand/{slug}/
├── hero/            # banner hero (wordmark + produk / background)
├── product-lineup/  # foto tiap SKU (1:1, PNG transparan)
├── showcase/        # title graphic + banner varian
└── about/           # 3 kartu "About" (3:4)
```

**Aturan penentuan scope (pakai DUA sinyal, harus cocok):**

| Sinyal | Brand page saja | Ada sub-brand page |
|---|---|---|
| **Folder aset** | Folder `public/brand/{slug}/` **hanya** berisi keempat folder default | Ada folder **di luar** keempat itu → tiap folder tambahan = **satu sub-brand** |
| **Lampiran referensi** | **1 file** referensi desain | **>1 file** → tiap file tambahan = referensi desain **satu sub-brand** terkait |

- Contoh **brand page saja**: `public/brand/vica/` hanya punya `hero, product-lineup, showcase, about` → cukup buat brand page VICA.
- Contoh **ada sub-brand**: `public/brand/hair-energy/` punya folder ekstra `creambath/`, `scentsations/`, `shampoo/`, `vitaglitz/` → selain brand page Hair Energy, buat **satu sub-brand page per folder ekstra**. (`advisor-rx/` juga contoh nyata: punya folder ekstra `grey-hair/` dan `strong-hair/`.)

**Konfirmasi silang wajib.** Kedua sinyal harus sepakat:
- Folder ekstra = N **dan** file referensi tambahan = N → buat N sub-brand page. ✅
- **Kalau bertentangan** (mis. ada 2 folder ekstra tapi cuma 1 file referensi tambahan, atau sebaliknya) →
  **BERHENTI dan tanya user.** Jangan menebak. Jangan diam-diam membuat/menghapus sub-brand.

> **Folder ekstra ≠ otomatis jadi halaman.** Folder aset hanya *menandai* keberadaan sub-brand.
> Halaman baru muncul setelah kamu membuat **file config**-nya (§G). Ada brand/sub-brand yang
> foldernya sudah ada tapi belum di-wire (mis. `advisor-rx`, `hydroprisma`) — itu normal, bukan bug.

**Sub-brand vs umbrella (jangan tertukar):**
- **Umbrella** = brand payung (`makarizo`, `makarizo-professional`). Tidak punya halaman (`/brands/makarizo` → **404 disengaja**). Umbrella ditandai `flagship: "{slug-anak}"` dan anak-anaknya memakai `parent: "{umbrella}"`.
- **Brand biasa** (punya `parent` umbrella, mis. `hair-energy` `parent: "makarizo"`) **tetap** punya halaman brand penuh di `/brands/{slug}` dengan struktur 7-section yang sama. Hair Energy adalah kasus ini.
- **Sub-brand / product-line** (mis. `creambath`) = lini produk **di dalam** sebuah brand, halaman di `/brands/{parent}/{line}` dengan struktur 4-section (§B.2). Ini yang dimaksud "sub brand page" di dokumen ini.

---

<a id="b-hair-energy-sebagai-acuan-struktural"></a>
## B. Hair Energy sebagai acuan struktural

Hair Energy adalah **satu-satunya** brand dengan set konten lengkap. **Jadikan patokan.**

### B.0 Peta file Hair Energy

| File | Peran |
|---|---|
| `content/brands/060-hair-energy.ts` | **Config brand** (semua teks, warna, produk, hero, showcase). *Ini yang kamu tiru untuk brand baru.* |
| `content/sub-brands/0{10..40}-hair-energy--{creambath,scentsations,shampoo,vitaglitz}.ts` | Config tiap sub-brand. |
| `public/brand/hair-energy/**` | Aset brand. |
| `public/brand/hair-energy/{creambath,…}/**` | Aset tiap sub-brand. |
| `lib/brands.ts` | Tipe `Brand`, `DIVISIONS`, helper (`getBrand`, `isUmbrella`, `pageBrands`, `brandHref`, `childrenOf`, `brandsByDivision`). Registry `BRANDS` di-auto-discover. **Jangan tambah brand di sini.** |
| `lib/subBrands.ts` | Tipe `SubBrand`, helper (`getSubBrand`, `subBrandsOf`). Registry `SUB_BRANDS` di-auto-discover. **Jangan tambah sub-brand di sini.** |
| `app/brands/[slug]/page.tsx` | Route brand — memilih `BrandPage` (top-level) atau `SubBrandPage` (punya `parent`). |
| `app/brands/[slug]/[line]/page.tsx` | Route sub-brand (product-line) → `SubBrandTemplate`. |
| `components/brand/*` | Section brand page (dipakai ulang semua brand). |
| `components/subbrand/*` | Section sub-brand page. |

### B.1 Brand page — daftar section, URUTAN, dan komponen (WAJIB persis begini)

Renderer: [`components/brand/BrandPage.tsx`](../components/brand/BrandPage.tsx). Brand yang punya `parent`
(mis. Hair Energy) dirender oleh [`components/brand/SubBrandPage.tsx`](../components/brand/SubBrandPage.tsx)
yang **struktur section-nya identik**. Jadi urutannya sama untuk semua brand:

| # | Section (nama komponen) | Anatomi singkat | Sumber data | Skip bila kosong? |
|---|---|---|---|---|
| 1 | **BrandHero** | Banner full-screen `100svh`. Layer parallax (`heroLayers`) atau `heroImage` flat + overlay HTML (`heroContent`: wordmark + tagline + CTA). Scroll indicator. | `heroLayers`, `heroContent`, `bannerBg`/`accentHex` | Tidak (selalu render) |
| 2 | **ProductLineup** | Rail horizontal kartu SKU (drag/panah). Tiap kartu: stage 1:1 dgn wash accent + `Learn more`/`Buy`. Judul `lineupTitle ?? "Explore the lineup."` | `products[]`, `lineupTitle` | **Ya** — null bila `products` kosong |
| 3 | **BrandIntro** | Blok teks tengah `id="about"`. Eyebrow `About {name}`, kalimat besar dari `description` (dipecah di `". "`). | `description` | Tidak |
| 4 | **BrandAbout** | 3 kartu gambar 3:4 (desktop grid, mobile slider). Label overlay di bawah. | `about[]` (`{title,image}`) | **Ya** — null bila `about` kosong |
| 5 | **BrandShowcase** | Title graphic (`showcase.hero`) + banner varian berlapis (`showcase.variants[]`); tiap varian bisa `href` ke sub-brand. | `showcase` | **Ya** — null bila `showcase` kosong |
| 6 | **CrossSell** | 3 brand lain ("Lanjutkan perjalananmu."). Otomatis dari registry. | otomatis | Tidak |
| 7 | **BrandCTA** | Blok CTA warna `accentHex`: "Rasakan {name} sekarang." + tagline + tombol. | `accentHex`, `tagline` | Tidak |

> **Dinonaktifkan site-wide:** `ScrollFeatureReveal` (pakai `features[]`) dan `WhyThisProduct`
> (pakai `reasons[]`) **dikomentari untuk SEMUA brand** di `BrandPage.tsx`. `features`/`reasons`
> boleh tetap ada di data (tidak dipakai), tapi **jangan** meng-uncomment section-nya untuk satu
> brand saja — itu menambah section (langgar §C).

**Konsekuensi penting (§C & §D):** section 2, 4, 5 **auto-skip saat datanya kosong**. Artinya
"menghilangkan section" = membiarkan datanya kosong. **Itu dilarang** kecuali asetnya memang tidak
ada (lalu lapor). Untuk mempertahankan sebuah section, **isi datanya.**

Contoh nyata (`content/brands/060-hair-energy.ts`) — showcase yang tiap varian nge-link ke sub-brand:

```ts
showcase: {
  hero: "/brand/hair-energy/showcase/title.png",
  heroAspect: "5219 / 3799",
  variants: [
    { bg: "/brand/hair-energy/showcase/1-2.png", product: "/brand/hair-energy/showcase/1-1.png", href: "/brands/hair-energy/shampoo" },
    { bg: "/brand/hair-energy/showcase/2-2.png", product: "/brand/hair-energy/showcase/2-1.png", href: "/brands/hair-energy/creambath" },
    { bg: "/brand/hair-energy/showcase/3-2.png", product: "/brand/hair-energy/showcase/3-1.png", href: "/brands/hair-energy/scentsations" },
    { bg: "/brand/hair-energy/showcase/4-2.png", product: "/brand/hair-energy/showcase/4-1.png", productAspect: "1470 / 2073", productHeight: "75%", href: "/brands/hair-energy/vitaglitz" },
  ],
},
```

### B.2 Sub-brand (product-line) page — section & urutan

Renderer: [`components/subbrand/SubBrandTemplate.tsx`](../components/subbrand/SubBrandTemplate.tsx).

| # | Section | Anatomi | Sumber data |
|---|---|---|---|
| 1 | **SubBrandHero** | Banner `100svh`: wordmark + `name` + `tagline` + CTA, produk berlapis (`heroLayers`). | `SubBrand` |
| 2 | **SubBrandShowcase** | Title graphic (`showcaseTitle`) + grid **2 kolom** kartu utuh (`cards[]`), opsional `featured` full-width. **Tanpa parallax** (tiap kartu gambar utuh, sudah termasuk background+border). | `SubBrand` |
| 3 | **CrossSell** | 3 brand lain — pakai **parent brand**. | otomatis |
| 4 | **BrandCTA** | CTA — pakai **parent brand** ("Rasakan Hair Energy sekarang"). | parent |

Contoh config sub-brand (`content/sub-brands/010-hair-energy--creambath.ts`, dipangkas):

```ts
import type { SubBrand } from "@/lib/subBrands";

const entry: SubBrand = {
  slug: "creambath",
  parent: "hair-energy",
  name: "Fibertherapy Creambath",
  tagline: `Creambath 5X Conditioner.\n5X lebih melembutkan dan menutrisi.`,
  ctaText: "Learn more",
  accentHex: "#F36C21",
  bannerBg: "#F36C21",
  heroWordmark: "/brand/hair-energy/creambath/hero/wordmark.png",
  heroWordmarkAspect: "767 / 529",
  heroLayers: [
    { src: "/brand/hair-energy/creambath/hero/2.png", enterFrom: "right", enterDelay: 0.4, depth: 40, width: "350px", aspectRatio: "2139 / 2345", left: "60%", top: "25%" },
    { src: "/brand/hair-energy/creambath/hero/1.png", enterFrom: "left", enterDelay: 0.2, depth: 60, width: "275px", aspectRatio: "1646 / 2786", left: "48%", top: "10%" },
  ],
  showcaseTitle: "/brand/hair-energy/creambath/showcase/title.png",
  showcaseTitleAspect: "4871 / 3832",
  featured: { image: "/brand/hair-energy/creambath/showcase/1.png", label: "…" },
  featuredAspect: "4868 / 2326",
  cardAspect: "2397 / 3110",
  cards: [
    { image: "/brand/hair-energy/creambath/showcase/2.png", label: "…" },
    { image: "/brand/hair-energy/creambath/showcase/3.png", label: "…" },
    // …
  ],
};

export default entry;
```

Sub-brand page **tidak ada di navbar** — hanya dicapai lewat `href` pada varian showcase brand induk.

### B.3 Konvensi penamaan & data

- **`division`** wajib salah satu dari: `"beverage"` | `"beauty"` | `"mens"` | `"food"` (tipe `DivisionId` di `lib/brands.ts`). Menentukan di divisi mana brand muncul (MegaMenu, DivisionCards).
- **`hero: boolean`** = apakah brand ikut carousel hero **homepage**. Default `false`; set `true` hanya bila memang ingin ditampilkan di beranda. Tidak memengaruhi hero halaman brand-nya sendiri.
- **Slug & nama folder brand** = lowercase-dash (slug). Nama file aset lowercase-dash, tanpa spasi, tanpa prefiks brand. (Lihat `docs/PANDUAN-ASET.md`.)
- Path aset **selalu** `/brand/{slug}/{folder}/...` (root `public/`), diawali `/`.
- Semua gambar via `next/image`. Host eksternal baru → tambah ke `next.config.mjs` (`images.remotePatterns`).
- `accentHex` = warna aksen brand (dipakai CTA, wash produk, eyebrow, dsb — **inline style**).
- ⚠️ `accentClass` (`bg-brand-*`) **legacy & tidak dipakai** komponen mana pun. Isi apa saja
  (mis. `"bg-brand-{slug}"`) agar tipe `Brand` puas; **jangan** menambah warna ke `tailwind.config.ts`.
- Import lintas folder pakai alias `@/...`.

---

<a id="c-aturan-emas"></a>
## C. ATURAN EMAS — struktur dari Hair Energy, tampilan dari referensi

**Ini aturan paling penting di seluruh dokumen.**

File referensi yang dilampirkan user adalah **tujuan akhir secara TAMPILAN saja** — warna,
tipografi, fotografi, mood, gaya visual. File itu **BUKAN acuan struktur.**

**Struktur WAJIB mengikuti brand page Hair Energy, tanpa kecuali:**

- **Daftar section sama persis** dengan §B.1 (brand page) / §B.2 (sub-brand page). Nama section tidak boleh diubah.
- **Urutan section sama persis.**
- **Bentuk/anatomi tiap section sama** — elemen penyusun, hierarki, cara komponen dirakit (pakai komponen yang sama).
- **Tidak boleh mengurangi section**, walau section itu tidak terlihat di file referensi.
- **Tidak boleh menambah section** di luar yang ada di Hair Energy.
- **Tidak boleh menggabung** dua section jadi satu, atau **memecah** satu section jadi dua.

### Kalau referensi tampak "tidak punya" suatu section

Itu **BUKAN** izin menghapusnya. Yang benar:
1. **Tetap bangun** section itu dengan struktur Hair Energy (komponen yang sama).
2. **Isi** dengan aset yang tersedia dari folder brand.
3. **Beri gaya visual** sesuai arah desain referensi (warna/tipografi/foto).
4. Kalau aset untuk section itu **benar-benar tidak ada** di folder → **LAPOR ke user.** Jangan diam-diam menghilangkan.

> Contoh: referensi VICA cuma menampilkan hero + produk, tanpa panel "About". Tetap bangun
> `BrandAbout` dari `public/brand/vica/about/{1,2,3}.png` (aset itu ada). Jangan skip.

### SATU-SATUNYA pengecualian: banner hero tanpa wording

Beberapa brand hero-nya **tidak punya wording sama sekali** — hanya **wordmark + gambar produk**
(contoh: VICA, Wonhae — wordmark-nya sudah memuat tagline sebagai bagian gambar). Untuk kasus ini,
elemen teks/wording di hero **boleh dihilangkan**; hero disusun hanya dari wordmark + produk.
**Selain wording di hero, tidak ada elemen struktural lain yang boleh dikurangi di seluruh halaman.**

**Cara mendeteksi kasus ini:** periksa isi folder `hero/` **dan** file referensi. Kalau **tidak ada
teks tagline/heading terpisah** (hanya wordmark art + produk) → pakai **varian hero tanpa wording**.

**Varian ini sudah didukung komponen — bukan improvisasi.** `BrandHero` hanya merender blok
tagline/subtitle/CTA jika salah satu dari `tagline`/`subtitle`/`ctaText` diisi. Jadi untuk hero
tanpa wording, **isi `heroContent` hanya dengan `logo`** (dan posisinya), **tanpa** `tagline`,
`subtitle`, `ctaText`:

```ts
// Hero DENGAN wording (Hair Energy):
heroContent: {
  logo: "/brand/hair-energy/hero/wordmark.png",
  logoAspect: "1576 / 1086", logoWidth: "18vw", maxWidth: "26vw",
  tagline: "Rambut Lembut & Wangi Setiap Hari.",
  ctaText: "Learn more", ctaHref: "#about",
  left: "21%", offsetY: "8vh", theme: "light", delay: 0.6,
  mobile: { logoWidth: "26vw" },
},

// Hero TANPA wording (VICA) — wordmark saja, tidak ada tagline/subtitle/ctaText:
heroContent: {
  logo: "/brand/vica/hero/wordmark.png",
  logoAspect: "550 / 595", logoWidth: "22vw",
  left: "10%", theme: "dark", delay: 0.5,
  mobile: { logoWidth: "46vw" },
},
```

> `theme` mengatur warna teks **dan** memberitahu navbar cara mengecat dirinya:
> `theme: "dark"` = teks gelap (untuk banner terang, mis. kuning VICA/Wonhae);
> hilangkan/`"light"` = teks putih (untuk banner gelap). Set sesuai `bannerBg`.

### Ringkasan: WAJIB identik vs. MEMANG berbeda tiap brand

| **WAJIB IDENTIK dengan Hair Energy** | **MEMANG BERBEDA tiap brand** |
|---|---|
| Struktur & daftar section | Warna (`accentHex`, `bannerBg`) |
| Nama section | Tipografi & mood (via aset) |
| Urutan section | Teks/copywriting (`tagline`, `description`, nama produk) |
| Bentuk/anatomi section | Aset gambar (hero, produk, about, showcase) |
| Komponen yang dipakai | Jumlah item produk |
| Penamaan file & folder | Arah visual (mengikuti referensi) |
| Routing (`/brands/{slug}`, `/brands/{parent}/{line}`) | Ada/tidaknya wording di hero (§C pengecualian) |

**Dilarang berimprovisasi desain sendiri.** Kalau ragu antara "ikut referensi" dan "ikut Hair
Energy": **struktur → Hair Energy, tampilan → referensi.** Kalau masih ragu → tanya user.

---

<a id="d-integritas-aset"></a>
## D. Integritas aset — jangan sampai gambar pecah

Aset adalah wajah brand. Gambar pecah/blur/gepeng langsung merusak kemiripan dengan referensi.

Sudah ada lima dokumen aset di `docs/` — **jadikan sumber ukuran, jangan diduplikasi di sini:**
- `PANDUAN-ASET.md` — panduan lengkap (cover/contain, safe-zone, folder, penamaan).
- `CHEATSHEET-ASET.md` — ringkasan 1 halaman.
- `RASIO-ASET-BRAND-PAGE.md` — rasio per slot (mana yang terkunci, mana yang bebas-tapi-wajib-dilapor).
- `UKURAN-ASET-BRAND-PAGE.md` — ukuran optimal + audit aset saat ini.
- `UKURAN-KIRIM-TIM-DESIGN.md` — **"kirim ukuran persis ini"** (rumus `MAKS(desktop×2, HP×3) + margin`).

### D.1 Audit dulu sebelum dipakai

Untuk **setiap** aset: catat **dimensi natural (px)** dan **rasio**-nya (baca header PNG/metadata,
jangan menebak). Bandingkan dengan **ukuran render terbesar** slot itu — yaitu **lebar slot pada
breakpoint terbesar × 2** (retina). Aset yang memenuhi = aman; yang tidak = masuk **daftar temuan**.

#### Ukuran render maksimal tiap slot (patokan resolusi minimum)

Angka "render box" = **lebar CSS maksimum slot di desktop** (breakpoint terbesar). **Sumber
minimum ≈ render box × 2**; untuk slot yang di HP jadi lebih besar relatif (produk lineup, dll)
pakai **×3** lebar HP — itulah kolom "sumber min" (selaras `UKURAN-KIRIM-TIM-DESIGN.md`).

**Brand page** (komponen di `components/brand/`):

| Section · slot | Render box desktop | `object-fit` | `sizes` di kode | Sumber min (kirim) |
|---|---|---|---|---|
| Hero · background layer (full-bleed) | = lebar viewport | cover | `(min-width:768px) 50vw, 100vw` ⚠️ | **3840×2160** |
| Hero · produk layer (sized) | cap `width` layer (HE `min(28vw,56vh)` ≈ 540px) | contain | `50vw` | **1800×2400** (HE 2687×3660 ✓) |
| Hero · wordmark | `logoWidth`/`maxWidth` (HE ≈ 350–500px) | contain | `40vw` | HE **900×620** (aset 1576×1086 ✓) |
| ProductLineup · kartu | **380px** (`max-w-[380px]`, 1:1) | contain | `(min-width:1024px)27vw,(min-width:640px)46vw,80vw` | **1200×1200** |
| BrandAbout · kartu | ≈ 300×400 (3-kolom dlm 980, 3:4) | **cover** | `(min-width:640px)33vw,64vw` | **900×1200** |
| Showcase · title graphic | **768px** (`max-w-3xl`) atau `heroMaxWidth` | contain | `(min-width:768px)768px,100vw` | **1800×1200** |
| Showcase · varian bg | ≈ 900px | cover | `(min-width:1024px)900px,100vw` | **2160×~1015** |
| Showcase · varian produk | ≈ 820px | contain | `(min-width:1024px)820px,92vw` | tinggi ≥ **1200** (HE 2687×3660 ✓) |

**Sub-brand page** (komponen di `components/subbrand/`):

| Section · slot | Render box desktop | `object-fit` | `sizes` di kode | Sumber min (kirim) |
|---|---|---|---|---|
| SubBrandHero · wordmark | `md:w-[120px]` (120px) | contain | `220px` | **480×331** |
| SubBrandHero · produk layer | cap `width` fixed px (180–350) | contain | `50vw` / `60vw` | ≥ **900px** sisi panjang |
| Showcase · title | `max-w-xl` 576px | contain | `(min-width:768px)384px,66vw` ⚠️ | **1800×1200** |
| Showcase · featured | `max-w-2xl` 672px | contain | `(min-width:768px)672px,88vw` | **1440×600** |
| Showcase · kartu grid | ≈ 324px (2-kolom dlm 672) | contain | `(min-width:768px)330px,44vw` | **800×1000** |

> ⚠️ **Dua `sizes` diketahui under-serve** (dicatat di `UKURAN-*` docs): hero background
> `BrandHero.tsx` (`50vw` untuk banner full-bleed) dan sub-brand showcase title
> `SubBrandShowcase.tsx` (`384px`). Kalau kamu menyentuh section itu, perbaiki `sizes`-nya;
> kalau tidak, tetap kirim aset seukuran kolom "sumber min" agar aman saat `sizes` dibetulkan.

### D.2 Kalau aset kurang memadai — LAPOR, jangan diakali

Wajib dilaporkan ke user (format tabel di bawah):
- **Resolusi di bawah kebutuhan render** → pecah saat ditampilkan.
- **Rasio tidak cocok** dengan slot → terpotong berlebihan / menyisakan ruang kosong.
- **Aset rusak/korup/format salah** untuk peruntukannya (mis. JPEG untuk slot yang butuh transparansi).

**Format laporan temuan:**

| File | Dimensi asli | Rasio asli | Dibutuhkan (dim/rasio) | Section | Dampak bila dipaksakan |
|---|---|---|---|---|---|
| `brand/x/hero/1.png` | 900×1200 | 3:4 | ≥1800×2400 · 3:4 | Hero produk | Blur/pecah di retina |
| `brand/x/showcase/2-2.png` | 1600×900 | 16:9 | ~2:1 | Showcase bg | Terpotong / gepeng |

**JANGAN, untuk menutupi kekurangan aset:**
- Meng-upscale melebihi resolusi natural. (Next **tidak pernah** memperbesar; upscale manual = blur permanen.)
- Men-stretch/memampatkan hingga rasio berubah (objek jadi gepeng).
- Mengubah struktur/ukuran section agar aset "muat".
- Mengganti dengan aset lain, placeholder, atau gambar dari luar folder brand.
- Diam dan berharap tidak kelihatan.

**Sambil menunggu keputusan user:** tetap render **cara paling aman** — pertahankan rasio asli,
pakai `object-fit` sesuai slot dengan titik fokus wajar — **lalu tetap laporkan.** Pekerjaan boleh
lanjut; temuannya tidak boleh hilang.

### D.3 Kalau aset sudah memadai — jaminan: tidak boleh pecah saat dirender

- **Jangan pernah** merender gambar melebihi dimensi naturalnya di breakpoint mana pun.
- Sediakan `sizes` yang benar (via `next/image` `fill` + `sizes`) supaya browser memilih varian tepat; varian terbesar cukup untuk high-DPI.
- **Selalu set dimensi intrinsik** — `aspectRatio` pada layer/slot (dan `width`/`height` bila relevan) — agar tidak ada layout shift & browser tidak salah menskalakan. (Pola project: tiap `heroLayers`/`ShowcaseVariant`/`Slot` menerima `aspectRatio`/`productAspect`/`cardAspect`.)
- Pertahankan rasio asli; `object-fit: cover` (crop, subjek di safe-zone ±80%) atau `contain` (utuh, butuh background polos/transparan) sesuai slot — **jangan biarkan ter-stretch.**
- Hindari `transform: scale()`/pembesaran yang membuat gambar dirender di atas resolusi natural — **termasuk pada hover & animasi**. (Catatan: `ProductLineup` punya hover `group-hover:scale-110` dan opsi `imageScale`; pastikan asetnya cukup besar sehingga saat di-scale pun ≤ resolusi natural.)
- Format & kompresi sesuai konvensi project (PNG transparan untuk produk/wordmark; JPG untuk foto cover). **Jangan mengompres ulang** aset yang sudah dioptimasi.
- **Wordmark/logo/ikon:** pakai SVG bila tersedia; jangan raster kecil lalu dibesarkan.
- **Hero image jangan di-lazy-load** (komponen sudah `priority` untuk layer/hero pertama); pastikan varian resolusi cukup untuk layar lebar high-DPI.

### D.4 Verifikasi visual

Sebelum lapor selesai, cek **setiap** gambar di **breakpoint terbesar pada DPR 1× dan 2×**.
Pastikan tidak ada yang **pecah, blur, gepeng, atau terpotong** pada bagian penting (wajah produk,
wordmark, teks dalam gambar). Masuk ke checklist §F.

### D.5 Aset identik → dedup HANYA di folder `product-lineup/`

Dedup **hanya** berlaku di dalam satu folder **`product-lineup/`** — baik milik brand
(`{brand}/product-lineup/`) maupun sub-brand (`{brand}/{sub}/product-lineup/`). Kalau ada dua file
**byte-identik** (isi benar-benar sama) di dalam **satu** folder `product-lineup/`, simpan **satu**,
hapus sisanya, dan arahkan semua referensi ke file yang disimpan.

**Yang TIDAK di-dedup (biarkan apa adanya):**
- Aset identik **antar folder berbeda** — mis. `product-lineup/` dengan `hero/`, `showcase/`, atau `about/`. **Biarkan**, jangan digabung, walau byte-identik.
- Aset identik di `hero/`, `showcase/`, atau `about/` — **tidak** di-dedup sama sekali.
- Lintas batas **brand ↔ sub-brand**, atau antar **dua sub-brand berbeda** — tidak pernah digabung.

Singkatnya: **satu-satunya tempat dedup adalah di dalam sebuah folder `product-lineup/`.** Di luar itu, jangan hapus apa pun.

> Hanya dedup yang **byte-identik** (hash sama). Jangan hapus file yang cuma *mirip* nama/tampilan
> tapi berbeda isi — itu bisa SKU/varian berbeda.

---

<a id="e-prioritas-kualitas"></a>
## E. Prioritas kualitas (dua hal, tertinggi)

### 1. Kemiripan visual dengan file referensi
Dalam batas struktur Hair Energy (§C). **Tidak boleh berimprovisasi desain sendiri.** Warna,
tipografi, foto, mood harus semirip mungkin dengan referensi; strukturnya tetap Hair Energy.

### 2. Responsivitas
Breakpoint project (dari `tailwind.config.ts`; `md: 768px` adalah batas mobile↔desktop yang dipakai
`useIsMobile` di hero/showcase):

| Nama | px | Perilaku yang diharapkan |
|---|---|---|
| `xs` | 400 | Penyesuaian halus layout mobile tersempit |
| `sm` | 640 | Grid mulai muncul (About 1→3 kolom); rail lineup align ke gutter `max-w-content` |
| `md` | **768** | **Batas mobile/desktop.** Hero & showcase beralih ke tata letak desktop (`useIsMobile`); panah nav desktop muncul |
| `lg` | 1024 | Padding section `px-10`, ukuran penuh |
| `xl` | 1280 | — |
| `2xl` | 1536 | — |
| `3xl` | 1920 | Layar sangat lebar |

Token layout: semua section konten pakai **`max-w-content`** (`--content-w: 980px` di
`app/globals.css`; area gambar efektif ~900px). **Hanya banner hero yang full-bleed.** Jangan pakai
`max-w-[…]` ad-hoc pada section.

**Masalah responsif umum pada pola Hair Energy & cara menghindari:**
- **Hero pakai `heroLayers` posisi vw/%** → di HP bisa meleset. **Selalu isi `mobile:{…}`** pada tiap layer & `heroContent.mobile.logoWidth` (lihat Hair Energy). Uji di 400/768px.
- **Showcase produk overflow banner** → di HP drift parallax bikin produk "melayang"/terpotong. Gunakan override `variant.mobile:{ productHeight, productShiftX, productShiftY }` (lihat VICA); parallax sudah dikecilkan otomatis di mobile.
- **`object-cover` di About/hero** memotong ±15% tepi → jaga subjek di **safe-zone tengah ±80%**. Di HP potret, hero background hanya terlihat ~26% bagian tengah horizontal — sediakan aset/`mobile.src` crop bila perlu.
- **Jangan `overflow-x: hidden` pada html/body** (memecah `position: sticky` di Chrome untuk story `/brands/*`); pakai `overflow-x: clip` pada section bermasalah. (Sudah diatur di `globals.css`.)
- **Rail horizontal** (lineup/about/cross-sell) sudah punya panah + drag + snap; jangan ganti polanya.
- **Hormati `prefers-reduced-motion`** — Framer Motion sudah menangani; jangan bikin animasi custom yang mengabaikannya.

---

<a id="f-checklist-verifikasi"></a>
## F. Checklist verifikasi (centang sebelum lapor selesai)

**Struktural (§B, §C):**
- [ ] Daftar & urutan section hasil akhir **sama persis** dengan Hair Energy (§B.1 brand / §B.2 sub-brand).
- [ ] Tidak ada section yang **hilang, bertambah, tergabung, terpecah, atau berubah nama.**
- [ ] Section auto-skip (ProductLineup/About/Showcase) **terisi datanya** (tidak null) — kecuali aset benar-benar tidak ada & sudah dilaporkan.
- [ ] Hero: kalau tanpa wording, memang karena folder `hero/` + referensi tidak punya wording (§C pengecualian), pakai `heroContent` logo-only.
- [ ] `ScrollFeatureReveal`/`WhyThisProduct` tetap nonaktif (tidak di-uncomment).

**Integritas aset (§D) — DPR 1× & 2×:**
- [ ] Tiap aset diaudit: dimensi natural ≥ (render box × 2). Yang kurang → masuk tabel temuan & dilaporkan.
- [ ] Cek visual di breakpoint terbesar, DPR 1× **dan** 2×: tidak ada yang pecah/blur/gepeng/terpotong di bagian penting.
- [ ] Tidak ada upscale/stretch/scale-di-atas-natural (termasuk hover).
- [ ] Wordmark pakai SVG bila ada; hero tidak lazy-load.
- [ ] Tidak ada aset **byte-identik di dalam satu folder `product-lineup/`** (§D.5) — sisakan satu. Folder lain (hero/showcase/about) tidak di-dedup.

**Responsivitas (§E):**
- [ ] Diuji di **xs(400) / sm(640) / md(768) / lg(1024) / 3xl(1920)**.
- [ ] Hero & showcase punya override `mobile` yang benar; tidak ada elemen meleset/terpotong di HP.
- [ ] Tidak ada horizontal scroll tak disengaja; section pakai `max-w-content`.

**Build & route:**
- [ ] `npm run build` sukses **tanpa error & warning baru** (ini type-check + lint project; lihat AGENTS §12).
- [ ] Semua route brand & sub-brand baru **bisa diakses** (200). Umbrella (jika ada) → 404.
- [ ] **Tidak ada broken image** (semua path `/brand/{slug}/...` valid; host eksternal baru terdaftar di `next.config.mjs`).
- [ ] `npm run dev` visual OK; nyatakan eksplisit bila ada yang tidak bisa diverifikasi visual.

---

<a id="g-registrasi-otomatis"></a>
## G. Registrasi otomatis (auto-discovery) — tidak ada file bersama

> **Arsitektur ini sudah di-refactor.** Menambah brand/sub-brand **tidak pernah** menyentuh file
> yang dipakai brand lain. Aman untuk banyak sesi paralel; tidak perlu penggabungan manual.

### G.1 Aturan setelah refactor

- **Membuat brand baru = membuat SATU file config baru** di `content/brands/` **+ folder asetnya** di `public/brand/{slug}/`. Titik.
- **Membuat sub-brand baru = membuat SATU file config baru** di `content/sub-brands/` **+ folder asetnya** di `public/brand/{parent}/{slug}/`. Titik.
- **Tidak ada langkah "daftarkan ke registry".** Jangan pernah mengedit file bersama untuk menambah brand.

**Contoh — brand baru `foo`:**
```
1. Buat  public/brand/foo/{hero,product-lineup,showcase,about}/  + isi aset.
2. Buat  content/brands/250-foo.ts   (tiru content/brands/060-hair-energy.ts):

   import type { Brand } from "@/lib/brands";
   const entry: Brand = { slug: "foo", name: "Foo", division: "beauty",
     tagline: "...", description: "...", accentClass: "bg-brand-foo",
     accentHex: "#RRGGBB", heroImage: "/brand/foo/...", hero: false,
     heroLayers: [...], heroContent: {...}, bannerBg: "#RRGGBB",
     products: [...], about: [...], showcase: {...} };
   export default entry;

3. Selesai — route /brands/foo muncul otomatis. Tidak ada file lain disentuh.
```

### G.2 Cara kerja (mekanisme)

Registry diturunkan otomatis lewat **webpack `require.context`** (build-time), bukan daftar manual:

```ts
// lib/brands.ts
const brandCtx = (require as unknown as WebpackRequire).context("../content/brands", false, /\.ts$/);
export const BRANDS: Brand[] = brandCtx.keys().sort()
  .map((k) => (brandCtx(k) as { default: Brand }).default);

// lib/subBrands.ts — pola sama untuk ../content/sub-brands
```

- **Sumber kebenaran = keberadaan file** di `content/brands/*.ts` dan `content/sub-brands/*.ts`. Tambah file → muncul; hapus file → hilang. Semua turunan (route `generateStaticParams`, navbar/MegaMenu, Footer, CrossSell, DivisionCards) ikut otomatis karena semua membaca `BRANDS`/`SUB_BRANDS` via helper.
- **Urutan** = prefiks angka nama file (`010-`, `020-`, …, kelipatan 10 agar mudah menyisip). File baru tanpa prefiks angka otomatis tersortir **setelah** yang berprefiks. Urutan hanya memengaruhi tampilan listing (MegaMenu/CrossSell), bukan kebenaran route.
- Tipe `require.context` dideklarasikan di `types/webpack-env.d.ts` (`WebpackRequire`).
- File config hanya `import type` (dihapus saat compile) → tidak ada import cycle runtime.

### G.3 Hasil audit file bersama

File yang **dulu** harus diedit saat menambah brand, dan statusnya sekarang:

| File bersama (dulu) | Dulu | Sekarang |
|---|---|---|
| `lib/brands.ts` — array `BRANDS` | Edit manual tiap brand | **Auto-discovery** dari `content/brands/`. Tidak disentuh. |
| `lib/subBrands.ts` — array `SUB_BRANDS` | Edit manual tiap sub-brand | **Auto-discovery** dari `content/sub-brands/`. Tidak disentuh. |
| `app/brands/[slug]/page.tsx` + `[line]/page.tsx` | (sudah dinamis) | `generateStaticParams` dari registry — otomatis. |
| Navbar/MegaMenu, Footer, CrossSell, DivisionCards, SensoryStrip | Turunan | Semua baca `BRANDS`/`DIVISIONS` via helper — otomatis. |
| `tailwind.config.ts` (`bg-brand-*`) | Dikira perlu | **Tidak perlu.** `accentClass` legacy & tak dipakai; warna dari `accentHex` inline. |
| `next.config.mjs` (`remotePatterns`) | — | **Hanya** bila brand memuat gambar dari **host eksternal baru**. Aset lokal `/brand/...` tidak perlu. |

Tidak ada barrel/index, konstanta navigasi, atau sitemap yang perlu diedit per brand.

### G.4 File yang tetap HARAM disentuh saat menambah brand
`lib/brands.ts`, `lib/subBrands.ts`, `tailwind.config.ts`, `app/globals.css`, semua `components/**`,
`app/brands/**`, dan **file config brand lain** di `content/`. Kamu hanya membuat **file baru** milik
brand-mu sendiri.

### G.5 Fallback penulisan aman (poin 5 spec) — TIDAK dipakai
Semua file bersama berhasil dijadikan auto-discovery, jadi **tidak ada** mekanisme append-only /
lock-file (`O_EXCL`) yang dibuat. Kalau di masa depan muncul file bersama yang tak bisa
auto-discovery, barulah pakai pola: append-only + lock atomik dgn retry + hanya menulis baris milik
brand tsb. Saat ini N/A.

### G.6 Catatan untuk `next.config.mjs`
Ini satu-satunya file bersama yang **mungkin** perlu disentuh — dan **hanya** kalau brand memuat
gambar dari host eksternal yang belum terdaftar. Konvensi project: **semua aset brand lokal** di
`public/brand/...`, jadi normalnya `next.config.mjs` **tidak** perlu diedit. Kalau butuh host baru,
itu satu baris di `images.remotePatterns` — bila dua sesi paralel kebetulan sama-sama menambah host,
itu satu-satunya titik yang bisa bentrok (jarang, mudah di-resolve).

---

<a id="h-anti-pattern"></a>
## H. Anti-pattern (jangan dilakukan)

- ❌ Menghapus, menambah, menggabung, memecah, atau mengganti nama section.
- ❌ Mulai mengerjakan brand page **tanpa file referensi** yang dilampirkan — harus berhenti & minta dulu (§A Prasyarat).
- ❌ Menyimpulkan struktur dari file referensi alih-alih dari Hair Energy.
- ❌ Meng-upscale atau men-stretch aset untuk menutupi resolusi/rasio yang kurang.
- ❌ Menyembunyikan masalah aset alih-alih melaporkannya (tabel temuan §D.2).
- ❌ Membuat komponen baru padahal sudah ada yang bisa dipakai (pakai `components/brand/*` & `components/subbrand/*`).
- ❌ Hardcode nilai yang seharusnya dari config (semua teks/warna/produk dari file `content/`).
- ❌ Placeholder, lorem ipsum, TODO, atau `console.log` tertinggal.
- ❌ Mengubah file Hair Energy atau brand lain (`content/brands/060-hair-energy.ts`, dll).
- ❌ Memakai pola styling di luar konvensi (Tailwind saja; token `max-w-content`; tidak ada CSS-in-JS).
- ❌ Mendaftarkan brand secara manual ke file bersama (`lib/brands.ts`/`lib/subBrands.ts`) — pakai file `content/` (§G).
- ❌ Meng-uncomment `ScrollFeatureReveal`/`WhyThisProduct` untuk satu brand.
- ❌ Menambah warna `bg-brand-*` ke `tailwind.config.ts` (tidak dipakai; cukup `accentHex`).

---

### Lampiran — perintah verifikasi
```bash
npm run build     # type-check + lint + prerender semua route (WAJIB sukses, tanpa warning baru)
npm run dev       # http://localhost:3000 — cek visual DPR 1× & 2× di semua breakpoint
```
Route brand: `/brands/{slug}` · sub-brand: `/brands/{parent}/{line}` · umbrella → 404.
