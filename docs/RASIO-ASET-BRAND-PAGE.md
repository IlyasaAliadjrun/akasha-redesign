# 🎨 Panduan Rasio Aset — Brand Page & Sub-Brand Page

> **Untuk tim desain.** Fokus: **rasio, kanvas, dan safe zone**.
> Resolusi & ukuran file ada di [UKURAN-ASET-BRAND-PAGE.md](./UKURAN-ASET-BRAND-PAGE.md).

---

## 🔑 Tiga aturan yang menentukan segalanya

Setiap aset di halaman brand masuk ke salah satu dari tiga kategori. **Kenali kategorinya dulu**, baru tentukan kanvas.

### ⬛ A. COVER — rasio **TERKUNCI**

Gambar dipaksa memenuhi kotak, kelebihannya **dipotong otomatis**. Tidak bisa diperbaiki dari kode.

> Salah rasio → subjek terpotong. Selesai.

Yang termasuk: kartu **About**, kartu **CrossSell**, **latar hero**, **latar banner showcase**.

### ⬜ B. CONTAIN — rasio **BEBAS**, tapi **WAJIB dilaporkan**

Gambar dimuat utuh di dalam kotak, tidak pernah terpotong dan tidak pernah gepeng. Tapi rasionya **ditulis manual di kode** (`aspectRatio`, `bgAspect`, `productAspect`, `logoAspect`, `heroAspect`, `cardAspect`).

> Salah lapor → gambar tidak gepeng, tapi **ukurannya meleset dan posisinya bergeser**, dan seluruh tinggi section ikut salah.

Yang termasuk: **produk lineup**, **produk showcase**, **wordmark**, **poster title**, semua aset **sub-brand**.

📮 **Kirimkan rasio setiap file ke developer** dalam bentuk `lebar × tinggi` asli. Contoh: `2687 × 3660`.

### 🔗 C. SERAGAM dalam satu set

Beberapa aset ditampilkan berdampingan. Kalau rasionya beda-beda, tampilannya jadi tidak rata — dan developer terpaksa menambal satu per satu dengan angka manual.

> Wajib seragam: **3 kartu About**, **semua SKU dalam 1 lineup**, **semua layer produk dalam 1 hero**, **semua kartu grid sub-brand**.

---

# BAGIAN 1 — HALAMAN BRAND

## § 1. Hero

Hero setinggi **satu layar penuh** (`100svh`), dari tepi ke tepi.

| Aset | Kat. | **Rasio** | Catatan kanvas |
|---|:---:|:---:|---|
| Latar (`background.jpg`) | ⬛ COVER | **16:9** | Gradasi / tekstur polos. Jangan taruh objek penting. |
| Kanvas produk penuh (`1.png` NPL & VICA) | ⬜ CONTAIN | **16:9** | Satu kanvas transparan, produk sudah ditata di dalamnya |
| Layer produk terpisah (`1/2/3.png` Hair Energy) | ⬜ CONTAIN | **3:4** | 1 produk per file, **ketiganya rasio identik** |
| Crop produk HP (`{n}-mobile.png`) | ⬜ CONTAIN | **3:4** potret | Wajib ada kalau kanvas desktop landscape |
| Wordmark (`wordmark.png`) | ⬜ CONTAIN | **bebas** | Crop **rapat**, tanpa padding transparan |

### ⚠️ Safe zone latar hero — ini yang paling sering meleset

Latar 16:9 di-*cover* ke layar. Di HP potret, yang terlihat hanyalah **±26% bagian tengah** secara horizontal.

```
DESKTOP 16:9 (semua terlihat)      HP (hanya pita tengah yang terlihat)
┌──────────────────────────┐       ┌──────────────────────────┐
│                          │       │        ░░░░░░░░         │
│                          │       │        ░ 26% ░          │  ← hanya ini
│                          │       │        ░░░░░░░░         │
└──────────────────────────┘       └──────────────────────────┘
                                    ▲ terpotong        terpotong ▲
```

→ **Latar hero harus gradasi atau tekstur tanpa arah.** Kalau ada objek/pola yang harus terbaca, taruh benar-benar di tengah 26%.

### ⚠️ Kenapa crop mobile itu wajib

Kanvas produk landscape 16:9 di-*contain* ke layar HP potret akan menyusut mengikuti **lebar**, sehingga tingginya cuma ±27% layar — produknya jadi mungil.

→ Setiap hero dengan produk di kanvas landscape **wajib** disertai versi potret **3:4** yang di-crop rapat ke produknya.

### 📌 Wordmark — crop rapat, tanpa kecuali

Lebar wordmark dikunci sebagai persentase layar (`logoWidth`). Kalau kanvasnya punya padding transparan, **logonya yang mengecil**, bukan padding-nya yang hilang.

```
❌ SALAH                        ✅ BENAR
┌────────────────────┐         ┌──────────────┐
│                    │         │ VICA         │
│      VICA          │         └──────────────┘
│                    │          crop rapat ke tepi glyph
└────────────────────┘          (+ drop shadow kalau ada)
```

Rasio bebas — tapi **laporkan angkanya**. Rasio saat ini: Hair Energy `1,45:1` · NPL `4,82:1` · VICA `0,92:1`.

---

## § 2. Product Lineup

| Kat. | **Rasio** | Aturan |
|:---:|:---:|---|
| ⬜ CONTAIN | **1:1 (persegi) — WAJIB, semua SKU** | Botol tertinggi ≈ **88%** tinggi kanvas · margin transparan atas/bawah rata |

Panggung produknya persegi. Kalau setiap SKU dikirim dengan kanvas berbeda, ukuran tampilnya jadi acak.

```
❌ SEKARANG (VICA)                    ✅ TARGET
220mL  330mL  600mL 1010mL 1500mL     220  330  600  1010 1500
┌──┐   ┌─┐    ┌─┐   ┌───┐  ┌──┐       ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐
│  │   │ │    │ │   │   │  │  │       │▁ │ │▂ │ │▄ │ │▆ │ │█ │
│  │   │ │    │ │   └───┘  │  │       └──┘ └──┘ └──┘ └──┘ └──┘
└──┘   └─┘    └─┘          └──┘       kanvas 1:1 identik,
0,38   0,27   0,33  0,38   0,27       botol proporsional di dalamnya
rasio beda-beda → ukuran tampil acak
```

> 💡 Karena kanvasnya tidak seragam, developer sekarang menambal dengan `imageScale: 0.7 / 0.8 / 0.9`. Begitu semua kanvas jadi 1:1, tambalan itu dihapus dan ukuran botol jadi otomatis benar.

**Perbandingan tinggi antar-SKU dikerjakan di dalam kanvas** — 220 mL memang harus terlihat lebih pendek dari 1500 mL, tapi **di kanvas 1:1 yang sama**.

Rasio 1:1 sudah benar di: Hair Energy (22 SKU) ✅ · Nestlé Pure Life (4 SKU) ✅
Perlu diperbaiki: **VICA (5 SKU)** ❌

---

## § 3. About — 3 kartu

| Kat. | **Rasio** | Aturan |
|:---:|:---:|---|
| ⬛ COVER | **3:4 potret — TERKUNCI** | Ketiga file **wajib rasio persis sama** |

Slot kartunya dikunci 3:4 di desktop maupun HP. Selisih sedikit saja langsung terlihat karena ketiganya berdampingan.

```
┌───────┐ ┌───────┐ ┌───────┐
│       │ │       │ │       │
│  3:4  │ │  3:4  │ │  3:4  │  ← desktop: 3 kolom sejajar
│       │ │       │ │       │     HP: slider geser
│▁judul▁│ │▁judul▁│ │▁judul▁│  ← judul HTML di atas foto
└───────┘ └───────┘ └───────┘
```

**Safe zone:** ada gradasi gelap di **30% bagian bawah** untuk menaruh judul. Jangan taruh subjek penting di area itu. Ada juga hover zoom 5% → sisakan **5% margin di semua tepi**.

Status: Hair Energy `0,750` ✅ · VICA `0,750` ✅ · **NPL `0,742 / 0,742 / 0,745`** ⚠️ ketiganya meleset dari 3:4 *dan* saling berbeda.

---

## § 4. Showcase

### 4a. Poster title

| Kat. | **Rasio** | Aturan |
|:---:|:---:|---|
| ⬜ CONTAIN | **bebas — disarankan 3:2 landscape** | Rentang aman **4:3 … 2:1** |

Lebarnya dikunci 768 px, jadi **rasio menentukan tinggi section**. Kanvas yang terlalu potret membuat poster mendominasi halaman dan mendorong banner varian jauh ke bawah.

Saat ini: Hair Energy `1,37:1` · NPL `1,64:1` · VICA `1,64:1` — ketiganya masih di rentang aman.

### 4b. Latar banner varian (`{n}-2`)

| Kat. | **Rasio** | Aturan |
|:---:|:---:|---|
| ⬛ COVER | **2,4:1** (mis. 1800 × 750) | Semua elemen penting di dalam **5:2 bagian tengah** |

Jendela yang terlihat selalu **5:2 (2,5:1)**. Kelebihan tinggi 4% di atas & bawah adalah **bleed** untuk gerakan parallax.

```
┌────────────────────────────────────────────┐ ← kanvas 2,4:1
│ ░░░░░░░░░░░░ bleed 4% (bisa terpotong) ░░░ │
├────────────────────────────────────────────┤
│                                            │
│   TEKS & ARTWORK — semua di sini (5:2)     │  ← selalu terlihat
│                                            │
├────────────────────────────────────────────┤
│ ░░░░░░░░░░░░ bleed 4% (bisa terpotong) ░░░ │
└────────────────────────────────────────────┘
        ▲ sisi kiri/kanan TIDAK pernah terpotong
```

**Komposisi:** satu sisi untuk teks besar, sisi lain **dikosongkan** — botol produk ditempel di situ dari file terpisah.

Saat ini: Hair Energy `2,13:1` (kehilangan 7% atas+bawah) · NPL `2,26:1` · VICA `2,32:1`. Semua **lebih potret** dari jendelanya, jadi ada pemotongan yang tidak disengaja.

### 4c. Produk di atas banner (`{n}-1`)

| Kat. | **Rasio** | Aturan |
|:---:|:---:|---|
| ⬜ CONTAIN | **bebas — ikuti bentuk botol** | **Crop rapat: margin transparan 0–2% di semua sisi** |

Ini aturan terpenting di section ini. Produk diposisikan berdasarkan **tinggi kanvas**, bukan tinggi botol. Setiap milimeter ruang transparan membuat botol melayang atau tenggelam.

```
❌ margin transparan besar          ✅ crop rapat
┌──────────────┐                    ┌────────┐
│              │                    │  ╔══╗  │
│    ╔══╗      │                    │  ║  ║  │
│    ║  ║      │                    │  ║  ║  │
│    ╚══╝      │                    │  ╚══╝  │
│              │ ← dasar botol      └────────┘ ← dasar botol
└──────────────┘   tidak di dasar               = dasar kanvas
                   kanvas
```

> 💡 Properti `productBottomOffset` dan `productShiftX` di kode ada **hanya** untuk menambal margin transparan yang tidak konsisten. Crop rapat = tambalan itu tidak diperlukan.

Boleh berbeda-beda antar SKU (memang bentuk botolnya beda) — **asalkan setiap rasio dilaporkan**.

---

## § 5. CrossSell

| Kat. | **Rasio** | Aturan |
|:---:|:---:|---|
| ⬛ COVER | **3:4 potret** | Subjek di tengah — di desktop kartunya sedikit lebih ramping (±0,68) |

---

# BAGIAN 2 — HALAMAN SUB-BRAND

Contoh: Hair Energy → Creambath · Shampoo · Scentsations · Vitaglitz.

## § 6. Hero sub-brand

| Aset | Kat. | **Rasio** | Aturan |
|---|:---:|:---:|---|
| Wordmark | ⬜ CONTAIN | **bebas** (sekarang `1,45:1`) | Crop rapat |
| Produk (2 layer) | ⬜ CONTAIN | **bebas** | **Kedua layer sebaiknya satu rasio kanvas** |

⚠️ Saat ini rasio kedua layer berbeda-beda di tiap sub-brand (`0,56` sampai `0,91`), sehingga posisi tiap produk harus disetel manual satu per satu — di desktop **dan** di HP. Kalau kedua produk dikirim di **kanvas dengan rasio sama**, penataannya jadi konsisten dan bisa dipakai ulang antar sub-brand.

## § 7. Showcase sub-brand

| Aset | Kat. | **Rasio** | Aturan |
|---|:---:|:---:|---|
| Title | ⬜ CONTAIN | **bebas** (default kode **3:2**) | Sekarang `1,27:1`; shampoo `1,16:1` — **samakan** |
| Featured (banner lebar) | ⬜ CONTAIN | **12:5 (2,4:1)** | Sekarang `2,09:1` |
| Kartu grid 2 kolom | ⬜ CONTAIN | **4:5 potret** | **Semua kartu wajib rasio identik** |

Kartu grid sudah membawa background + border sendiri di dalam gambarnya, jadi **tidak ada frame** dari kode — rasio kartu = rasio gambar. Kartu yang rasionya beda akan terlihat besar-kecil tidak rata.

✅ Kabar baik: kartu grid saat ini **sudah konsisten `0,771`** di keempat sub-brand. Cukup dinaikkan ke `4:5` bersamaan, atau dibiarkan apa adanya — yang penting seragam.

---

# 📋 Ringkasan rasio — satu tabel

| Section | Aset | Kat. | **Rasio** |
|---|---|:---:|:---:|
| Hero | latar | ⬛ | **16:9** |
| Hero | kanvas produk penuh | ⬜ | **16:9** |
| Hero | layer produk terpisah | ⬜ | **3:4** (seragam antar layer) |
| Hero | crop produk HP | ⬜ | **3:4** potret |
| Hero | wordmark | ⬜ | bebas · crop rapat |
| Lineup | foto SKU | ⬜ | **1:1** — wajib, semua SKU |
| About | 3 kartu | ⬛ | **3:4** — wajib, ketiganya sama |
| Showcase | poster title | ⬜ | **3:2** (aman 4:3 … 2:1) |
| Showcase | latar banner `{n}-2` | ⬛ | **2,4:1** (isi di dalam 5:2 tengah) |
| Showcase | produk `{n}-1` | ⬜ | bebas · **margin transparan 0–2%** |
| CrossSell | kartu brand | ⬛ | **3:4** |
| Sub-brand hero | wordmark | ⬜ | bebas · crop rapat |
| Sub-brand hero | produk | ⬜ | bebas · **seragam antar layer** |
| Sub-brand showcase | title | ⬜ | **3:2** |
| Sub-brand showcase | featured | ⬜ | **12:5** |
| Sub-brand showcase | kartu grid | ⬜ | **4:5** — wajib seragam |

---

# 🔍 Status rasio aset saat ini

| Brand | Section | Rasio sekarang | Vonis |
|---|---|:---:|---|
| Hair Energy | hero produk | `0,734` ×3 | ✅ seragam — **jadikan acuan** |
| Hair Energy | about | `0,750` ×3 | ✅ tepat 3:4 |
| Hair Energy | lineup | `1,000` ×22 | ✅ tepat 1:1 |
| Hair Energy | banner `{n}-2` | `2,128` | ⚠️ kehilangan 7% atas+bawah |
| Nestlé Pure Life | lineup | `1,000` ×4 | ✅ tepat 1:1 |
| Nestlé Pure Life | about | `0,742 · 0,742 · 0,745` | ❌ meleset dari 3:4 & saling beda |
| Nestlé Pure Life | banner `{n}-2` | `2,259` | ⚠️ kehilangan 5% atas+bawah |
| VICA | about | `0,750` ×3 | ✅ rasio tepat (resolusinya yang kurang) |
| VICA | **lineup** | `0,38 · 0,27 · 0,33 · 0,38 · 0,27` | ❌❌ **lima rasio berbeda** — prioritas utama |
| VICA | banner `{n}-2` | `2,323` | ⚠️ kehilangan 4% atas+bawah |
| Sub-brand HE | hero produk | `0,56 … 0,91` | ❌ tidak seragam antar layer |
| Sub-brand HE | kartu grid | `0,771` ×20 | ✅ seragam |

---

# ✅ Checklist serah-terima ke developer

- [ ] Aset ⬛ **COVER** rasionya **persis** sesuai tabel — bukan mendekati
- [ ] Aset ⬜ **CONTAIN** dikirim beserta **daftar `lebar × tinggi` per file**
- [ ] Satu set (About / lineup / layer hero / kartu grid) → **rasio identik**
- [ ] Foto produk lineup: kanvas **1:1**, botol ≈ 88% tinggi
- [ ] Produk showcase & wordmark: **crop rapat**, margin transparan ≤ 2%
- [ ] Latar banner showcase: elemen penting di dalam **5:2 tengah**
- [ ] Latar hero: **gradasi/tekstur polos** (di HP cuma 26% tengah yang terlihat)
- [ ] Hero berkanvas landscape → **ada versi potret 3:4 untuk HP**
- [ ] Sebutkan **kode warna latar** tiap banner ke developer
- [ ] Nama file huruf kecil + tanda hubung

---

# 🎯 Tiga perbaikan rasio berdampak terbesar

1. **VICA product lineup** — render ulang 5 SKU ke kanvas **1:1** seragam. Sekaligus menyelesaikan masalah berat file (41 MB → 0,5 MB) dan menghapus tambalan `imageScale`.
2. **NPL About** — samakan ketiganya ke **3:4** persis.
3. **Semua latar banner showcase** — naikkan ke **2,4:1** supaya tidak ada teks yang terpotong diam-diam.
