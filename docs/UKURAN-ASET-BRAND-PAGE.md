# 📐 Ukuran Aset Optimal — Brand Page & Sub-Brand Page

> Dihitung dari ukuran render **sebenarnya** di komponen (bukan tebakan).
> Pelengkap [CHEATSHEET-ASET.md](./CHEATSHEET-ASET.md) — angka di sini **menggantikan** angka lama untuk halaman brand.

---

## 🧮 Dasar perhitungan

| Parameter | Nilai | Sumber |
|---|---|---|
| Lebar kolom konten | **900 px** | `--content-w: 980px` − `lg:px-10` (2×40) |
| Layar acuan tertinggi | **1920 px** CSS | breakpoint `3xl` |
| Density acuan | **DPR 2** (desktop) / **DPR 3** (HP) | Retina |
| Kandidat lebar Next.js | 640 · 750 · 828 · 1080 · 1200 · 1920 · 2048 · 3840 | `deviceSizes` default |

**Aturan emas:** `sumber = lebar render CSS maksimum × 2`.
Lebih besar dari itu = 100% terbuang (Next tetap menurunkan skalanya).
Lebih kecil = **buram permanen** — optimizer Next **tidak pernah** memperbesar gambar.

---

# BAGIAN 1 — HALAMAN BRAND (`/brands/{slug}`)

## § 1. Hero — `public/brand/{slug}/hero/`

Hero setinggi `100svh`, jadi ukurannya ikut **viewport**, bukan kolom konten.

| Aset | Peran | Render CSS maks | **Target sumber** | Format | Budget |
|---|---|:---:|:---:|:---:|:---:|
| `background.jpg` | Latar full-bleed (`cover`) | 100vw × 100svh | **2560 × 1440** (16:9) | JPG/WebP q75 | ≤ 350 KB |
| `1.png` — *kanvas penuh* (`contain`) | Kanvas landscape, produk sudah di-bake | Fit ke 100vw | **2560 px sisi panjang** | PNG-24 / WebP | ≤ 600 KB |
| `1.png` — *layer terukur* (`width: "min(28vw,56vh)"`) | 1 produk per layer | 717 px | **1200 px lebar** | PNG-24 | ≤ 350 KB |
| `{n}-mobile.png` | Crop produk khusus HP | ±310 px (DPR3 → 930) | **1000 px sisi panjang** | PNG-24 | ≤ 300 KB |
| `wordmark.png` | Logo overlay HTML | `logoWidth` × 1920 | **lebar = `logoWidth`(vw) × 40** | PNG-24 | ≤ 120 KB |

### Rumus wordmark (responsif — pakai ini kalau `logoWidth` berubah)

```
lebar sumber (px) = logoWidth(vw) × 40
```

| Brand | `logoWidth` | Target |
|---|:---:|:---:|
| Hair Energy | `18vw` | **800 × 551** |
| Nestlé Pure Life | `34vw` | **1400 × 291** |
| VICA | `22vw` | **900 × 974** |

> ⚠️ Cek juga `mobile.logoWidth`: NPL `72vw` × 430px HP × DPR3 = 929 px — masih di bawah 1400, jadi desktop yang menentukan. Berlaku untuk semua brand.

### Rumus layer produk terukur (responsif)

```
lebar sumber (px) = width(vw) × 40      → dibatasi 1200 px
```
Hair Energy `min(28vw, 56vh)` → 28 × 40 = 1120 → **1200 px** (dibulatkan naik).

---

## § 2. Product Lineup — `public/brand/{slug}/product-lineup/`

Kartu: `w-[80vw] sm:w-[46vw] md:w-[34vw] lg:w-[27vw] max-w-[380px]`, panggung `aspect-square`, hover `scale(1.10)`.

| Render CSS maks | **Target sumber** | Format | Budget |
|:---:|:---:|:---:|:---:|
| 380 × 380 (efektif 418 saat hover) | **800 × 800** | PNG-24 transparan · JPG q80 kalau latar putih polos | ≤ 120 KB (PNG) / ≤ 60 KB (JPG) |

**Aturan kanvas — wajib seragam antar SKU:**
- Kanvas **persegi 800×800** untuk *semua* varian, tanpa kecuali.
- Botol tertinggi ≈ **88%** tinggi kanvas; margin transparan atas/bawah sama rata.
- Semua SKU dalam satu brand pakai skala botol yang konsisten (600 mL memang harus terlihat lebih besar dari 220 mL — tapi dalam kanvas yang sama).

> ✅ Kalau aturan ini dipatuhi, properti `imageScale` di `lib/brands.ts` bisa **dihapus seluruhnya**. `imageScale` saat ini hanya menambal kanvas yang tidak seragam.

---

## § 3. About (3 kartu) — `public/brand/{slug}/about/`

Grid 3 kolom di `sm+`, slider swipe di HP. `object-cover`, hover `scale(1.05)`.

| Viewport | Render CSS | DPR | Kebutuhan |
|---|:---:|:---:|:---:|
| Desktop (≥640) | 286 × 381 | 2 | 572 px |
| HP (430) | 275 × 367 | 3 | **826 px** ← penentu |

| **Target sumber** | Format | Budget |
|:---:|:---:|:---:|
| **900 × 1200** (rasio **3:4** persis) | JPG/WebP q75 | ≤ 150 KB |

> ⚠️ Ketiga file **wajib rasio identik**. `object-cover` akan memotong file yang rasionya beda dan tinggi kartu jadi terlihat tidak konsisten.

---

## § 4. Showcase — `public/brand/{slug}/showcase/`

### 4a. `title.png` — poster utama

Dibatasi `max-w-3xl` (768 px), plus `heroMaxWidth` per brand. `object-contain`.

| Render CSS maks | **Target sumber** | Format | Budget |
|:---:|:---:|:---:|:---:|
| 768 px lebar | **1536 px lebar** × (1536 ÷ rasio) | PNG-24 kalau transparan · WebP kalau tidak | ≤ 400 KB |

### 4b. `{n}-2.png` — latar banner varian

Banner = `aspectRatio 5/2` selebar 900 px → **900 × 360**. Layer latar dirender **full-width** dengan rasio aslinya (lebih tinggi dari frame) supaya parallax hanya bergerak di area overflow.

| Render CSS maks | **Target sumber** | Format | Budget |
|:---:|:---:|:---:|:---:|
| 900 px lebar | **1800 px lebar** × (1800 ÷ `bgAspect`) | PNG-8/WebP (art datar) · JPG kalau fotografis | ≤ 250 KB |

### 4c. `{n}-1.png` — produk di atas banner

Tinggi = `productHeight` × 360 px. Nilai tertinggi yang terpakai saat ini adalah NPL `125%` → **450 px**.

| Render CSS maks | **Target sumber** | Format | Budget |
|:---:|:---:|:---:|:---:|
| Tinggi 450 px | **Tinggi 1000 px** (lebar ikut rasio) | PNG-24 | ≤ 250 KB |

> Patok pada **tinggi**, bukan lebar — komponen menyusun produk berdasarkan `height`, lebarnya turunan dari `productAspect`.

---

## § 5. CrossSell (brand lain di bawah) — memakai `brand.heroImage`

| Render CSS maks | **Target sumber** | Format | Budget |
|:---:|:---:|:---:|:---:|
| 286 × 420 (desktop) · 275 (HP, DPR3 → 826) | **900 × 1200** (3:4) | JPG/WebP q75 | ≤ 150 KB |

> Saat ini beberapa brand masih memakai URL Unsplash sebagai `heroImage`. Kalau nanti diganti aset lokal, pakai ukuran di atas — **bukan** ukuran hero 2560×1440.

---

# BAGIAN 2 — HALAMAN SUB-BRAND (`/brands/{slug}/{line}`)

Contoh: `/brands/hair-energy/creambath`. Aset di `public/brand/{slug}/{line}/`.

Section ini pakai **lebar tetap dalam px** (bukan vw), jadi targetnya jauh lebih kecil dari halaman brand.

## § 6. Hero sub-brand — `{line}/hero/`

| Aset | Render CSS maks | **Target sumber** | Format | Budget |
|---|:---:|:---:|:---:|:---:|
| `wordmark.png` | 220 px (tetap) | **480 × 331** | PNG-24 | ≤ 60 KB |
| `1.png` / `2.png` (produk) | 350 px desktop · 177 px HP (DPR3 → 530) | **720 px lebar** | PNG-24 | ≤ 250 KB |

## § 7. Showcase sub-brand — `{line}/showcase/`

| Aset | `sizes` di kode | Render CSS maks | **Target sumber** | Budget |
|---|:---:|:---:|:---:|:---:|
| Title (`1.png` / `title.png`) | `384px` | 384 px | **800 px lebar** | ≤ 250 KB |
| Featured (banner lebar) | `672px` | 672 px | **1400 px lebar** | ≤ 300 KB |
| Kartu grid (2 kolom) | `330px` | 330 px | **720 px lebar** | ≤ 150 KB |

> Kartu grid & featured sudah membawa background + border sendiri → boleh WebP/JPG kalau tidak ada area transparan.

---

# BAGIAN 3 — AUDIT ASET SAAT INI

Total sekarang: **123,6 MB**. Target setelah perbaikan: **±12 MB**.

Legenda: 🔴 kritis · 🟠 boros · 🟢 sudah pas

## Hair Energy (`/brand/hair-energy/`)

| File | Sekarang | Target | Status |
|---|---|---|:---:|
| `hero/1,2,3.png` | 2687×3660 · 1,1–1,9 MB | **1200×1635** | 🟠 4,9× kelebihan piksel |
| `hero/wordmark.png` | 1576×1086 · 77 KB | **800×551** | 🟠 ringan |
| `about/1,2,3.png` | 1598×2131 PNG · 0,4–1,0 MB | **900×1200 JPG** | 🟠 PNG untuk foto |
| `product-lineup/*.png` (22 file) | 1080×1080 · 237–534 KB | **800×800** | 🟠 −60% berat |
| `showcase/title.png` | 5219×3799 · **2,8 MB** | **1536×1118** | 🔴 3,4× |
| `showcase/{n}-2.png` | 5010×2354 · 130–178 KB | **1800×846** | 🟠 dimensi boros, file ringan |
| `showcase/1-1,2-1,3-1.png` | 2687×3660 · 1,2–2,0 MB | **734×1000** | 🔴 3,7× |
| `showcase/4-1.png` | 1470×2073 · **2,5 MB** | **709×1000** | 🔴 file terberat per-piksel |

## Nestlé Pure Life (`/brand/nestle-pure-life/`)

| File | Sekarang | Target | Status |
|---|---|---|:---:|
| `hero/background.jpg` | 4267×2464 · 371 KB | **2560×1440** | 🟠 |
| `hero/1.png` | 2560×1478 · 272 KB | **2560×1478** | 🟢 |
| `hero/1-mobile.png` | 1084×1304 · 285 KB | **1000×1203** | 🟢 |
| `hero/wordmark.png` | 1430×297 · 38 KB | **1400×291** | 🟢 pas |
| `hero/wordmark-full.png` | 4267×2464 · 83 KB | — | 🔴 **tidak dipakai** di `brands.ts` → hapus |
| `about/1,2,3.png` | 1385×1866 PNG · **3,1–3,4 MB** | **900×1213 JPG** | 🔴 offender terbesar per file |
| `about/3.png` rasio | 1385×**1860** (beda dari 1,2) | samakan **900×1213** | 🔴 rasio tidak konsisten |
| `product-lineup/*.jpg` | 800×800 · 42–147 KB | **800×800** | 🟢 **jadikan acuan** |
| `showcase/title.png` | 1250×763 · 519 KB | **1536×938** | 🔴 **kurang besar** |
| `showcase/{n}-2.png` | 1102×488 · 421–429 KB | **1800×797** | 🔴 **kurang besar** |
| `showcase/{n}-1.png` | 434×484 · 69–204 KB | **897×1000** | 🔴 **kurang besar** — varian 1 dirender 450 px tinggi, jadi buram bahkan di layar non-Retina |

## VICA (`/brand/vica/`)

| File | Sekarang | Target | Status |
|---|---|---|:---:|
| `hero/1.png` | 4267×2464 · 1,1 MB | **2560×1478** | 🟠 |
| `hero/1-mobile.png` | 1442×1938 · 1,9 MB | **800×1075** | 🔴 |
| `hero/wordmark.png` | 550×595 · 35 KB | **900×974** | 🔴 **kurang besar** (`logoWidth: 22vw`) |
| `about/1,2,3.png` | **344×459** · 0,2–0,3 MB | **900×1200 JPG** | 🔴 **2,6× kurang besar** — paling terlihat buram di HP |
| `product-lineup/vica_220ml.png` | 1754×4550 · **13,5 MB** | **800×800** | 🔴🔴 |
| `product-lineup/vica_330ml.png` | 1470×4413 · **10,9 MB** | **800×800** | 🔴🔴 |
| `product-lineup/vica_600ml.png` | 1470×5295 · **13,6 MB** | **800×800** | 🔴🔴 |
| `product-lineup/vica_1500ml.png` | 582×2187 · 2,8 MB | **800×800** | 🔴 |
| `product-lineup/vica_1010ml.png` | 275×718 · 312 KB | **800×800** | 🔴 kurang besar |
| `showcase/title.png` | 1250×764 · 343 KB | **1536×939** | 🔴 kurang besar |
| `showcase/{n}-2.png` | 1080×465 · ±42 KB | **1800×775** | 🔴 kurang besar |
| `showcase/{n}-1.png` | 297×463 … 458×525 | **tinggi 1000 px** | 🔴 ±2× kurang besar |

> **Product lineup VICA = 41 MB dari total 123 MB.** Kelima botol dipotong pada rasio berbeda-beda (0,27–0,39), sehingga `imageScale: 0.7 / 0.8 / 0.9 / 0.9` dipakai sebagai tambalan. Render ulang di kanvas **800×800 seragam** menyelesaikan berat *dan* keselarasan sekaligus, dan `imageScale` bisa dihapus.

## Sub-brand Hair Energy (creambath · scentsations · shampoo · vitaglitz)

| File | Sekarang | Target | Status |
|---|---|---|:---:|
| `{line}/hero/1.png`, `2.png` | 1313–2139 px lebar · 1,2–4,0 MB | **720 px lebar** | 🔴 3–6× (layer render 180–350 px saja) |
| `{line}/hero/wordmark.png` | 767×529 · 35 KB | **480×331** | 🟠 |
| `{line}/showcase/` title | 4448–4871 px lebar · 0,5–1,9 MB | **800 px lebar** | 🔴 **6×** |
| `{line}/showcase/` featured | 4868×2326 · 0,6–3,3 MB | **1400×669** | 🔴 3,5× |
| `{line}/showcase/` kartu grid (20 file) | 2397×3110 · 0,4–1,7 MB | **720×934** | 🔴 3,3× (`sizes` cuma 330 px) |

---

# BAGIAN 4 — PERBAIKAN KODE PENDAMPING

Ukuran aset yang benar tidak berguna kalau `sizes` salah — Next memilih varian berdasarkan `sizes`, bukan berdasarkan lebar elemen yang sebenarnya.

### 1. 🔴 `components/brand/BrandHero.tsx:89` — `sizes` salah untuk layer full-bleed

```tsx
sizes="(min-width:768px) 50vw, 100vw"
```
Layer full-bleed (`background.jpg`, dan `1.png` milik NPL/VICA) membentang **100vw** di desktop, tapi `sizes` menyatakan 50vw → Next menyajikan gambar **setengah resolusi**. Latar hero jadi lebih buram dari seharusnya di semua desktop.

Perbaikan: bedakan per jenis layer — layer `sized` pakai lebarnya sendiri, layer full-bleed pakai `100vw`.

### 2. 🟠 `next.config.mjs` — aktifkan AVIF

```js
images: {
  formats: ["image/avif", "image/webp"],
  remotePatterns: [ /* … */ ],
}
```
Default Next hanya WebP. AVIF memangkas 20–30% lagi tanpa mengubah satu aset pun.

### 3. 🟠 `components/brand/BrandAbout.tsx:71` — `sizes` kelebihan

```tsx
sizes="(min-width:640px) 33vw, 64vw"   // di 1920px → 634px, padahal render 286px
sizes="(min-width:1024px) 300px, (min-width:640px) 33vw, 64vw"   // ✅
```

### 4. 🟠 `components/brand/ProductLineup.tsx:153` — `sizes` kelebihan di layar lebar

Kartu di-cap `max-w-[380px]`, tapi `27vw` di 1920 px = 518 px.
```tsx
sizes="(min-width:1440px) 380px, (min-width:1024px) 27vw, (min-width:640px) 46vw, 80vw"
```

### 5. 🟢 Setelah kanvas produk diseragamkan → hapus `imageScale`

5 kemunculan di entri VICA (`lib/brands.ts:363–367`).

---

# ⚡ Ringkasan satu tabel

| Section | Aset | **Target sumber** | Format |
|---|---|:---:|:---:|
| Hero | latar full-bleed | **2560×1440** | JPG/WebP |
| Hero | kanvas produk penuh (`contain`) | **2560 px** sisi panjang | PNG |
| Hero | layer produk terukur | **1200 px** lebar | PNG |
| Hero | crop produk HP | **1000 px** sisi panjang | PNG |
| Hero | wordmark | **`logoWidth`(vw) × 40** px | PNG |
| Lineup | foto SKU | **800×800** | PNG transparan |
| About | 3 kartu | **900×1200** (3:4) | JPG/WebP |
| Showcase | title | **1536 px** lebar | PNG/WebP |
| Showcase | latar `{n}-2` | **1800 px** lebar | PNG-8/WebP |
| Showcase | produk `{n}-1` | **tinggi 1000 px** | PNG |
| CrossSell | `heroImage` | **900×1200** (3:4) | JPG/WebP |
| Sub-brand hero | wordmark | **480×331** | PNG |
| Sub-brand hero | produk | **720 px** lebar | PNG |
| Sub-brand showcase | title | **800 px** lebar | PNG/WebP |
| Sub-brand showcase | featured | **1400 px** lebar | WebP |
| Sub-brand showcase | kartu grid | **720 px** lebar | WebP |

**Prioritas eksekusi:**
1. 🔴 VICA `product-lineup` (41 MB → 0,5 MB) — dampak terbesar, satu section
2. 🔴 Aset yang **kurang besar**: VICA `about`, VICA `wordmark`, NPL & VICA `showcase/{n}-1` — ini masalah kualitas, bukan berat
3. 🔴 Sub-brand HE `showcase` + `hero` (±25 MB → 3 MB)
4. 🔴 NPL `about` (10 MB → 0,4 MB, cuma ganti format)
5. 🟠 Perbaikan `sizes` di `BrandHero.tsx` + AVIF di `next.config.mjs`
