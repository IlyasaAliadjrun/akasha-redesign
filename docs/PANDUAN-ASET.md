# 📐 Panduan Aset Gambar — Website Akasha

> Panduan ukuran, rasio, dan format gambar untuk **tim desain**.
> Tujuannya: setiap gambar tampil **tajam, tidak gepeng, dan tidak terpotong** di HP maupun desktop.
>
> Catatan teknis: nama file & lokasinya sudah "disambungkan" di kode (`lib/brands.ts`).
> Tim desain cukup ikuti **rasio + resolusi + folder** di bawah; developer yang menautkan filenya.

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
| 4 | **Banner brand** (hero halaman brand) | `brand_banner/` | **16:9** | 2560×1440 | Desktop COVER · HP CONTAIN | jpg/png/webp |
| 5 | **Foto produk** (Explore the lineup) | `foto_sku/{BRAND}/` | **1:1** | 1200×1200 | CONTAIN | **PNG transparan** |
| 6 | **3 kartu "About"** | `foto_about/{Brand}/` | **3:4** | 1200×1600 | COVER | jpg/webp |
| 7 | **Showcase – gambar utama** | `foto_judul_3d/{Brand}/` | **1:1** | 1500×1500 | CONTAIN | png/webp |
| 8 | **Showcase – banner varian** | `foto_varian_3d/{Brand}/` | **2:1** | 2000×1000 | COVER | jpg/png/webp |

> Folder `marquee` berjalan di beranda **memakai ulang** gambar Kartu Divisi (#2) — tidak perlu aset baru.

---

## 3. Detail per Aset

### 🏠 BERANDA (Homepage)

#### 1) Banner Slider Utama — `public/main_banner/`
- **Rasio:** 16:9 — **Resolusi:** 2560×1440 (minimum 1920×1080)
- **Tampilan:** COVER. Desktop = layar penuh. HP = pita lebar (1/3 tinggi layar).
- **Panduan komposisi:**
  - Objek (model + produk + logo) taruh di **tengah ke kanan**, **jangan menempel tepi**.
  - **Latar belakang dibuat polos/satu warna** di area pinggir — supaya menyatu dengan warna section.
  - Di HP terpotong sedikit **kiri–kanan**; di layar lebar bisa terpotong sedikit **atas–bawah**.
- Contoh file saat ini: `main banner NPL.jpg`, `main banner HE.jpg`.

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
- **Rasio:** 16:9 — **Resolusi:** 2560×1440 (min 1920×1080)
- **Tampilan:** **Desktop = COVER** (layar penuh) · **HP = CONTAIN** (tampil utuh, 1/3 tinggi layar).
- **Penting:** karena di HP CONTAIN, **seluruh banner terlihat** dan sisa ruang diisi warna.
  → **Latar tepi banner harus 1 warna solid**, lalu beri tahu developer warnanya (di-set sebagai `bannerBg`).
- **Komposisi:** semua branding & subjek di **tengah**, beri margin dari tepi.
- Contoh file: `banner_hair_energy.png` (latar oranye solid `#F46C22`).

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
- **Rasio:** 1:1 (persegi) — **Resolusi:** 1500×1500
- **Tampilan:** CONTAIN (tampil utuh). Boleh transparan atau latar solid.
- Contoh: `foto_judul_3d/Hair Energy/Asset HE-01.png`.

#### 8) Showcase — Banner Varian Produk — `public/foto_varian_3d/{Brand}/`
- **Rasio:** 2:1 (lebar) — **Resolusi:** 2000×1000
- **Tampilan:** COVER, banner ditumpuk bertingkat. Objek/teks **jangan mepet tepi atas–bawah**.
- Contoh: `foto_varian_3d/Hair Energy/Asset HE-02.png` (3 file: HE-02, HE-03, HE-04).
- Catatan: **tidak semua brand wajib punya** aset varian ini — opsional.

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
- `object-contain` dipakai di: banner brand (mobile), foto produk lineup, showcase gambar utama. Sisanya `object-cover`.
- Untuk banner brand baru: isi `heroImage` + `bannerBg` (warna tepi banner) agar mode CONTAIN di mobile menyatu mulus.
