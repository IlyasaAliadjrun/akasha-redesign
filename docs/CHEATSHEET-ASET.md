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
│   └── showcase/                poster 3D + banner varian
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
