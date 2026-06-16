# 🎯 Cheat Sheet Aset — Akasha (1 Halaman)

> Versi ringkas. Detail lengkap: [PANDUAN-ASET.md](./PANDUAN-ASET.md)

## 📋 Ukuran semua aset

| Aset | Folder | Rasio | Resolusi | Fit | Format |
|---|---|:---:|:---:|:---:|:---:|
| Banner slider beranda | `main_banner/` | **16:9** | 2560×1440 | COVER | jpg |
| Kartu divisi beranda | `one_company_many_moments/` | **3:4** | 1200×1600 | COVER | jpg |
| Grid brand — tile besar | `ten_brands_one_company/` | **2:1** | 1600×800 | COVER | jpg |
| Grid brand — tile kecil | `ten_brands_one_company/` | **1:1** | 1080×1080 | COVER | jpg |
| Banner brand (hero) | `brand_banner/` | **16:9** | 2560×1440 | COVER/CONTAIN* | jpg/png |
| Foto produk (lineup) | `foto_sku/{BRAND}/` | **1:1** | 1200×1200 | CONTAIN | **PNG** |
| 3 kartu "About" | `foto_about/{Brand}/` | **3:4** | 1200×1600 | COVER | jpg |
| Showcase — gambar utama | `foto_judul_3d/{Brand}/` | **1:1** | 1500×1500 | CONTAIN | png |
| Showcase — banner varian | `foto_varian_3d/{Brand}/` | **2:1** | 2000×1000 | COVER | jpg/png |

\* Banner brand: **desktop = COVER**, **HP = CONTAIN** (latar wajib 1 warna solid).

## ⚡ Aturan kilat

```
COVER   → objek penting di TENGAH. Tepi ±15% bisa kepotong.
CONTAIN → latar POLOS 1 warna / PNG TRANSPARAN (biar menyatu).
```

- 📦 Kirim **1 file resolusi besar** (2× retina). Sistem auto-kecilkan untuk HP.
- 🖼️ Foto → `.jpg`/`.webp` · Transparan (produk/logo) → `.png`/`.webp`.
- 🪶 Kompres **< 300–500 KB** per banner.
- 🚫 **Jangan** stretch/gepeng. Jangan taruh objek mepet tepi.

## ✅ Checklist

- [ ] Rasio benar (tidak gepeng)
- [ ] Objek di safe-zone tengah (COVER)
- [ ] Latar polos/transparan (CONTAIN)
- [ ] Banner brand → kasih kode warna latar ke developer
- [ ] Format & kompresi oke (< 500 KB)
- [ ] Taruh di folder brand yang benar

---
*Foto produk = PNG transparan 1:1. Banner brand = sebut warna latar. Sisanya jaga safe-zone tengah.*
