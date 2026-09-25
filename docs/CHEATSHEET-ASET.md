# 🎯 Cheat Sheet Aset — Akasha (1 Halaman)

> Versi ringkas. Detail lengkap: [PANDUAN-ASET.md](./PANDUAN-ASET.md)

> ⚙️ **Lebar section seragam ±980px** (area gambar ±900px desktop) — kecuali main banner & banner brand yang full-bleed. Rasio kartu **sama** di desktop & HP; hanya **banner** yang beda per viewport (lihat bawah).

## 📁 Struktur folder: **dua akar — `media/` (gambar) & `documents/` (PDF/DOC)**

```
public/
├── media/
│   ├── shared/                      logo navbar (dipakai semua halaman) + og.jpg (gambar share default)
│   ├── home/                        ← Beranda
│   │   ├── hero-carousel/           banner slider utama
│   │   ├── division-cards/          kartu divisi
│   │   └── brand-grid/              grid "Ten brands. One family."
│   ├── pages/{page}/hero/           ← About · Investor · Governance · Contact · Careers
│   │                                  desktop.jpg + mobile.jpg + og.jpg (share WhatsApp/LinkedIn)
│   ├── pages/about/organization/    foto pengurus 5:7 → hanjaya-limanto.jpg, …
│   ├── pages/about/certifications/  logo sertifikasi → iso.png, fssc-22000.png, bpom.png, proper.png
│   ├── brands/{brand-slug}/         ← Halaman brand (1 folder per brand)
│   │   ├── hero/                    banner hero (berlapis/parallax)
│   │   ├── product-lineup/          foto SKU
│   │   ├── about/                   3 kartu About
│   │   ├── showcase/                poster 3D + banner varian
│   │   └── lines/{line-slug}/       ← Halaman sub-brand (product line), cth lines/creambath/
│   │       ├── hero/                banner sub-brand (berlapis/parallax)
│   │       └── showcase/            gambar title + gambar tiap kartu varian
│   │                                (gambar kartu SUDAH termasuk background & border)
│   └── reports/{annual-report|sustainability-report}/   sampul laporan → 2025.png
└── documents/                       ← PDF/DOC — annual-report/2025.pdf,
                                       financial-report/2025/q1.pdf, gms/2026/…, disclosure/2026-06-12-….pdf
```

**Satu file untuk kedua bahasa**, kecuali gambar yang **tulisannya menempel di gambar** (headline showcase, slogan banner, wordmark berteks): kirim **dua file** — `title.en.png` + `title.id.png`, akhiran bahasa tepat sebelum ekstensi, wajib berpasangan. Yang menentukan adalah isi gambarnya, bukan jenis section-nya.

**Aturan nama file:** semua **huruf kecil + tanda hubung** (slug), tanpa spasi atau garis bawah. `BARBER-DAILY.jpg` → `barber-daily.jpg`.
Nama folder brand/sub-brand = slug-nya: `hair-energy/`, `make-it/`, `lines/creambath/`.

**Cek otomatis:** `npm run verify:assets` — gagal kalau ada path yang filenya tidak ada, nama melanggar aturan, atau path gaya lama.

## 📋 Ukuran semua aset

| Aset | Folder | Rasio | Resolusi | Fit | Format |
|---|---|:---:|:---:|:---:|:---:|
| Banner slider beranda | `media/home/hero-carousel/` | **16:9** | 2560×1440 | COVER | jpg |
| Kartu divisi beranda | `media/home/division-cards/` | **3:4** | 1200×1600 | COVER · rail horizontal · hover list | jpg/png |
| Grid brand — tile besar | `media/home/brand-grid/` | **2:1** | 1600×800 | COVER | jpg |
| Grid brand — tile kecil | `media/home/brand-grid/` | **1:1** | 1080×1080 | COVER | jpg |
| Banner brand (hero) | `media/brands/{slug}/hero/` | **16:9** | 2560×1440 | COVER* | jpg/png |
| **Hero halaman — desktop** | `media/pages/{page}/hero/desktop.jpg` | **16:9** | 2560×1440 | COVER | jpg |
| **Hero halaman — HP** | `media/pages/{page}/hero/mobile.jpg` | **9:16** | 1080×1920 | COVER | jpg |
| **Sampul laporan** (tahunan & keberlanjutan) | `media/reports/{annual-report\|sustainability-report}/{tahun}` | **16:15** (≈1.067) | 1200×1125 | COVER | jpg/png |
| **Foto pengurus** (About) | `media/pages/about/organization/{nama-slug}.jpg` | **5:7** | 900×1260 | COVER, anchor atas | jpg |
| Logo sertifikasi (About) | `media/pages/about/certifications/{nama}.png` | bebas | tinggi ≥ 256 px (tampil 56 px) | CONTAIN, transparan | png |
| **Gambar share** (preview link WhatsApp/LinkedIn/X) | `media/pages/{page}/hero/og.jpg` · default `media/shared/og.jpg` | **1.91:1** | **1200×630** | dipotong otomatis oleh platform — subjek di tengah | jpg < 300 KB |
| Gambar share brand / sub-brand | `media/brands/{slug}/hero/og.jpg` · `…/lines/{line}/hero/og.jpg` — **dibuat otomatis** `npm run og:generate`; juga jadi thumbnail "Lainnya dari Akasha" (106×56 / HP 88×48, 20% bawah terpotong) | **1.91:1** | 1200×630 | wordmark di tengah | jpg |
| Favicon / ikon aplikasi | `app/icon.png` · `app/apple-icon.png` (bukan di `public/`) | **1:1** | 512×512 · 180×180 | logo di tengah, latar putih | png |
| Foto produk (lineup) | `media/brands/{slug}/product-lineup/` | **1:1** | 1200×1200 | CONTAIN | **PNG** |
| 3 kartu "About" | `media/brands/{slug}/about/` | **3:4** | 1200×1600 | COVER | jpg |
| Showcase — gambar utama | `media/brands/{slug}/showcase/title.png` | **bebas** (cth 1.37:1) | 5219×3799 | CONTAIN | png |
| Showcase varian — latar `{n}-2` | `media/brands/{slug}/showcase/` | **2.128:1** | 5010×2354 | COVER | jpg/png |
| Showcase varian — produk `{n}-1` | `media/brands/{slug}/showcase/` | **~3:4** | 2687×3660 | — | **PNG** |
| Bleaching Powder — title | `media/brands/concept-ultimax/lines/bleaching-powder/showcase/title.png` | **1.909:1** | 4661×2442 | CONTAIN | png |
| Bleaching Powder — featured | `media/brands/concept-ultimax/lines/bleaching-powder/showcase/1.png` | **2.204:1** | 5365×2434 | CONTAIN | png |
| Finest Toothpaste — hero layers | `media/brands/finest/lines/finest-toothpaste/hero/1.png`, `2.png` | **0.684:1 / 0.671:1** | 3026×4424 / 3176×4735 | CONTAIN | png |
| Finest Toothpaste — showcase title (maks. 768px) | `media/brands/finest/lines/finest-toothpaste/showcase/title.png` | **1.123:1** | 4376×3898 | CONTAIN | png |
| Finest Toothpaste — showcase products | `media/brands/finest/lines/finest-toothpaste/showcase/1-1.png`, `2-1.png` | **1.199:1 / 1.191:1** | 5065×4223 / 4416×3708 | CONTAIN | png |
| Finest Toothpaste — showcase backgrounds | `media/brands/finest/lines/finest-toothpaste/showcase/1-2.png`, `2-2.png` | **2.128:1** | 4810×2260 / 4810×2261 | COVER | png |
| Make It Extrait d’Intense — wordmark | `media/brands/make-it/lines/makeit-extrait-dintense/hero/wordmark.png` | **3.356:1** | 1121×334 | CONTAIN | png |
| Make It Extrait d’Intense — hero product | `media/brands/make-it/lines/makeit-extrait-dintense/hero/1.png` | **0.729:1** | 3779×5181 | CONTAIN | png |
| Make It Extrait d’Intense — showcase title | `media/brands/make-it/lines/makeit-extrait-dintense/showcase/title.png` | **0.956:1** | 4803×5026 | CONTAIN | png |
| Make It Fragrance Enhancing Primer — wordmark | `media/brands/make-it/lines/makeit-fragrance-enhancing-primer/hero/wordmark.png` | **3.356:1** | 1121×334 | CONTAIN | png |
| Make It Fragrance Enhancing Primer — hero product | `media/brands/make-it/lines/makeit-fragrance-enhancing-primer/hero/1.png` | **0.820:1** | 4396×5360 | CONTAIN | png |
| Make It Fragrance Enhancing Primer — showcase title | `media/brands/make-it/lines/makeit-fragrance-enhancing-primer/showcase/title.png` | **0.944:1** | 4744×5026 | CONTAIN | png |
| Make It Extrait de Parfum — hero layers | `media/brands/make-it/lines/makeit-extrait-de-parfum/hero/1.png`, `2.png` | **0.696:1 / 0.735:1** | 3013×4330 / 3242×4411 | CONTAIN | png |
| Make It Extrait de Parfum — showcase title | `media/brands/make-it/lines/makeit-extrait-de-parfum/showcase/title.png` | **0.991:1** | 4867×4912 | CONTAIN | png |
| Make It Extrait de Parfum — showcase cards | `media/brands/make-it/lines/makeit-extrait-de-parfum/showcase/1.png`, `2.png`, `4.png`, `5.png` | **0.771:1** | 2302×2986 | CONTAIN | png |
| Make It Extrait de Parfum — featured | `media/brands/make-it/lines/makeit-extrait-de-parfum/showcase/3.png` | **1.586:1** | 4687×2956 | CONTAIN | png |
| 128 Bright & Radiance — hero wordmark & cluster | `media/brands/128/lines/bright-radiance/hero/wordmark.png`, `cluster.png` | **1.526:1 / 1.640:1** | 2160×1415 / 3493×2130 | CONTAIN | png |
| 128 Bright & Radiance — showcase title | `media/brands/128/lines/bright-radiance/showcase/title.png` | **1.280:1** | 4742×3703 | CONTAIN | png |
| 128 Bright & Radiance — showcase cards | `media/brands/128/lines/bright-radiance/showcase/1.png`–`4.png` | **0.771:1** | 2302×2986 / 2302×2987 | CONTAIN | png |
| 128 Ace Pro — hero wordmark & products | `media/brands/128/lines/ace-pro/hero/wordmark.png`, `1.png` | **1.526:1 / 0.679:1** | 2160×1415 / 2377×3502 | CONTAIN | png |
| 128 Ace Pro — showcase title | `media/brands/128/lines/ace-pro/showcase/title.png` | **1.314:1** | 4865×3703 | CONTAIN | png |
| 128 Ace Pro — showcase banners | `media/brands/128/lines/ace-pro/showcase/1.png`, `2.png` | **2.099:1** | 4687×2233 / 4687×2234 | COVER | png |
| 128 Advanced Age Repair — hero wordmark & product | `media/brands/128/lines/advanced-age-repair/hero/wordmark.png`, `1.png` | **1.526:1 / 0.652:1** | 2160×1415 / 2317×3552 | CONTAIN | png |
| 128 Advanced Age Repair — showcase title | `media/brands/128/lines/advanced-age-repair/showcase/title.png` | **1.255:1** | 4648×3703 | CONTAIN | png |
| 128 Intensive Barrier Care — hero wordmark & cluster | `media/brands/128/lines/intensive-barrier-care/hero/wordmark.png`, `1.png` | **1.526:1 / 0.645:1** | 2160×1415 / 2784×4313 | CONTAIN | png |
| 128 Intensive Barrier Care — showcase title | `media/brands/128/lines/intensive-barrier-care/showcase/title.png` | **1.255:1** | 4649×3703 | CONTAIN | png |
| 128 Intensive Barrier Care — featured & cards | `media/brands/128/lines/intensive-barrier-care/showcase/1.png`–`3.png` | **2.099:1 / 0.771:1** | 4687×2233 / 2302×2987 | CONTAIN | png |
| Rebonding System Super Gold — hero wordmark & product | `media/brands/rebonding-system/lines/super-gold/hero/wordmark.png`, `1.png` | **3.968:1 / 1.015:1** | 1123×283 / 2482×2446 | CONTAIN | png |
| Rebonding System Super Gold — showcase title | `media/brands/rebonding-system/lines/super-gold/showcase/title.png` | **1.690:1** | 5093×3013 | CONTAIN | png |
| Rebonding System Gold Edition — hero wordmark & product | `media/brands/rebonding-system/lines/gold-edition/hero/wordmark.png`, `1.png` | **3.968:1 / 1.044:1** | 1123×283 / 1921×1840 | CONTAIN | png |
| Rebonding System Gold Edition — showcase title | `media/brands/rebonding-system/lines/gold-edition/showcase/title.png` | **1.684:1** | 5101×3029 | CONTAIN | png |
| Rebonding System Anti Resistant — hero wordmark & product | `media/brands/rebonding-system/lines/anti-resistant/hero/wordmark.png`, `1.png` | **3.968:1 / 1.010:1** | 1123×283 / 2659×2632 | CONTAIN | png |
| Rebonding System Anti Resistant — showcase title | `media/brands/rebonding-system/lines/anti-resistant/showcase/title.png` | **1.703:1** | 5159×3029 | CONTAIN | png |
| Rebonding System Extremely Damaged — hero wordmark & product | `media/brands/rebonding-system/lines/extremely-damaged/hero/wordmark.png`, `1.png` | **3.968:1 / 1.045:1** | 1123×283 / 1921×1839 | CONTAIN | png |
| Rebonding System Extremely Damaged — showcase title | `media/brands/rebonding-system/lines/extremely-damaged/showcase/title.png` | **1.703:1** | 5177×3039 | CONTAIN | png |
| HydroPrisma Mild — hero cluster | `media/brands/hydroprisma/lines/mild/hero/1.png` | **0.809:1** | 2863×3538 | CONTAIN | png |
| HydroPrisma Mild — showcase title | `media/brands/hydroprisma/lines/mild/showcase/title.png` | **1.394:1** | 4192×3008 | CONTAIN | png |
| HydroPrisma Mild — cards & featured | `media/brands/hydroprisma/lines/mild/showcase/1.png`, `2.png`, `3.png` | **0.771:1 / 1.341:1** | 2302×2986 / 4687×3494 | CONTAIN | png |
| HydroPrisma Medium — hero wordmark & cluster | `media/brands/hydroprisma/lines/medium/hero/wordmark.png`, `1.png` | **4.822:1 / 0.838:1** | 1548×321 / 3541×4225 | CONTAIN | png |
| HydroPrisma Medium — showcase title | `media/brands/hydroprisma/lines/medium/showcase/title.png` | **1.156:1** | 4335×3749 | CONTAIN | png |
| HydroPrisma Medium — cards & featured | `media/brands/hydroprisma/lines/medium/showcase/1.png`, `2.png`, `3.png` | **0.771:1 / 1.341:1** | 2302×2986 / 4687×3494 | CONTAIN | png |
| HydroPrisma Strong — hero wordmark & cluster | `media/brands/hydroprisma/lines/strong/hero/wordmark.png`, `1.png` | **4.822:1 / 0.825:1** | 1548×321 / 3297×3994 | CONTAIN | png |
| HydroPrisma Strong — showcase title | `media/brands/hydroprisma/lines/strong/showcase/title.png` | **1.201:1** | 4171×3474 | CONTAIN | png |
| HydroPrisma Strong — cards & featured | `media/brands/hydroprisma/lines/strong/showcase/1.png`, `2.png`, `3.png` | **0.771:1 / 1.341:1** | 2302×2986 / 4687×3494 | CONTAIN | png |

\* Banner brand: **COVER & full screen di desktop MAUPUN HP**. Di HP (potret) sisi kiri-kanan terpotong banyak → taruh semua branding/subjek **benar-benar di tengah**. (`bannerBg` kini hanya warna latar saat loading.)

**Penamaan di dalam section:**

| Section | Pola | Contoh |
|---|---|---|
| `hero/` | urutan layer + `wordmark` | `1.png`, `2.png`, `3.png`, `wordmark.png`, `background.jpg` |
| `hero/` versi HP | `{n}-mobile` | `1-mobile.png` (swap layer 1 di HP) |
| `product-lineup/` | nama produk (slug) | `shampoo-aloe-melon-170ml.png`, `330ml.jpg` |
| `about/` | urutan | `1.png`, `2.png`, `3.png` |
| `showcase/` | `title` + `{n}-1`/`{n}-2` | `title.png`, `1-1.png`, `1-2.png`, `2-1.png` … |

**Showcase varian = parallax berlapis:** tiap banner terdiri 2 file → `{n}-2` (latar+teks) & `{n}-1` (produk PNG, masuk dari kiri/kanan ke tengah). n = urutan banner (1,2,3…).

**Advisor RX hero:** `1.png`–`3.png` = kanvas 1:1; `4.png` = serum 1491×2058. Keempatnya CONTAIN dengan posisi desktop/mobile tersendiri.

**Inoskin Young & Bright showcase:** rasio visual kartu **2304×2987**; `1.png`, `2.png`, dan `5.png` memakai COVER terarah untuk membuang margin transparan bawaan agar semua card rata dan gap konsisten.

**Make It:** gunakan rasio asli latar (`1-2`: **4810×2261**; `2-2`/`3-2`: **4810×2260**) dan tampilkan tanpa parallax latar supaya tulisan di tepi tidak terpotong di desktop maupun HP.

## 🖼️ Hero halaman (About · Investor · Governance · Contact · Careers)

Full screen, COVER, **2 aset per halaman**. Teks (judul + subjudul) ditaruh **HTML di atas foto**, jadi fotonya **jangan ada teks**.

```
DESKTOP 16:9                     HP 9:16
├──── 36% ────┤                  ┌─────────────┐
┌─────────────┬──────────┐       │   TEKS      │ ← ruang kosong ATAS
│             │          │       ├─────────────┤
│  TEKS di    │  SUBJEK  │       │   SUBJEK    │ ← subjek BAWAH/tengah
│  sini       │  (kanan) │       │             │
└─────────────┴──────────┘       └─────────────┘
  kosong/polos  mulai di 36%
```

**Hero About dipakai 2×:** `pages/about/hero/desktop.jpg` + `mobile.jpg` juga jadi latar **penutup homepage** ("Kami tak sekadar membuat produk") — COVER full-bleed, digelapkan ~85% dengan teks putih di tengah. Desktop tampil ±1440×700 (lebih lebar dari 16:9 → atas/bawah sedikit terpotong), HP ±390×800 (pakai `mobile.jpg`). Ganti foto About = ikut berganti di homepage.

- **Desktop:** subjek di **KANAN mulai ±36% dari kiri**. Sisakan **kiri 36% kosong/polos** untuk teks — kolom teksnya dipatok di situ, subjek yang lebih ke kiri **akan ketimpa**.
- **HP:** subjek di **BAWAH/tengah**, sisakan **atas ±35% kosong/polos** untuk teks.
- **Wajib beri tahu developer:** foto ini **terang** atau **gelap**? Menentukan warna teks (hitam/putih) + warna navbar. Sebutkan juga **kode warna latar**-nya.

| Halaman | Latar | Terang/Gelap | Warna teks |
|---|---|:---:|:---:|
| About | `#AEC0CD` studio putih | terang | hitam |
| Investor | `#0F4930` hijau | gelap | putih |
| Governance | `#880E17` merah | gelap | putih |
| Contact | `#E5B91A` kuning | terang | hitam |
| Careers | `#0C426A` biru | gelap | putih |

## 📐 Rasio per viewport (Desktop vs HP)

| Aset | Desktop | HP |
|---|:---:|:---:|
| Main banner beranda | 16:9 | 16:9 strip (center) |
| **Hero halaman** | **16:9** | **9:16** (aset mobile terpisah) ✅ sudah ada |
| **Banner brand (hero)** | **16:9** | **9:16** (aset mobile terpisah) ⚠️ belum ada |
| **Sampul laporan** | **16:15** (kotak ±251×235) | **16:15** (kotak ±163×153) | sama |
| **Foto pengurus** | **5:7** (lebar 180–200 px) | **5:7** (lebar 112 px) | sama |
| Semua kartu (divisi, brand grid, produk, About, showcase) | sama seperti tabel atas | **sama** |

→ Hanya **hero halaman** & **banner brand** yang butuh aset HP terpisah (9:16). Sisanya 1 aset cukup.

## ⚡ Aturan kilat

```
COVER   → objek penting di TENGAH. Tepi ±15% bisa kepotong.
CONTAIN → latar POLOS 1 warna / PNG TRANSPARAN (biar menyatu).
```

- 📦 Kirim **1 file resolusi besar** (2× retina). Sistem auto-kecilkan untuk HP.
- 🖼️ Foto → `.jpg`/`.webp` · Transparan (produk/logo) → `.png`/`.webp`.
- 🪶 Kompres **< 300–500 KB** per banner.
- 🚫 **Jangan** stretch/gepeng. Jangan taruh objek mepet tepi.

## ⚠️ Aset yang masih kurang

- Aset **9:16** untuk banner brand di HP — belum ada satu pun.
- **Sampul laporan 2023–2025** hanya tersedia 589×533 (unduhan dari situs lama). Masih cukup untuk kotak 251px, tapi di bawah spesifikasi master 1200×1125 — minta file resolusi tinggi kalau ada. Sampul 2012–2022 sudah 1584×1486 / 1536×1441.
- **Sampul Laporan Keberlanjutan 2023 dan 2024 identik** — situs sumber memang memakai gambar yang sama untuk kedua tahun. Ganti kalau sampul 2024 yang sebenarnya tersedia.

## ✅ Checklist

- [ ] Rasio benar (tidak gepeng)
- [ ] Objek di safe-zone tengah (COVER)
- [ ] Latar polos/transparan (CONTAIN)
- [ ] Banner brand → kasih kode warna latar ke developer
- [ ] Format & kompresi oke (< 500 KB)
- [ ] Nama file **huruf kecil + tanda hubung**
- [ ] Taruh di folder **halaman → section** yang benar

---
*Foto produk = PNG transparan 1:1. Banner brand = sebut warna latar. Sisanya jaga safe-zone tengah.*
