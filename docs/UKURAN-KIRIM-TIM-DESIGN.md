# 📦 Daftar Ukuran Kirim — Halaman Brand & Sub-Brand

> **Untuk tim desain.** Satu angka per aset. Tidak ada rentang, tidak ada pilihan.
> Semua ukuran sudah dihitung agar **tajam di layar Retina HP (DPR 3) maupun monitor 4K (DPR 2)**.
>
> Rasio & komposisi: [RASIO-ASET-BRAND-PAGE.md](./RASIO-ASET-BRAND-PAGE.md)

---

## 🧮 Cara angka ini didapat

```
ukuran kirim = MAKS( lebar tampil desktop × 2 , lebar tampil HP × 3 ) + margin aman
```

Yang menentukan sering kali **HP, bukan desktop** — karena layar HP modern punya kerapatan 3× sementara desktop hanya 2×.

> Kirim **satu file besar** saja. Sistem otomatis membuat versi kecil untuk tiap ukuran layar — tim desain **tidak perlu** bikin versi HP terpisah (kecuali crop hero, lihat § 1).
>
> ⚠️ Sistem **tidak pernah memperbesar** gambar. Kirim kekecilan = buram permanen, tidak bisa diperbaiki dari kode.

---

# BAGIAN 1 — HALAMAN BRAND

## § 1. Hero — `brand/{slug}/hero/`

| File | Rasio | **KIRIM** | Format | Maks |
|---|:---:|:---:|:---:|:---:|
| `background.jpg` — latar full-screen | 16:9 | **3840 × 2160** | JPG q75 | 500 KB |
| `1.png` — kanvas produk penuh (NPL, VICA) | 16:9 | **3840 × 2160** | PNG-24 | 1,2 MB |
| `1.png` `2.png` `3.png` — layer produk (Hair Energy) | 3:4 | **1800 × 2400** | PNG-24 | 500 KB |
| `1-mobile.png` — crop produk untuk HP | 3:4 | **1200 × 1600** | PNG-24 | 400 KB |

### Wordmark — beda per brand (ikut bentuk logo)

| Brand | Rasio sekarang | **KIRIM** | Maks |
|---|:---:|:---:|:---:|
| Hair Energy | 1,45 : 1 | **900 × 620** | 150 KB |
| Nestlé Pure Life | 4,82 : 1 | **1700 × 353** | 150 KB |
| VICA | 0,92 : 1 | **1100 × 1190** | 150 KB |

> Wordmark **di-crop rapat** ke tepi huruf (+ drop shadow bila ada). Padding transparan membuat logonya mengecil di layar.

**Rumus kalau nanti ukuran logo di web diubah:** `lebar kirim = angka vw × 50`

---

## § 2. Product Lineup — `brand/{slug}/product-lineup/`

| Rasio | **KIRIM** | Format | Maks |
|:---:|:---:|:---:|:---:|
| **1 : 1** | **1200 × 1200** | PNG-24 transparan | 250 KB |

- Kanvas **1200×1200 persegi untuk SEMUA SKU**, tanpa kecuali
- Botol tertinggi ≈ **1050 px** (88% tinggi kanvas)
- Margin transparan atas & bawah rata

> 🔺 **Naik dari perhitungan awal (800×800).** Penyebabnya HP: kartu produk selebar 80vw × kerapatan 3× = butuh 1032 px. Angka 800 akan terlihat buram di HP. **1200×1200** aman di semua perangkat.

---

## § 3. About — `brand/{slug}/about/`

| Rasio | **KIRIM** | Format | Maks |
|:---:|:---:|:---:|:---:|
| **3 : 4** | **900 × 1200** | JPG q75 | 200 KB |

Ketiga file **wajib 900 × 1200 persis**. Sisakan bagian bawah 30% bebas subjek penting (ada gradasi + judul di situ).

---

## § 4. Showcase — `brand/{slug}/showcase/`

| File | Rasio | **KIRIM** | Format | Maks |
|---|:---:|:---:|:---:|:---:|
| `title.png` — poster | 3:2 | **1800 × 1200** | PNG-24 | 500 KB |
| `{n}-2.png` — latar banner | 2,4:1 | **2160 × 900** | PNG-24 / JPG | 350 KB |
| `{n}-1.png` — produk | bebas | **tinggi 1200 px** | PNG-24 | 350 KB |

### Produk `{n}-1` — patokannya **TINGGI**, bukan lebar

Lebar mengikuti bentuk botol. Kirim setinggi **1200 px**, crop rapat (margin transparan ≤ 2%):

| Brand | File | **KIRIM** |
|---|---|:---:|
| Hair Energy | `1-1` `2-1` `3-1` | **881 × 1200** |
| Hair Energy | `4-1` | **851 × 1200** |
| Nestlé Pure Life | `1-1` … `4-1` | **1077 × 1200** |
| VICA | `1-1` | **770 × 1200** |
| VICA | `2-1` | **790 × 1200** |
| VICA | `3-1` | **1126 × 1200** |
| VICA | `4-1` | **1047 × 1200** |
| VICA | `5-1` | **1019 × 1200** |

> Angka di atas mempertahankan bentuk botol yang sudah ada. Kalau botolnya di-crop ulang, cukup kirim **tinggi 1200 px** dan laporkan lebarnya.

### Latar banner `{n}-2` — safe zone

Kanvas **2160 × 900**, tapi yang selalu terlihat hanya **2160 × 864 bagian tengah**.

```
┌────────────────────────────────────────┐
│░░░░░░░ 18 px — bisa terpotong ░░░░░░░░░│
├────────────────────────────────────────┤
│                                        │
│  TEKS & ARTWORK — 2160 × 864           │  ← aman
│  (satu sisi dikosongkan untuk botol)   │
│                                        │
├────────────────────────────────────────┤
│░░░░░░░ 18 px — bisa terpotong ░░░░░░░░░│
└────────────────────────────────────────┘
```

---

## § 5. CrossSell — gambar brand di bagian bawah

| Rasio | **KIRIM** | Format | Maks |
|:---:|:---:|:---:|:---:|
| **3 : 4** | **900 × 1200** | JPG q75 | 200 KB |

---

# BAGIAN 2 — HALAMAN SUB-BRAND

`brand/{slug}/{line}/` — contoh: Creambath, Shampoo, Scentsations, Vitaglitz.

## § 6. Hero sub-brand — `{line}/hero/`

| File | Rasio | **KIRIM** | Format | Maks |
|---|:---:|:---:|:---:|:---:|
| `wordmark.png` | 1,45:1 | **480 × 331** | PNG-24 | 80 KB |
| `1.png` `2.png` — produk | bebas | **900 px sisi terpanjang** | PNG-24 | 350 KB |

Produk di-crop rapat; laporkan `lebar × tinggi` tiap file.

## § 7. Showcase sub-brand — `{line}/showcase/`

| Aset | Rasio | **KIRIM** | Format | Maks |
|---|:---:|:---:|:---:|:---:|
| Title | 3:2 | **1200 × 800** | PNG-24 | 300 KB |
| Featured (banner lebar) | 12:5 | **1440 × 600** | PNG-24 / JPG | 350 KB |
| Kartu grid (2 kolom) | 4:5 | **800 × 1000** | PNG-24 / JPG | 200 KB |

Semua kartu grid **wajib 800 × 1000 persis** — kartunya berdampingan, ukuran yang beda langsung terlihat.

---

# 📋 TABEL KIRIM — SATU HALAMAN

| # | Aset | Rasio | **KIRIM** | Format |
|:--:|---|:---:|:---:|:---:|
| 1 | Hero — latar | 16:9 | **3840 × 2160** | JPG |
| 2 | Hero — kanvas produk penuh | 16:9 | **3840 × 2160** | PNG |
| 3 | Hero — layer produk | 3:4 | **1800 × 2400** | PNG |
| 4 | Hero — crop produk HP | 3:4 | **1200 × 1600** | PNG |
| 5 | Hero — wordmark HE | 1,45:1 | **900 × 620** | PNG |
| 6 | Hero — wordmark NPL | 4,82:1 | **1700 × 353** | PNG |
| 7 | Hero — wordmark VICA | 0,92:1 | **1100 × 1190** | PNG |
| 8 | Lineup — foto SKU | 1:1 | **1200 × 1200** | PNG |
| 9 | About — 3 kartu | 3:4 | **900 × 1200** | JPG |
| 10 | Showcase — poster title | 3:2 | **1800 × 1200** | PNG |
| 11 | Showcase — latar banner | 2,4:1 | **2160 × 900** | PNG/JPG |
| 12 | Showcase — produk | bebas | **tinggi 1200** | PNG |
| 13 | CrossSell — kartu brand | 3:4 | **900 × 1200** | JPG |
| 14 | Sub-brand — wordmark | 1,45:1 | **480 × 331** | PNG |
| 15 | Sub-brand — produk hero | bebas | **900 px** sisi panjang | PNG |
| 16 | Sub-brand — title | 3:2 | **1200 × 800** | PNG |
| 17 | Sub-brand — featured | 12:5 | **1440 × 600** | PNG/JPG |
| 18 | Sub-brand — kartu grid | 4:5 | **800 × 1000** | PNG/JPG |

---

# ⚠️ Dua hal yang HARUS diperbaiki di kode

Aset sesempurna apa pun tetap akan tampil buram di dua tempat ini sampai kodenya dibetulkan. Ini **bukan** urusan tim desain — dicatat supaya tidak jadi salah paham saat aset baru sudah dikirim tapi hasilnya masih terlihat buram.

**1. Latar hero disajikan setengah resolusi** — [`BrandHero.tsx:89`](../components/brand/BrandHero.tsx#L89)
Kode memberitahu browser bahwa layer hero selebar `50vw`, padahal aslinya `100vw`. Akibatnya sistem memilih varian setengah ukuran. Kena ke **latar hero dan kanvas produk NPL & VICA**.

**2. Title showcase sub-brand disajikan 1,5× terlalu kecil** — [`SubBrandShowcase.tsx:68`](../components/subbrand/SubBrandShowcase.tsx#L68)
Kode menyebut `384px`, ukuran tampil sebenarnya `576px`.

---

# ✅ Checklist sebelum serah terima

- [ ] Ukuran **persis** sesuai kolom KIRIM — bukan mendekati
- [ ] Lineup: kanvas **1200×1200** untuk **semua** SKU dalam satu brand
- [ ] About: ketiga file **900×1200** identik
- [ ] Kartu grid sub-brand: semua **800×1000** identik
- [ ] Wordmark & produk showcase: **crop rapat**, margin transparan ≤ 2%
- [ ] Latar banner showcase: elemen penting di dalam **2160×864 tengah**
- [ ] Latar hero: gradasi/tekstur — di HP hanya **26% bagian tengah** yang terlihat
- [ ] Hero berkanvas landscape → sertakan **crop potret 1200×1600** untuk HP
- [ ] Semua aset ⬜ CONTAIN → kirim **daftar `lebar × tinggi`** ke developer
- [ ] Nama file huruf kecil + tanda hubung
- [ ] Ukuran file di bawah batas kolom "Maks"
