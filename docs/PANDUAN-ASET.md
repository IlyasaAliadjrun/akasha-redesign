# 📐 Panduan Aset Gambar — Website Akasha

> Panduan ukuran, rasio, dan format gambar untuk **tim desain**.
> Tujuannya: setiap gambar tampil **tajam, tidak gepeng, dan tidak terpotong** di HP maupun desktop.
>
> Catatan teknis: nama file & lokasinya sudah "disambungkan" di kode (`lib/brands.ts`).
> Tim desain cukup ikuti **rasio + resolusi + folder** di bawah; developer yang menautkan filenya.

> **PENTING — lebar section (update terbaru):** semua section konten kini memakai **satu lebar seragam ala Apple** — kolom di tengah selebar **±980px** (area gambar efektif **±900px** di desktop). Hanya **main banner beranda** & **banner brand (hero)** yang tetap **full-bleed / layar penuh**. Akibatnya gambar di tiap section tampil lebih kecil dari sebelumnya. Resolusi di tabel **tetap dipertahankan tinggi (≥2× retina)** — lebih besar selalu aman, sistem mengecilkan otomatis. Lebar global ini diatur dari satu variabel `--content-w` di `app/globals.css`, jadi bisa diubah sewaktu-waktu.

> **Rasio beda desktop vs HP:** untuk gambar yang **mengisi penuh** (main banner & banner brand), bentuk layar desktop (lebar) dan HP (tinggi/potret) sangat berbeda, jadi **rasio terbaiknya berbeda per viewport** — lihat tabel "Rasio per viewport" di bawah. Gambar berbentuk **kartu** (produk, About, divisi, dll.) rasionya **sama** di desktop & HP.

---

## 1. Hal paling penting (baca ini dulu)

### a. Dua cara gambar ditampilkan: **COVER** vs **CONTAIN**

| Istilah | Artinya | Konsekuensi untuk desain |
|---|---|---|
| **COVER** (isi penuh) | Gambar **mengisi penuh** kotak, kelebihannya **dipotong**. | Letakkan objek penting (model, produk, logo) **di tengah**. Anggap **±15% bagian tepi bisa hilang**. |
| **CONTAIN** (utuh) | Gambar tampil **utuh**, sisa ruang diisi **warna latar**. | Latar belakang gambar harus **polos/satu warna** atau **transparan (PNG)** supaya menyatu. |

### b. "Safe Zone" (zona aman) untuk gambar COVER

Bayangkan ada bingkai tak terlihat di **tengah gambar (±80%)**. **Semua objek penting harus di dalam zona ini.**
Bagian luar zona aman bisa terpotong tergantung ukuran layar.

```
┌───────────────────────────────┐
│  (area ini bisa kepotong)     │
│   ┌───────────────────────┐   │
│   │                       │   │
│   │     SAFE ZONE         │   │  ← taruh model / produk / teks di sini
│   │   (objek penting)     │   │
│   │                       │   │
│   └───────────────────────┘   │
│  (area ini bisa kepotong)     │
└───────────────────────────────┘
```

### c. Aturan resolusi (berlaku untuk semua)

- Kirim **1 file resolusi tinggi** saja per gambar. Sistem otomatis mengecilkan untuk HP — **jangan kirim versi kecil**.
- Pakai ukuran **2× (retina)** dari yang tertera supaya tetap tajam di layar HP modern.
- **Format:** foto → `.jpg` atau `.webp`; gambar dengan area transparan (produk/logo) → `.png` atau `.webp`.
- **Berat file:** kompres hingga **< 300–500 KB** untuk banner besar. Gambar tajam tapi ringan.

---

## 2. Tabel Ringkas (Quick Reference)

| # | Dipakai di | Folder | Rasio | Resolusi master | Tampilan | Format |
|---|---|---|---|---|---|---|
| 1 | **Banner slider** beranda | `main_banner/` | **16:9** | 2560×1440 | COVER | jpg/webp |
| 2 | **Kartu divisi** beranda | `one_company_many_moments/` | **3:4** | 1200×1600 | COVER | jpg/webp |
| 3 | **Grid brand** beranda | `ten_brands_one_company/` | **2:1** (lebar) / **1:1** (kecil) | 1600×800 / 1080×1080 | COVER | jpg/webp |
| 4 | **Banner brand** (hero halaman brand) | `brand_banner/` | **16:9** | 2560×1440 | COVER (desktop & HP, layar penuh) | jpg/png/webp |
| 5 | **Foto produk** (Explore the lineup) | `foto_sku/{BRAND}/` | **1:1** | 1200×1200 | CONTAIN | **PNG transparan** |
| 6 | **3 kartu "About"** | `foto_about/{Brand}/` | **3:4** | 1200×1600 | COVER | jpg/webp |
| 7 | **Showcase – gambar utama** | `foto_judul_3d/{Brand}/` | **bebas** (cth 1.37:1) | 5219×3799 / 2000² | CONTAIN | png/webp |
| 8 | **Showcase – banner varian** (2 layer parallax) | `foto_varian_3d/{Brand}/` | latar **2.128:1** + produk **3:4** | 5010×2354 / 2687×3660 | latar COVER · produk PNG | jpg/png |

> Folder `marquee` berjalan di beranda **memakai ulang** gambar Kartu Divisi (#2) — tidak perlu aset baru.

---

## 2b. Rasio terbaik per viewport (Desktop vs Mobile) ⭐

Ini jawaban ringkas "rasio terbaiknya berapa untuk desktop & HP". **Kartu** = rasio sama di kedua viewport. **Banner full-bleed** = beda, karena layar desktop lebar tapi HP potret.

| Aset | Desktop | Mobile (HP) | Catatan |
|---|:---:|:---:|---|
| **Main banner beranda** | **16:9** (2560×1440) | **16:9** strip (subjek di tengah) | HP hanya tampil pita 1/3 layar (COVER) — 1 aset 16:9 cukup, asal subjek center. |
| **Banner brand (hero)** | **16:9** (2560×1440) | **9:16** (1290×2290) | Full screen di HP **potret** → aset 16:9 terpotong parah. **Sangat disarankan 1 aset mobile 9:16 terpisah.** Kalau terpaksa 1 aset, subjek wajib pas di tengah. |
| Kartu divisi (one_company) | 3:4 | 3:4 | Sama. |
| Grid brand — tile besar | 16:9 | 16:9 (1 kolom penuh) | COVER, fleksibel; subjek center. |
| Grid brand — tile kecil | 1:1 | 1:1 (1/2 kolom) | COVER, fleksibel. |
| Foto produk (lineup) | 1:1 | 1:1 | Sama. PNG transparan. |
| 3 kartu "About" | 3:4 | 3:4 (ditumpuk 1 kolom) | Sama. |
| Showcase — gambar utama (judul) | bebas (cth 1.37:1) | sama | Rasio diisi di `heroAspect`. |
| Showcase — banner varian (latar `-2`) | 2.128:1 | 2.128:1 | Layer latar + teks. |
| Showcase — banner varian (produk `-1`) | ~3:4 (PNG) | ~3:4 | Produk di tengah, menjorok keluar. |

**Inti:** hanya **banner brand** yang benar-benar butuh aset berbeda untuk HP (9:16). Sisanya 1 aset per rasio sudah cukup.

> Untuk mendukung 2 aset banner brand (desktop + mobile), developer perlu menambah field `heroImageMobile` di `lib/brands.ts` dan menampilkannya via class responsif di `BrandHero`. Saat ini baru 1 aset (`heroImage`) — minta developer kalau aset mobile sudah siap.

---

## 3. Detail per Aset

### 🏠 BERANDA (Homepage)

#### 1) Banner Slider Utama — `public/main_banner/`
- **Rasio:** 16:9 — **Resolusi:** 2560×1440 (minimum 1920×1080)
- **Tampilan:** COVER. Desktop = layar penuh. **HP = pita lebar (1/3 tinggi layar)** — ini disengaja (beda dari banner brand yang kini full screen di HP).
- **Panduan komposisi:**
  - Objek (model + produk + logo) taruh di **tengah ke kanan**, **jangan menempel tepi**.
  - **Latar belakang dibuat polos/satu warna** di area pinggir — supaya menyatu dengan warna section.
  - Di HP terpotong sedikit **kiri–kanan**; di layar lebar bisa terpotong sedikit **atas–bawah**.
- Contoh file saat ini: `NESTLE-PURE-LIFE.jpg`, `HAIR-ENERGY.jpg`.

#### 2) Kartu Divisi — `public/one_company_many_moments/`
- **Rasio:** 3:4 (potret) — **Resolusi:** 1200×1600 (min 900×1200)
- **Tampilan:** COVER, bentuk kartu potret. Sama di desktop & HP.
- **Panduan:** subjek di tengah; bagian bawah kartu tertimpa teks putih (nama divisi) — sisakan ruang.

#### 3) Grid Brand ("Ten brands. One family.") — `public/ten_brands_one_company/`
- **Rasio:** kotak **lebar 2:1** (1600×800) untuk tile besar; **1:1** (1080×1080) untuk tile kecil.
- **Tampilan:** COVER. Subjek cenderung **agak ke kanan** (lebih aman untuk tile sempit).
- Contoh file: `Mini HE.jpg`, `Mini banner WONHAE.jpg`.

---

### 📄 HALAMAN BRAND (Brand Page)

#### 4) Banner Brand (Hero) — `public/brand_banner/`
- **Rasio per viewport:** **Desktop 16:9** (2560×1440) · **Mobile 9:16** (1290×2290, min 1080×1920).
- **Tampilan:** **COVER, layar penuh (1 layar) di desktop MAUPUN HP.** (Sebelumnya HP CONTAIN/strip — sekarang HP juga full screen.)
- **Idealnya 2 aset:** satu 16:9 untuk desktop, satu 9:16 untuk HP (potret). Dengan 1 aset 16:9 saja, di HP sisi kiri-kanan terpotong parah.

##### 4b) Banner Brand — versi PARALLAX BERLAPIS, **kustom per brand** (animated)
Banner hero bisa dirakit dari **beberapa layer terpisah** yang dianimasikan sendiri-sendiri (`heroLayers` + `heroContent` di `lib/brands.ts`). **Efek & komposisi boleh beda tiap brand.** Aset ditaruh di subfolder per brand: **`brand_banner/{Nama Brand}/`**.

**Aset per layer:**
- **Produk:** tiap produk = **PNG transparan, potret** (~3:4), 1 botol/tube per file. Contoh Hair Energy: `produk-1.png` (creambath), `produk-2.png` (shampoo), `produk-3.png` (scentsations) — 2687×3660.
- **Wordmark/logo:** **PNG transparan** (sparkle + logo). Contoh: `wordmark-1.png` (1576×1086).
- **Latar:** cukup **1 warna solid** (`bannerBg` di `lib/brands.ts`) — tidak perlu file.

**Animasi masuk** (diatur per layer via `enterFrom`): **`left` / `right` / `top` / `bottom`** (atau kosong = fade saja). Contoh Hair Energy: produk-1 dari kiri, produk-2 dari atas, produk-3 dari kanan, wordmark fade. Urutan waktu diatur `enterDelay`; kecepatan parallax saat scroll diatur `depth`.

**Posisi & ukuran** tiap layer pakai `left`/`top` (%) + `width` (disarankan `min(..vw, ..vh)` agar tidak kepanjangan di layar pendek) + `aspectRatio` (rasio asli aset). Semua relatif → responsif.

**Teks HTML (tagline + tombol)** lewat `heroContent`: `logo` (wordmark), `tagline`, `ctaText`/`ctaHref`, posisi (`left`), warna (`theme`). Ini HTML asli (bukan gambar) → tajam & bisa diklik.

> Karena banner ini **full-screen di HP (potret)**, komposisi desktop (teks kiri + produk kanan) akan menyempit di HP — atur ulang posisi/ukuran per brand bila perlu. Subjek penting jangan mepet tepi.
- Contoh file: `banner_hair_energy.png` (latar oranye solid `#F46C22`).
- **Tips desain:** karena di HP banyak terpotong, pertimbangkan komposisi yang aman dibaca baik dalam bingkai lebar (desktop) maupun irisan tengah yang sempit (HP).

#### 5) Foto Produk (Explore the lineup) — `public/foto_sku/{BRAND}/`
- **Rasio:** 1:1 (persegi) — **Resolusi:** 1200×1200 (min 1000×1000)
- **Tampilan:** CONTAIN. **Wajib PNG dengan latar transparan.**
- **Panduan:** 1 produk per file, **di tengah**, beri sedikit ruang kosong di sekeliling. Tidak perlu bayangan/latar.
- Contoh: `foto_sku/HE/HE Shampoo Active Menthol 170mL.png`.

#### 6) Tiga Kartu "About" — `public/foto_about/{Brand}/`
- **Rasio:** 3:4 (potret) — **Resolusi:** 1200×1600 (min 900×1200)
- **Tampilan:** COVER. Ada **judul putih** di kiri-bawah tiap kartu — sisakan area agak gelap/kosong di sana.
- Contoh: `foto_about/Hair Energy/Asset HE-05.png` (3 file: HE-05, HE-06, HE-07).

#### 7) Showcase — Gambar Utama (orang) — `public/foto_judul_3d/{Brand}/`
- **Rasio:** bebas (mengikuti gambar) — contoh aktif **landscape 5219×3799 (~1.37:1)**. Boleh juga 1:1.
- **Tampilan:** CONTAIN (tampil utuh), poster di tengah (max ±768px) sebagai "jangkar" di atas banner varian (#8). Boleh transparan atau latar solid.
- **Catatan:** developer mengisi rasio aslinya di `showcase.heroAspect` (`lib/brands.ts`) supaya tidak ada ruang kosong & responsif. Kalau ganti gambar dengan rasio beda, beri tahu developer rasionya.
- Contoh: `foto_judul_3d/Hair Energy/1.png`.

#### 8) Showcase — Banner Varian Produk (PARALLAX BERLAPIS) — `public/foto_varian_3d/{Brand}/`
Tiap banner varian = **2 layer terpisah** yang dianimasikan sendiri-sendiri (parallax saat scroll + animasi masuk). Penamaan file: **`{n}-1`** dan **`{n}-2`** (n = urutan banner: 1, 2, 3, …).

| Layer | File | Isi | Rasio | Resolusi | Animasi masuk |
|---|---|---|:---:|:---:|---|
| Latar | **`{n}-2.png`** | Banner oranye + teks + sparkle (TANPA produk) | **2.128:1** (lebar) | 5010×2354 | fade-in |
| Produk | **`{n}-1.png`** | Produk/botol saja, **PNG transparan** | **~3:4** (potret) | 2687×3660 | fade-in dari **kiri** (banner ganjil) / **kanan** (banner genap), berhenti **persis di tengah** |

- **Produk** diletakkan **di tengah** dan **menjorok keluar** (lebih tinggi dari banner) — beri ruang transparan secukupnya, jangan dipotong mepet.
- **Latar** (`-2`): teks/sparkle **jangan mepet tepi** (sedikit ter-parallax).
- Developer menautkan tiap banner sebagai `{ bg: "{n}-2.png", product: "{n}-1.png" }` di `showcase.variants` (`lib/brands.ts`). Arah masuk kiri/kanan otomatis dari urutan.
- Contoh: `foto_varian_3d/Hair Energy/1-1.png` (produk) + `1-2.png` (latar), dst. sampai `3-*`.
- Catatan: **opsional** — tidak semua brand wajib punya. Sistemnya **reusable**: brand lain cukup sediakan file `{n}-1`/`{n}-2` dengan rasio sama.

---

## 4. Penamaan Folder per Brand

Setiap brand punya subfolder sendiri. Ikuti pola yang sudah ada:

| Jenis aset | Pola folder | Contoh (Hair Energy) |
|---|---|---|
| Foto produk | `foto_sku/{KODE}/` | `foto_sku/HE/` |
| Kartu About | `foto_about/{Nama Brand}/` | `foto_about/Hair Energy/` |
| Showcase utama | `foto_judul_3d/{Nama Brand}/` | `foto_judul_3d/Hair Energy/` |
| Showcase varian | `foto_varian_3d/{Nama Brand}/` | `foto_varian_3d/Hair Energy/` |
| Banner brand | `brand_banner/banner_{slug}.png` | `brand_banner/banner_hair_energy.png` |

> Kalau ragu nama folder/file, **kirim apa adanya** dan beri tahu developer — penamaan final disambungkan di kode.

---

## 5. Checklist Sebelum Kirim Aset ✅

- [ ] Rasio sudah sesuai tabel (jangan di-stretch/gepeng).
- [ ] Resolusi minimal terpenuhi (lebih besar lebih baik, 2× retina).
- [ ] Objek penting ada di **safe zone tengah** (untuk gambar COVER).
- [ ] Gambar **CONTAIN** → latar **polos satu warna** atau **transparan (PNG)**.
- [ ] Banner brand → sebutkan **kode warna latar** ke developer.
- [ ] Format benar (`.jpg`/`.webp` foto, `.png`/`.webp` transparan).
- [ ] File sudah dikompres (< 300–500 KB untuk banner).
- [ ] File ditaruh di **folder brand yang benar**.

---

## 6. Catatan untuk Developer

- Path semua aset dirujuk dari `lib/brands.ts` (field `heroImage`, `bannerBg`, `products[].image`, `about[]`, `showcase`) dan dari komponen home (`HeroCarousel`, `DivisionCards`, `BentoGrid`, `SensoryStrip`).
- Render gambar memakai `next/image` (`fill` + `sizes`) — srcset responsif dibuat otomatis; cukup 1 sumber resolusi tinggi.
- `object-contain` dipakai di: foto produk lineup, showcase gambar utama. Sisanya `object-cover` — **termasuk banner brand yang kini COVER di desktop & mobile** (`components/brand/BrandHero.tsx`, full screen `h-[100svh]`).
- Untuk banner brand baru: isi `heroImage` + `bannerBg` (warna tepi banner, dipakai sebagai latar saat loading). Karena COVER, pastikan subjek/branding di tengah agar tidak terpotong di layar HP potret.
