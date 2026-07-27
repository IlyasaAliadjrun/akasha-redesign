# 📐 Panduan Aset Gambar — Website Akasha

> Panduan ukuran, rasio, dan format gambar untuk **tim desain**.
> Tujuannya: setiap gambar tampil **tajam, tidak gepeng, dan tidak terpotong** di HP maupun desktop.
>
> Catatan teknis: nama file & lokasinya sudah "disambungkan" di kode. Tim desain cukup ikuti
> **rasio + resolusi + folder** di bawah; developer yang menautkan filenya.
>
> **Update arsitektur:** config brand kini ada di **`content/brands/{slug}.ts`** dan config
> sub-brand di **`content/sub-brands/{parent}--{slug}.ts`** (auto-discovery). Di mana pun dokumen
> ini menyebut `lib/brands.ts` / `lib/subBrands.ts` sebagai tempat mengisi data, baca sebagai file
> `content/` tersebut. Tipe & helper tetap di `lib/`. Lihat [BRAND_PAGE_GUIDE.md](BRAND_PAGE_GUIDE.md).

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

## 2. Struktur folder — **per halaman → per section** ⭐

Sejak perapian aset, `public/` disusun mengikuti **halaman** situs, lalu dipecah lagi per **section** di halaman itu. Jadi kalau kamu diminta "ganti kartu About Hair Energy", tempatnya langsung ketemu: `public/brand/hair-energy/about/`.

```
public/
├── home/                        ← Beranda
│   ├── hero-carousel/           banner slider utama      → nestle-pure-life.jpg, hair-energy.jpg, …
│   ├── division-cards/          kartu divisi             → beverage.jpg, beauty.png
│   └── brand-grid/              grid "Ten brands…"       → hair-energy.jpg, wonhae.jpg, …
├── brand/                       ← Halaman brand — 1 folder per brand, pakai slug
│   ├── hair-energy/
│   │   ├── hero/                1.png 2.png 3.png wordmark.png
│   │   ├── product-lineup/      shampoo-aloe-melon-170ml.png, …
│   │   ├── about/               1.png 2.png 3.png
│   │   └── showcase/            title.png, 1-1.png, 1-2.png, 2-1.png, …
│   └── nestle-pure-life/
│       ├── hero/                background.jpg, 1.png, 1-mobile.png, wordmark.png
│       ├── product-lineup/      330ml.jpg, 600ml.jpg, 1500ml.jpg, galon-15l.jpg
│       └── about/               1.png 2.png 3.png
├── about/                       ← Halaman lain — hero full screen, 2 aset
│   └── hero/                    desktop.jpg (16:9) + mobile.jpg (9:16)
├── investor/  governance/  contact/  careers/
│   └── hero/                    idem — desktop.jpg + mobile.jpg
└── shared/                      logo-white.png, logo-color.png  (navbar, semua halaman)
```

### Aturan penamaan

1. **Semua huruf kecil + tanda hubung** (gaya slug). `BARBER-DAILY.jpg` → `barber-daily.jpg`; `HE Shampoo Kiwi 170mL.png` → `shampoo-kiwi-170ml.png`. Jangan pakai spasi.
2. **Nama folder brand = slug brand** (sama persis dengan URL-nya): `hair-energy/`, `nestle-pure-life/`, `barber-daily/`.
3. Di dalam section, dua gaya nama dipakai:
   - **Urutan** — kalau posisinya yang penting: `1.png`, `2.png`, `1-1.png`, `1-2.png`.
   - **Nama produk (slug)** — kalau identitasnya yang penting: `shampoo-aloe-melon-170ml.png`, `galon-15l.jpg`.
4. Prefiks brand di nama file **tidak perlu lagi** — foldernya sudah menyebut brand. (`HE Shampoo …` → `shampoo-…`.)

| Section | Pola nama | Contoh |
|---|---|---|
| `hero/` | urutan layer, plus `wordmark` / `background` | `1.png`, `2.png`, `3.png`, `wordmark.png`, `background.jpg` |
| `hero/` versi HP | `{n}-mobile` | `1-mobile.png` (mengganti layer `1.png` di HP) |
| `product-lineup/` | nama produk (slug) | `creambath-kiwi-500ml.png`, `330ml.jpg` |
| `about/` | urutan | `1.png`, `2.png`, `3.png` |
| `showcase/` | `title` + `{n}-1` / `{n}-2` | `title.png`, `1-1.png`, `1-2.png` |

---

## 2a. Tabel Ringkas (Quick Reference)

| # | Dipakai di | Folder | Rasio | Resolusi master | Tampilan | Format |
|---|---|---|---|---|---|---|
| 1 | **Banner slider** beranda | `home/hero-carousel/` | **16:9** | 2560×1440 | COVER | jpg/webp |
| 2 | **Kartu divisi** beranda | `home/division-cards/` | **3:4** | 1200×1600 | COVER | jpg/webp |
| 3 | **Grid brand** beranda | `home/brand-grid/` | **2:1** (lebar) / **1:1** (kecil) | 1600×800 / 1080×1080 | COVER | jpg/webp |
| 4 | **Banner brand** (hero halaman brand) | `brand/{slug}/hero/` | **16:9** | 2560×1440 | COVER (desktop & HP, layar penuh) | jpg/png/webp |
| 5 | **Foto produk** (Explore the lineup) | `brand/{slug}/product-lineup/` | **1:1** | 1200×1200 | CONTAIN | **PNG transparan** |
| 6 | **3 kartu "About"** | `brand/{slug}/about/` | **3:4** | 1200×1600 | COVER | jpg/webp |
| 7 | **Showcase – gambar utama** | `brand/{slug}/showcase/title.png` | **bebas** (cth 1.37:1) | 5219×3799 / 2000² | CONTAIN | png/webp |
| 8 | **Showcase – banner varian** (2 layer parallax) | `brand/{slug}/showcase/{n}-1`,`{n}-2` | latar **2.128:1** + produk **3:4** | 5010×2354 / 2687×3660 | latar COVER · produk PNG | jpg/png |
| 9 | **Hero halaman** (About/Investor/dll) — desktop | `{page}/hero/desktop.jpg` | **16:9** | 2560×1440 | COVER, layar penuh | jpg/webp |
| 9b | **Hero halaman** — HP | `{page}/hero/mobile.jpg` | **9:16** | 1080×1920 | COVER, layar penuh | jpg/webp |

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

#### 1) Banner Slider Utama — `public/home/hero-carousel/`
- **Rasio:** 16:9 — **Resolusi:** 2560×1440 (minimum 1920×1080)
- **Tampilan:** COVER. Desktop = layar penuh. **HP = pita lebar (1/3 tinggi layar)** — ini disengaja (beda dari banner brand yang kini full screen di HP).
- **Panduan komposisi:**
  - Objek (model + produk + logo) taruh di **tengah ke kanan**, **jangan menempel tepi**.
  - **Latar belakang dibuat polos/satu warna** di area pinggir — supaya menyatu dengan warna section.
  - Di HP terpotong sedikit **kiri–kanan**; di layar lebar bisa terpotong sedikit **atas–bawah**.
- Contoh file saat ini: `nestle-pure-life.jpg`, `hair-energy.jpg`. **Nama file = slug brand.**

#### 2) Kartu Divisi — `public/home/division-cards/`
- **Rasio:** 3:4 (potret) — **Resolusi:** 1200×1600 (min 900×1200)
- **Tampilan:** COVER, bentuk kartu potret. Sama di desktop & HP.
- **Panduan:** subjek di tengah; bagian bawah kartu tertimpa teks putih (nama divisi) — sisakan ruang.
- **Nama file = id divisi:** `beverage.jpg`, `beauty.png`, `mens.jpg`, `food.jpg`.
- ⚠️ **Belum ada:** `mens.jpg`. Divisi Men's Care sekarang meminjam banner 16:9 `home/hero-carousel/barber-daily.jpg` — rasionya tidak pas (harusnya 3:4). Kalau aset 3:4-nya sudah ada, kirim dan beri tahu developer.
- Catatan: `makarizo-professional.png` ada di folder ini tapi **tidak dipakai** — sisa dari waktu "Professional" masih jadi divisi sendiri.

#### 3) Grid Brand ("Ten brands. One family.") — `public/home/brand-grid/`
- **Rasio:** kotak **lebar 2:1** (1600×800) untuk tile besar; **1:1** (1080×1080) untuk tile kecil.
- **Tampilan:** COVER. Subjek cenderung **agak ke kanan** (lebih aman untuk tile sempit).
- **Nama file = slug brand:** `hair-energy.jpg`, `wonhae.jpg`.

---

### 📄 HALAMAN BRAND (Brand Page)

#### 4) Banner Brand (Hero) — `public/brand/{slug}/hero/`
- **Rasio per viewport:** **Desktop 16:9** (2560×1440) · **Mobile 9:16** (1290×2290, min 1080×1920).
- **Tampilan:** **COVER, layar penuh (1 layar) di desktop MAUPUN HP.** (Sebelumnya HP CONTAIN/strip — sekarang HP juga full screen.)
- **Idealnya 2 aset:** satu 16:9 untuk desktop, satu 9:16 untuk HP (potret). Dengan 1 aset 16:9 saja, di HP sisi kiri-kanan terpotong parah.

##### 4b) Banner Brand — versi PARALLAX BERLAPIS, **kustom per brand** (animated)
Banner hero bisa dirakit dari **beberapa layer terpisah** yang dianimasikan sendiri-sendiri (`heroLayers` + `heroContent` di `lib/brands.ts`). **Efek & komposisi boleh beda tiap brand.** Aset ditaruh di **`brand/{slug}/hero/`**.

**Aset per layer:**
- **Produk:** tiap produk = **PNG transparan, potret** (~3:4), 1 botol/tube per file. **Nama file = urutan layer.** Contoh Hair Energy: `1.png` (creambath), `2.png` (shampoo), `3.png` (scentsations) — 2687×3660.
- **Wordmark/logo:** **PNG transparan** (sparkle + logo). Nama file: `wordmark.png` (Hair Energy: 1576×1086).
- **Latar:** cukup **1 warna solid** (`bannerBg` di `lib/brands.ts`) — tidak perlu file. Kalau memang butuh gambar latar (seperti Nestlé Pure Life), namanya `background.jpg`.
- **Versi HP:** kalau satu layer perlu aset khusus HP (mis. crop produk yang lebih rapat), namanya `{n}-mobile.png`. Contoh: `nestle-pure-life/hero/1-mobile.png` menggantikan `1.png` di layar <768px.

**Animasi masuk** (diatur per layer via `enterFrom`): **`left` / `right` / `top` / `bottom`** (atau kosong = fade saja). Contoh Hair Energy: produk-1 dari kiri, produk-2 dari atas, produk-3 dari kanan, wordmark fade. Urutan waktu diatur `enterDelay`; kecepatan parallax saat scroll diatur `depth`.

**Posisi & ukuran** tiap layer pakai `left`/`top` (%) + `width` (disarankan `min(..vw, ..vh)` agar tidak kepanjangan di layar pendek) + `aspectRatio` (rasio asli aset). Semua relatif → responsif.

**Teks HTML (tagline + tombol)** lewat `heroContent`: `logo` (wordmark), `tagline`, `ctaText`/`ctaHref`, posisi (`left`), warna (`theme`). Ini HTML asli (bukan gambar) → tajam & bisa diklik.

> Karena banner ini **full-screen di HP (potret)**, komposisi desktop (teks kiri + produk kanan) akan menyempit di HP — atur ulang posisi/ukuran per brand bila perlu. Subjek penting jangan mepet tepi.
- Contoh: `brand/hair-energy/hero/` (latar oranye solid `#F36C21`, tanpa file latar).
- **Tips desain:** karena di HP banyak terpotong, pertimbangkan komposisi yang aman dibaca baik dalam bingkai lebar (desktop) maupun irisan tengah yang sempit (HP).

#### 5) Foto Produk (Explore the lineup) — `public/brand/{slug}/product-lineup/`
- **Rasio:** 1:1 (persegi) — **Resolusi:** 1200×1200 (min 1000×1000)
- **Tampilan:** CONTAIN. **Wajib PNG dengan latar transparan.**
- **Panduan:** 1 produk per file, **di tengah**, beri sedikit ruang kosong di sekeliling. Tidak perlu bayangan/latar.
- **Nama file = nama produk dalam slug**, tanpa prefiks brand: `shampoo-active-menthol-170ml.png`, `creambath-kiwi-500ml.png`, `330ml.jpg`, `galon-15l.jpg`.

#### 6) Tiga Kartu "About" — `public/brand/{slug}/about/`
- **Rasio:** 3:4 (potret) — **Resolusi:** 1200×1600 (min 900×1200)
- **Tampilan:** COVER. Ada **judul putih** di kiri-bawah tiap kartu — sisakan area agak gelap/kosong di sana.
- **Nama file = urutan:** `1.png`, `2.png`, `3.png` (urutannya = urutan tampil di halaman).

#### 7) Showcase — Gambar Utama (orang) — `public/brand/{slug}/showcase/title.png`
- **Rasio:** bebas (mengikuti gambar). Dua pola yang dipakai sekarang:
  - **Landscape** (Hair Energy) — cth `5219×3799 (~1.37:1)`, teks kampanye menyatu di dalam gambar.
  - **Potret** (Nestlé Pure Life) — cth `2048×3179 (~0.64:1)`, **cutout orang tanpa teks**.
- **Tampilan:** CONTAIN (tampil utuh), poster di tengah sebagai "jangkar" di atas banner varian (#8). Boleh transparan atau latar solid.
- **Catatan developer:** rasio asli diisi di `showcase.heroAspect`. Untuk title **potret**, WAJIB set `showcase.heroMaxWidth` (mis. `"min(72vw, 22rem)"`) supaya tinggi title tidak jauh lebih besar dari title landscape (default lebarnya 768px → potret jadi kelewat tinggi). Kalau ganti gambar dengan rasio beda, beri tahu developer.
- Contoh: `brand/hair-energy/showcase/title.png` (landscape), `brand/nestle-pure-life/showcase/title.png` (potret).

#### 8) Showcase — Banner Varian Produk (PARALLAX BERLAPIS) — `public/brand/{slug}/showcase/`
Tiap banner varian = **2 layer terpisah** yang dianimasikan sendiri-sendiri (parallax saat scroll + animasi masuk). Penamaan file: **`{n}-1`** dan **`{n}-2`** (n = urutan banner: 1, 2, 3, …).

| Layer | File | Isi | Rasio | Resolusi | Animasi masuk |
|---|---|---|:---:|:---:|---|
| Latar | **`{n}-2.png`** | Banner + (opsional) teks/sparkle, **TANPA produk** | **~2.1–2.26:1** (lebar) | cth 5010×2354 / 4591×2032 | fade-in |
| Produk | **`{n}-1.png`** | Produk/botol saja, **PNG transparan** | bebas (potret/kotak) | cth 2687×3660 / 1809×2015 | slide dari **kiri** (banner ganjil) / **kanan** (banner genap) |

**Dua mode tata letak produk** (`showcase.productAlign` di `lib/brands.ts`):
- **`"center"`** (default, Hair Energy) — produk berhenti **di tengah**, menimpa latar yang penuh teks/art. Latar `-2` berisi teks kampanye.
- **`"sides"`** (Nestlé Pure Life) — produk berhenti **di sisi tempat ia masuk** (ganjil→kiri, genap→kanan), separuh banner lain **dibiarkan kosong** (menyerupai referensi berdampingan). Latar `-2` **polos tanpa teks**.

- **Skala relatif:** kalau semua SKU digambar pada **satu kanvas ukuran sama** (cth NPL: semua `-1` di kanvas 1809×2015), ukuran botol antar-banner otomatis proporsional (330 mL kecil → galon besar). Jaga tiap botol di posisi yang konsisten dalam kanvas.
- **Produk** boleh **menjorok keluar** (lebih tinggi dari banner) — beri ruang transparan, jangan dipotong mepet.
- Developer menautkan tiap banner sebagai `{ bg: "{n}-2.png", product: "{n}-1.png", bgAspect, productAspect, productHeight }`. Rasio & tinggi produk diisi per aset. Arah masuk kiri/kanan otomatis dari urutan.
- Contoh: `brand/hair-energy/showcase/1-1.png` + `1-2.png` (mode center), `brand/nestle-pure-life/showcase/1-1.png` … `4-*` (mode sides).
- Catatan: **opsional & reusable** — brand lain cukup sediakan `{n}-1`/`{n}-2` dengan rasio sama di `brand/{slug}/showcase/`.

---

### 📄 HALAMAN LAIN (About · Investor · Governance · Contact · Careers)

#### 9) Hero Halaman — `public/{page}/hero/desktop.jpg` + `mobile.jpg`

Modelnya **sama seperti banner brand**: foto full screen (COVER, 1 layar penuh) dengan **judul + subjudul sebagai teks HTML di atasnya** — bukan bagian dari foto. Ini aset pertama yang benar-benar punya **2 versi terpisah** desktop & HP.

| | Desktop | HP |
|---|:---:|:---:|
| **Nama file** | `desktop.jpg` | `mobile.jpg` |
| **Rasio** | **16:9** | **9:16** |
| **Resolusi** | 2560×1440 (min 1920×1080) | 1080×1920 |
| **Tampilan** | COVER, layar penuh | COVER, layar penuh |

**Komposisi — ini yang paling penting:**

```
DESKTOP 16:9                          HP 9:16
├────── 36% ──────┤                   ┌──────────────┐
┌─────────────────┬────────────┐      │  ruang teks  │  ← atas ±35% kosong
│                 │            │      ├──────────────┤
│  ruang teks     │   SUBJEK   │      │              │
│ (judul+subjudul)│  (orang)   │      │    SUBJEK    │  ← subjek bawah/tengah
│                 │            │      │              │
└─────────────────┴────────────┘      └──────────────┘
  kosong/polos      mulai di 36%
```

- **Desktop:** subjek di **KANAN**, mulai kira-kira di **36% dari kiri**. Sisi **kiri 36% harus kosong/polos** (warna latar rata) — di situ judul + subjudul ditaruh. Kolom teksnya memang dipatok segitu (mulai `6vw`, lebar maks `30vw`), jadi **subjek yang masuk lebih ke kiri dari 36% akan ketimpa teks**.
- **HP:** subjek di **BAWAH atau tengah-bawah**. Bagian **atas ±35% kosong/polos** — di situ judulnya ditaruh.
- **JANGAN taruh teks di dalam foto.** Judul & subjudul dirender HTML supaya tajam, bisa diterjemahkan, dan bisa dibaca screen reader.
- Judul dipasang lebih kecil dari headline biasa (token `text-page-hero` = `clamp(26px, 3.2vw, 48px)`) supaya muat di kolom 30vw itu dan tidak menabrak subjek.

**Wajib disebutkan ke developer** untuk tiap foto hero:
1. Foto ini **terang** atau **gelap**? → menentukan warna teks (hitam untuk foto terang, putih untuk foto gelap) **dan** warna navbar di atasnya.
2. **Kode warna latar** (hex) area kosongnya → dipakai sebagai warna sementara saat foto masih loading.

Yang terpasang sekarang:

| Halaman | Warna latar | Terang/gelap | Teks |
|---|---|:---:|:---:|
| About | `#AEC0CD` (studio putih) | terang | hitam |
| Investor | `#0F4930` (hijau) | gelap | putih |
| Governance | `#880E17` (merah) | gelap | putih |
| Contact | `#E5B91A` (kuning) | terang | hitam |
| Careers | `#0C426A` (biru) | gelap | putih |

> Developer: dirender oleh [components/page/PageHero.tsx](../components/page/PageHero.tsx). Prop `tone` = terang/gelap foto (`"light"` → teks ink, `"dark"` → teks putih); nilainya juga dikirim ke `data-theme` yang dibaca `Navbar` untuk membalik warna logo & link. Prop `bg` = warna latar saat loading. Kolom teks di desktop **di-anchor pakai persen** (`ml-[6vw]` + `max-w-[30vw]`), **bukan** container `max-w-[1400px] mx-auto` — sama seperti `BrandHero`, karena ini banner full-bleed: subjek fotonya duduk di ~36% frame di semua lebar layar, sedangkan container yang di-center makin menggeser teks ke kanan di layar >1400px sampai menabrak subjek.

---

## 4. Penamaan Folder per Brand

Setiap brand punya **satu folder** berisi semua sectionnya — dinamai persis seperti **slug** brand itu (sama dengan URL-nya, `/brands/hair-energy` → `brand/hair-energy/`).

| Jenis aset | Pola folder | Contoh (Hair Energy) |
|---|---|---|
| Banner brand (hero) | `brand/{slug}/hero/` | `brand/hair-energy/hero/1.png` |
| Foto produk | `brand/{slug}/product-lineup/` | `brand/hair-energy/product-lineup/shampoo-kiwi-170ml.png` |
| Kartu About | `brand/{slug}/about/` | `brand/hair-energy/about/1.png` |
| Showcase utama | `brand/{slug}/showcase/title.png` | `brand/hair-energy/showcase/title.png` |
| Showcase varian | `brand/{slug}/showcase/{n}-1`,`{n}-2` | `brand/hair-energy/showcase/1-1.png` |

Slug brand yang berlaku sekarang (nama folder aset = slug ini, **huruf kecil semua**): `nestle-pure-life`, `vica`, `asters`, `advisor`, `hair-energy`, `t1`, `128`, `salon-daily`, `honey-dew`, `concept-ultimax`, `rebonding-system`, `texture-experience`, `mk3`, `inoskin`, `lou`, `make-it` (folder aset: `makeit`), `finest`, `barber-daily`, `wonhae`, `omoide`, `floaty`, `fitmeup`. Beberapa brand/sub-brand punya folder aset tapi belum di-wire (mis. `advisor-rx`, `hydroprisma`, dan sub-brand `advisor-rx/grey-hair`, `advisor-rx/strong-hair`) — itu normal.

> Registrasi brand kini **otomatis dari `content/brands/*.ts`** (satu file per brand), bukan lagi didaftarkan manual. Lihat [BRAND_PAGE_GUIDE.md](BRAND_PAGE_GUIDE.md) §5.

> **Makarizo** dan **Makarizo Professional** adalah brand payung — keduanya **tidak punya halaman sendiri** (`/brands/makarizo` sengaja 404), jadi tidak perlu folder aset. Aset masuk ke sub-brand-nya (mis. `brand/hair-energy/`).

> Kalau ragu nama folder/file, **kirim apa adanya** dan beri tahu developer — penamaan final disambungkan di kode.

### 4a. Halaman Sub-Brand (Product Line) — `public/brand/{brand}/{sub-brand}/`

Sub-brand = **lini produk** di dalam sebuah brand (cth Hair Energy → Fibertherapy Creambath, Scentsations, Shampoo, Vitaglitz). Halamannya di `/brands/{brand}/{sub-brand}` (cth `/brands/hair-energy/creambath`), **tidak ada di navbar** — diakses dari banner varian di showcase halaman brand. Layout: **banner (parallax) → showcase (gambar title + grid kartu) → cross-sell → CTA** (tanpa About, lineup, & blok kandungan).

Aset ditaruh **bersarang di dalam folder brand induk**:

| Bagian | Folder | Isi | Fit | Parallax? |
|---|---|---|:---:|:---:|
| Banner hero | `brand/{brand}/{sub}/hero/` | `wordmark.png` (logo, fade-in) + layer produk PNG **dinamai angka urut fade-in** (`1.png`, `2.png`, …). Produk 1 fade-in dari kiri, produk 2 dari kanan. Judul/subjudul/tombol = teks HTML, **bukan** gambar. Di HP urutannya vertikal: wordmark → produk → wording. | contain | **ya** |
| Showcase — title | `brand/{brand}/{sub}/showcase/` | 1 gambar title di atas grid kartu. | contain | tidak |
| Showcase — kartu | `brand/{brand}/{sub}/showcase/` | 1 gambar per varian. **Gambar SUDAH termasuk background + border kartunya** — developer hanya menempatkan gambar, tidak menambah bingkai/latar apa pun. | contain | **tidak** (gambar utuh) |

- **Rasio kartu:** semua kartu di satu halaman **rasionya sama** (biar grid rapi) — beri tahu developer rasio title, kartu grid, dan kartu featured (full-width) supaya diset di `lib/subBrands.ts` (`showcaseTitleAspect`, `cardAspect`, `featuredAspect`) dan tidak ada ruang kosong.
- **Skeleton:** selama folder masih kosong, tiap slot gambar tampil sebagai **kotak placeholder polos** (abu muda, tanpa bingkai) — jadi halaman sudah tampil sebagai wireframe. Begitu aset dimasukkan & path diisi di [lib/subBrands.ts](../lib/subBrands.ts), gambar asli langsung menggantikannya.
- **Teks** (tagline hero, tombol) diisi di `lib/subBrands.ts`; sisanya (judul, nama varian) sudah menyatu di dalam gambar showcase.
- Contoh folder: `brand/hair-energy/creambath/hero/`, `brand/hair-energy/creambath/showcase/`.

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

- **Struktur `public/` = per halaman → per section** (lihat §2). Aset baru wajib ikut pola ini; jangan bikin folder top-level baru di luar nama halaman.
- Path semua aset dirujuk dari `lib/brands.ts` (field `heroImage`, `bannerBg`, `products[].image`, `about[]`, `showcase`) dan dari komponen home (`HeroCarousel`, `DivisionCards`, `BentoGrid`, `SensoryStrip`).
- Halaman brand dirender lewat satu route `app/brands/[slug]/page.tsx`, yang memilih template: `components/brand/BrandPage.tsx` (brand utama) atau `components/brand/SubBrandPage.tsx` (brand yang punya `parent`, mis. Hair Energy).
- Hero halaman non-brand memakai `components/page/PageHero.tsx`. Art direction desktop/HP dilakukan dengan **dua `next/image`** (`md:hidden` / `hidden md:block`) — pola art-direction resmi Next.js; konsekuensinya browser bisa mengunduh kedua aset, jadi jaga tiap file < ~400 KB.
- Brand payung (`isUmbrella()` — punya sub-brand) **tidak dirender**: `generateStaticParams` melewatinya dan halamannya `notFound()`. Jangan pernah menaut ke `/brands/{umbrella}` — pakai `brandHref(slug)` dari `lib/brands.ts`, yang otomatis mengarah ke sub-brand `flagship`.
- Render gambar memakai `next/image` (`fill` + `sizes`) — srcset responsif dibuat otomatis; cukup 1 sumber resolusi tinggi.
- `object-contain` dipakai di: foto produk lineup, showcase gambar utama. Sisanya `object-cover` — **termasuk banner brand yang kini COVER di desktop & mobile** (`components/brand/BrandHero.tsx`, full screen `h-[100svh]`).
- Untuk banner brand baru: isi `heroImage` + `bannerBg` (warna tepi banner, dipakai sebagai latar saat loading). Karena COVER, pastikan subjek/branding di tengah agar tidak terpotong di layar HP potret.
