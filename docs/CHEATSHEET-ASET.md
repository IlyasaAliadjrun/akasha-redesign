# 🎯 Cheat Sheet Aset — Akasha (1 Halaman)

> Versi ringkas. Detail lengkap: [PANDUAN-ASET.md](./PANDUAN-ASET.md)

> ⚙️ **Lebar section seragam ±980px** (area gambar ±900px desktop) — kecuali main banner & banner brand yang full-bleed. Rasio kartu **sama** di desktop & HP; hanya **banner** yang beda per viewport (lihat bawah).

## 📁 Struktur folder: **per halaman → per section**

```
public/
├── home/                        ← Beranda
│   ├── hero-carousel/           banner slider utama
│   ├── division-cards/          kartu divisi
│   └── brand-grid/              grid "Ten brands. One family."
├── brand/{brand-slug}/          ← Halaman brand (1 folder per brand)
│   ├── hero/                    banner hero (berlapis/parallax)
│   ├── product-lineup/          foto SKU
│   ├── about/                   3 kartu About
│   ├── showcase/                poster 3D + banner varian
│   └── {sub-brand}/             ← Halaman sub-brand (product line), cth creambath/
│       ├── hero/                banner sub-brand (berlapis/parallax)
│       └── showcase/            gambar title + gambar tiap kartu varian
│                                (gambar kartu SUDAH termasuk background & border)
├── about/ investor/ governance/ contact/ careers/   ← Halaman lain
│   └── hero/                    desktop.jpg + mobile.jpg
└── shared/                      logo navbar (dipakai semua halaman)
```

**Aturan nama file:** semua **huruf kecil + tanda hubung** (slug). `BARBER-DAILY.jpg` → `barber-daily.jpg`.
Nama brand di folder pakai slug juga: `hair-energy/`, `nestle-pure-life/`.

## 📋 Ukuran semua aset

| Aset | Folder | Rasio | Resolusi | Fit | Format |
|---|---|:---:|:---:|:---:|:---:|
| Banner slider beranda | `home/hero-carousel/` | **16:9** | 2560×1440 | COVER | jpg |
| Kartu divisi beranda | `home/division-cards/` | **3:4** | 1200×1600 | COVER | jpg |
| Grid brand — tile besar | `home/brand-grid/` | **2:1** | 1600×800 | COVER | jpg |
| Grid brand — tile kecil | `home/brand-grid/` | **1:1** | 1080×1080 | COVER | jpg |
| Banner brand (hero) | `brand/{slug}/hero/` | **16:9** | 2560×1440 | COVER* | jpg/png |
| **Hero halaman — desktop** | `{page}/hero/desktop.jpg` | **16:9** | 2560×1440 | COVER | jpg |
| **Hero halaman — HP** | `{page}/hero/mobile.jpg` | **9:16** | 1080×1920 | COVER | jpg |
| Foto produk (lineup) | `brand/{slug}/product-lineup/` | **1:1** | 1200×1200 | CONTAIN | **PNG** |
| 3 kartu "About" | `brand/{slug}/about/` | **3:4** | 1200×1600 | COVER | jpg |
| Showcase — gambar utama | `brand/{slug}/showcase/title.png` | **bebas** (cth 1.37:1) | 5219×3799 | CONTAIN | png |
| Showcase varian — latar `{n}-2` | `brand/{slug}/showcase/` | **2.128:1** | 5010×2354 | COVER | jpg/png |
| Showcase varian — produk `{n}-1` | `brand/{slug}/showcase/` | **~3:4** | 2687×3660 | — | **PNG** |
| Bleaching Powder — title | `brand/concept-ultimax/bleaching-powder/showcase/title.png` | **1.909:1** | 4661×2442 | CONTAIN | png |
| Bleaching Powder — featured | `brand/concept-ultimax/bleaching-powder/showcase/1.png` | **2.204:1** | 5365×2434 | CONTAIN | png |
| Finest Toothpaste — hero layers | `brand/finest/finest-toothpaste/hero/1.png`, `2.png` | **0.684:1 / 0.671:1** | 3026×4424 / 3176×4735 | CONTAIN | png |
| Finest Toothpaste — showcase title (maks. 768px) | `brand/finest/finest-toothpaste/showcase/title.png` | **1.123:1** | 4376×3898 | CONTAIN | png |
| Finest Toothpaste — showcase products | `brand/finest/finest-toothpaste/showcase/1-1.png`, `2-1.png` | **1.199:1 / 1.191:1** | 5065×4223 / 4416×3708 | CONTAIN | png |
| Finest Toothpaste — showcase backgrounds | `brand/finest/finest-toothpaste/showcase/1-2.png`, `2-2.png` | **2.128:1** | 4810×2260 / 4810×2261 | COVER | png |
| Make It Extrait d’Intense — wordmark | `brand/makeit/makeit-extrait-dintense/hero/wordmark.png` | **3.356:1** | 1121×334 | CONTAIN | png |
| Make It Extrait d’Intense — hero product | `brand/makeit/makeit-extrait-dintense/hero/1.png` | **0.729:1** | 3779×5181 | CONTAIN | png |
| Make It Extrait d’Intense — showcase title | `brand/makeit/makeit-extrait-dintense/showcase/title.png` | **0.956:1** | 4803×5026 | CONTAIN | png |
| Make It Fragrance Enhancing Primer — wordmark | `brand/makeit/makeit-fragrance-enhancing-primer/hero/wordmark.png` | **3.356:1** | 1121×334 | CONTAIN | png |
| Make It Fragrance Enhancing Primer — hero product | `brand/makeit/makeit-fragrance-enhancing-primer/hero/1.png` | **0.820:1** | 4396×5360 | CONTAIN | png |
| Make It Fragrance Enhancing Primer — showcase title | `brand/makeit/makeit-fragrance-enhancing-primer/showcase/title.png` | **0.944:1** | 4744×5026 | CONTAIN | png |
| Make It Extrait de Parfum — hero layers | `brand/makeit/makeit-extrait-de-parfum/hero/1.png`, `2.png` | **0.696:1 / 0.735:1** | 3013×4330 / 3242×4411 | CONTAIN | png |
| Make It Extrait de Parfum — showcase title | `brand/makeit/makeit-extrait-de-parfum/showcase/title.png` | **0.991:1** | 4867×4912 | CONTAIN | png |
| Make It Extrait de Parfum — showcase cards | `brand/makeit/makeit-extrait-de-parfum/showcase/1.png`, `2.png`, `4.png`, `5.png` | **0.771:1** | 2302×2986 | CONTAIN | png |
| Make It Extrait de Parfum — featured | `brand/makeit/makeit-extrait-de-parfum/showcase/3.png` | **1.586:1** | 4687×2956 | CONTAIN | png |
| 128 Bright & Radiance — hero wordmark & cluster | `brand/128/bright-radiance/hero/wordmark.png`, `cluster.png` | **1.526:1 / 1.640:1** | 2160×1415 / 3493×2130 | CONTAIN | png |
| 128 Bright & Radiance — showcase title | `brand/128/bright-radiance/showcase/title.png` | **1.280:1** | 4742×3703 | CONTAIN | png |
| 128 Bright & Radiance — showcase cards | `brand/128/bright-radiance/showcase/1.png`–`4.png` | **0.771:1** | 2302×2986 / 2302×2987 | CONTAIN | png |
| 128 Ace Pro — hero wordmark & products | `brand/128/ace-pro/hero/wordmark.png`, `1.png` | **1.526:1 / 0.679:1** | 2160×1415 / 2377×3502 | CONTAIN | png |
| 128 Ace Pro — showcase title | `brand/128/ace-pro/showcase/title.png` | **1.314:1** | 4865×3703 | CONTAIN | png |
| 128 Ace Pro — showcase banners | `brand/128/ace-pro/showcase/1.png`, `2.png` | **2.099:1** | 4687×2233 / 4687×2234 | COVER | png |
| 128 Advanced Age Repair — hero wordmark & product | `brand/128/advanced-age-repair/hero/wordmark.png`, `1.png` | **1.526:1 / 0.652:1** | 2160×1415 / 2317×3552 | CONTAIN | png |
| 128 Advanced Age Repair — showcase title | `brand/128/advanced-age-repair/showcase/title.png` | **1.255:1** | 4648×3703 | CONTAIN | png |
| 128 Intensive Barrier Care — hero wordmark & cluster | `brand/128/intensive-barrier-care/hero/wordmark.png`, `1.png` | **1.526:1 / 0.645:1** | 2160×1415 / 2784×4313 | CONTAIN | png |
| 128 Intensive Barrier Care — showcase title | `brand/128/intensive-barrier-care/showcase/title.png` | **1.255:1** | 4649×3703 | CONTAIN | png |
| 128 Intensive Barrier Care — featured & cards | `brand/128/intensive-barrier-care/showcase/1.png`–`3.png` | **2.099:1 / 0.771:1** | 4687×2233 / 2302×2987 | CONTAIN | png |
| Rebonding System Super Gold — hero wordmark & product | `brand/rebonding-system/super-gold/hero/wordmark.png`, `1.png` | **3.968:1 / 1.015:1** | 1123×283 / 2482×2446 | CONTAIN | png |
| Rebonding System Super Gold — showcase title | `brand/rebonding-system/super-gold/showcase/title.png` | **1.690:1** | 5093×3013 | CONTAIN | png |
| Rebonding System Gold Edition — hero wordmark & product | `brand/rebonding-system/gold-edition/hero/wordmark.png`, `1.png` | **3.968:1 / 1.044:1** | 1123×283 / 1921×1840 | CONTAIN | png |
| Rebonding System Gold Edition — showcase title | `brand/rebonding-system/gold-edition/showcase/title.png` | **1.684:1** | 5101×3029 | CONTAIN | png |
| Rebonding System Anti Resistant — hero wordmark & product | `brand/rebonding-system/anti-resistant/hero/wordmark.png`, `1.png` | **3.968:1 / 1.010:1** | 1123×283 / 2659×2632 | CONTAIN | png |
| Rebonding System Anti Resistant — showcase title | `brand/rebonding-system/anti-resistant/showcase/title.png` | **1.703:1** | 5159×3029 | CONTAIN | png |
| Rebonding System Extremely Damaged — hero wordmark & product | `brand/rebonding-system/extremely-damaged/hero/wordmark.png`, `1.png` | **3.968:1 / 1.045:1** | 1123×283 / 1921×1839 | CONTAIN | png |
| Rebonding System Extremely Damaged — showcase title | `brand/rebonding-system/extremely-damaged/showcase/title.png` | **1.703:1** | 5177×3039 | CONTAIN | png |

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

- `home/division-cards/mens.jpg` (3:4) — divisi Men's Care belum punya kartu sendiri, sekarang meminjam banner 16:9 `home/hero-carousel/barber-daily.jpg` (rasio tidak pas).
- Aset **9:16** untuk banner brand di HP — belum ada satu pun.

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
