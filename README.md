# Hidup Sehat — Edukasi Kesehatan Masyarakat (SDG 3)

Website statis bertema **SDG 3: Kehidupan Sehat dan Sejahtera** yang berisi edukasi
kesehatan masyarakat untuk publik. Dibangun dengan **HTML dan CSS murni tanpa framework**
sebagai tugas mata kuliah **Pemrograman Web**.

## 1. Identitas Kelompok dan Pembagian Tugas

**Mata kuliah:** Pemrograman Web
**Judul tugas:** Website Edukasi Kesehatan Masyarakat Bertema SDG 3
**Jumlah halaman:** 7 halaman HTML statis

| No | Nama | NIM | Pembagian tugas |
|---|---|---|---|
| 1 | **Kadek Lyradelia Pracili** | 2515091032 | Struktur proyek & stylesheet global (`css/style.css`), halaman Beranda, halaman Sumber, pengelolaan aset gambar, build & deploy ke GitHub Pages |
| 2 | **Astria Laura Dwi Putri** | 2515091082 | Halaman Pola Hidup Sehat dan Gizi Seimbang, penyusunan tabel data (kebutuhan tidur, porsi Isi Piringku), verifikasi angka rujukan WHO/Kemenkes |
| 3 | **Dhea Natasya Putri** | 2515091131 | Halaman Aktivitas Fisik, Kesehatan Mental, dan Pencegahan Penyakit, navigasi & menu mobile, pengujian responsif 1440/768/375 px |

## 2. Judul, Tema SDGs, dan Sasaran Pengguna

**Judul website:** Hidup Sehat — Edukasi Kesehatan Masyarakat

**Tema SDGs:** **Goal 3 — Good Health and Well-being (Kehidupan Sehat dan Sejahtera)**

Alasan memilih tema ini: SDG 3 menyentuh seluruh siklus hidup manusia, dan capaiannya
sangat ditentukan oleh perilaku harian — makan, bergerak, tidur, mengelola stres,
menjaga kebersihan — bukan hanya oleh layanan rumah sakit. Perilaku itulah yang bisa
diedukasi lewat media yang mudah diakses, salah satunya website.

**Sasaran pengguna:**

| Segmen | Kebutuhan yang dilayani |
|---|---|
| **Remaja & mahasiswa (15–24 tahun)** | Anjuran aktivitas fisik, gizi praktis dengan budget terbatas, cara mengenali stres dan mencari bantuan |
| **Keluarga muda / orang tua** | Panduan porsi makan keluarga, jadwal imunisasi anak, kebiasaan bersih di rumah |
| **Masyarakat umum dengan literasi kesehatan rendah** | Penjelasan singkat tanpa istilah medis rumit, angka yang bisa langsung dipakai |
| **Kader kesehatan / pelajar** | Rujukan cepat ke sumber resmi WHO dan Kemenkes yang bisa diverifikasi |

---

### 3.2 Manfaat

| Bagi | Manfaat |
|---|---|
| **Pembaca umum** | Tahu batas gula/garam/lemak, menit aktivitas fisik yang dibutuhkan, dan tanda kapan harus mencari bantuan kesehatan mental |
| **Mahasiswa** | Contoh penerapan nyata HTML semantik, CSS Grid/Flexbox, media query, dan aksesibilitas dasar |
| **Kelompok penyusun** | Latihan kerja tim: pembagian halaman, konsistensi desain, pengujian lintas perangkat, dan pengelolaan repositori |

### 3.3 Deskripsi setiap halaman

| No | Halaman | Tujuan halaman | Isi utama |
|---|---|---|---|
| 1 | **Beranda** (`index.html`) | Memberi gambaran tema dan mengarahkan pengunjung ke lima materi | Hero, 4 kartu statistik global (31% kurang aktif · 1 dari 7 gangguan mental · 75% kematian akibat PTM · 1/3 target SDG 3.4), 5 kartu pilar materi, alasan pentingnya pencegahan, ajakan bertindak |
| 2 | **Pola Hidup Sehat** (`pola-hidup-sehat.html`) | Menjelaskan kebiasaan dasar yang menopang kesehatan | Definisi pola hidup sehat, 7 kebiasaan (tidur, makan, gerak, kebersihan, rokok, stres, cek kesehatan), tabel kebutuhan tidur per usia, batas G4-G1-L5, ceklis harian, mitos vs fakta |
| 3 | **Gizi Seimbang** (`gizi-seimbang.html`) | Mengajarkan komposisi dan porsi makan yang benar | Prinsip Isi Piringku, tabel porsi per kelompok pangan, 4 angka acuan WHO (400 g · 25 g · <5 g · <10%), G4-G1-L5, tabel contoh menu sehari, FAQ |
| 4 | **Aktivitas Fisik** (`aktivitas-fisik.html`) | Menjelaskan berapa banyak gerak yang dibutuhkan tubuh | Data kurang gerak (WHO & SKI 2023), tabel anjuran per kelompok usia, cara membedakan intensitas ringan/sedang/berat, panduan mulai dari nol, tips mengurangi duduk lama |
| 5 | **Kesehatan Mental** (`kesehatan-mental.html`) | Mengurangi stigma dan menunjukkan jalan mencari bantuan | Definisi sehat mental (WHO), tabel pembeda stres–cemas–depresi, 6 kebiasaan menjaga pikiran, 6 tanda perlu bantuan, layanan bantuan di Indonesia (119 ext. 8, puskesmas, kampus, psikolog) |
| 6 | **Pencegahan Penyakit** (`pencegahan-penyakit.html`) | Membedakan strategi pencegahan penyakit menular dan tidak menular | Dua kelompok penyakit, 6 langkah cuci tangan pakai sabun, tabel jadwal imunisasi rutin, pengendalian faktor risiko PTM, bahaya rokok, FAQ |
| 7 | **Sumber** (`sumber.html`) | Menyediakan transparansi rujukan dan kredit aset | Tabel 25 sumber rujukan, tabel kredit 11 foto beserta penerbit dan tautan artikel asli, catatan tentang situs, informasi kontak darurat |

## 4. Teknologi yang Digunakan

| Kategori | Teknologi | Keterangan |
|---|---|---|
| **Markup** | HTML5 | Elemen semantik: `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `table`, `thead`, `tbody`, `th scope`, `details`, `summary`, `footer` |
| **Styling** | CSS3 murni | CSS Custom Properties (variabel), Grid Layout, Flexbox, `clamp()`, media queries, `prefers-reduced-motion`, `@media print` |
| **Interaksi** | JavaScript ES5 (vanilla) | **32 baris**, hanya untuk tombol menu di layar kecil. Tanpa library, tanpa framework |
| **Tipografi** | Google Fonts — Plus Jakarta Sans | Lisensi SIL Open Font License 1.1, bobot 400/600/700/800 |
| **Ikon** | SVG inline | Ditulis langsung di HTML, tidak perlu file ikon tambahan |
| **Gambar** | JPEG terkompresi | Maksimal 1400 px, kualitas 85, disimpan lokal di `assets/img/` |
| **Version control** | Git + GitHub | Repositori publik, riwayat commit per tahap pengerjaan |
| **Hosting** | GitHub Pages | Hosting statis gratis, ter-deploy otomatis dari branch `main` |
| **Validasi** | Nu HTML Checker (`vnu.jar`) & W3C CSS Validator | Engine sama dengan validator.w3.org — hasil **0 error** |


## 5. Penjelasan Penting dari Implementasi

Lima hal yang diminta — HTML, CSS, navigasi, Flexbox/Grid, dan media queries — masing-masing
satu paragraf penjelasan + satu contoh kode yang benar-benar dipakai di proyek.

### 5.1 HTML — semantik dan struktur halaman

Semua halaman memakai kerangka yang sama: `header` (logo + navigasi) → `main` (isi) →
`footer`. Tiga baris berikut wajib ada dan punya alasan masing-masing:

```html
<html lang="id">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/style.css">
```

`lang="id"` agar pembaca layar memakai pelafalan Indonesia. `viewport` adalah syarat
agar media query bekerja di ponsel — tanpa baris ini halaman dirender selebar ±980 px
lalu dikecilkan, sehingga semua teks terlihat kecil. CSS ditaruh di file eksternal
karena itu yang disyaratkan tugas.

Tabel diberi `caption` + `scope` supaya terbaca sebagai tabel oleh pembaca layar:

```html
<table>
  <caption>Jadwal imunisasi rutin (Kemenkes RI)</caption>
  <thead><tr><th scope="col">Usia</th><th scope="col">Imunisasi</th></tr></thead>
  <tbody><tr><th scope="row">2 bulan</th><td data-label="Imunisasi">DPT-HB-Hib 1</td></tr></tbody>
</table>
```

Atribut `data-label` bukan atribut standar HTML — dipakai CSS pada bagian 5.5 untuk
menampilkan nama kolom ketika tabel berubah menjadi kartu di layar kecil.

### 5.2 CSS — satu file, variabel, dan teks adaptif

Seluruh 7 halaman memakai satu file `css/style.css` (936 baris, dibagi 20 bagian
berkomentar). Warna dan ukuran disimpan sebagai variabel agar tema bisa diubah dari
satu tempat, dan ukuran judul memakai `clamp()` sehingga tidak perlu media query:

```css
:root { --hijau-700: #146c52; --garis: #d8e6df; --radius: 16px; --lebar: 1120px; }

/* minimum 2rem · mengikuti lebar layar · maksimum 3.5rem */
h1 { font-size: clamp(2rem, 1.35rem + 3.2vw, 3.5rem); }

.container { width: min(100% - 2.5rem, var(--lebar)); margin-inline: auto; }
```

Hasil terukur: H1 menjadi **33,6 px di 375 px**, **46 px di 768 px**, dan **56 px di
1440 px** — tanpa satu pun media query tambahan.

### 5.3 Navigasi — Flexbox dan penanda halaman aktif

Header memakai `position: sticky` agar menu tetap terlihat saat di-scroll, dengan
susunan Flexbox satu baris:

```css
.nav { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
```

Halaman aktif ditandai dengan `aria-current="page"` (atribut, bukan class), lalu
diwarnai lewat selektor atribut. Cara ini membuat penanda aktif juga terbaca pembaca
layar, bukan sekadar berbeda warna:

```html
<li><a href="index.html" aria-current="page">Beranda</a></li>
```

```css
.nav-menu a[aria-current="page"] { background: var(--hijau-900); color: #fff; }
```

Di bawah 1040 px tujuh item menu tidak muat lagi, sehingga diganti tombol:

```css
@media (max-width: 1040px) {
  .nav-toggle { display: inline-flex; margin-left: auto; min-height: 44px; }
  .situs-header nav { display: contents; }   /* agar tombol menempel ke kanan */
  .nav-menu { position: absolute; top: 100%; left: 0; right: 0; display: none; }
  .nav-menu.buka { display: flex; }
}
```

JavaScript hanya 32 baris untuk menambah/hapus class `.buka` dan menjaga atribut
`aria-expanded`. Situs tetap bisa dipakai tanpa JavaScript karena seluruh tautan juga
tersedia di footer.

### 5.4 Flexbox dan Grid — pembagian tugasnya

**Grid** untuk tata letak dua dimensi (hero, kartu, statistik, footer). **Flexbox**
untuk susunan satu arah (navbar, tombol, daftar centang).

```css
/* Grid: jumlah kolom menyesuaikan sendiri, 1 -> 2 -> 3 */
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(255px, 1fr)); }

/* Grid dua kolom dengan proporsi 1.05 : 0.95 supaya sisi teks lebih lebar */
.hero-dalam { display: grid; grid-template-columns: 1.05fr .95fr; gap: 2rem; }

/* Flexbox: tombol otomatis turun baris kalau ruang habis */
.hero-aksi { display: flex; flex-wrap: wrap; gap: .75rem; }
```

Satu baris `auto-fit` + `minmax` di atas menggantikan dua media query, karena jumlah
kolom dihitung sendiri oleh browser.

### 5.5 Media queries — lima titik henti

Titik henti ditentukan dari **kapan tata letak mulai rusak**, bukan dari nama perangkat:

| Media query | Alasan batasnya | Yang berubah |
|---|---|---|
| `min-width: 1000px` | 3 kolom kartu masih nyaman di atas lebar ini | Kartu pilar dipaksa 3+3, tidak menggantung |
| `max-width: 1040px` | 7 menu + logo tidak muat satu baris | Menu jadi tombol, hero & konten jadi 1 kolom |
| `min-width: 561px` – `max-width: 900px` | 4 kartu statistik pecah jadi 3+1 | Statistik jadi 2×2 |
| `max-width: 700px` | Tabel 5 kolom sudah terlalu sempit | **Tabel jadi kartu bertumpuk** |
| `max-width: 560px` | Lebar ponsel umum | Teks 17 px, tombol selebar layar, target sentuh 44 px |

Bagian tersulit adalah tabel. Tabel 4–5 kolom di layar 375 px hanya menyisakan ±60 px
per kolom, jadi sel diubah menjadi blok dan nama kolom ditampilkan dari `data-label`:

```css
@media (max-width: 700px) {
  table, tbody, tr, th, td { display: block; width: 100%; }
  thead { display: none; }                    /* header tabel disembunyikan */
  caption { display: block; width: 100%; }    /* kalau tidak, caption menyusut */

  tbody td::before {
    content: attr(data-label);                /* nama kolom dari atribut HTML */
    display: block;
    font-size: .75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--teks-lembut);
  }
}
```

Hasilnya di ponsel tabel tetap terbaca tanpa perlu digeser ke samping:

```
DEWASA 18-64 TAHUN          <- isi <th scope="row">, jadi judul kartu
AKTIVITAS AEROBIK           <- dari data-label kolom 2
150-300 menit per minggu
INTENSITAS BERAT            <- dari data-label kolom 3
75-150 menit per minggu
```

**Hasil pengujian di tiga viewport:**

| Aspek | Desktop 1440 px | Tablet 768 px | Smartphone 375 px |
|---|---|---|---|
| Kolom konten | 2 kolom | 1 kolom | 1 kolom |
| Kartu | 3 kolom | 2 kolom | 1 kolom |
| Teks dasar | 16 px | 16 px | 17 px |
| Navigasi | 7 menu horizontal | Tombol Menu 44 px | Tombol Menu 44 px |
| Tabel | tabel penuh | tabel penuh | kartu bertumpuk |
| Scroll horizontal | tidak ada | tidak ada | tidak ada |

### 5.6 Aksesibilitas (ringkas)

- `alt` deskriptif pada semua gambar, `skip-link` untuk pengguna keyboard, dan
  `:focus-visible` dengan outline 3 px.
- `aria-current`, `aria-expanded`, dan `aria-controls` pada navigasi.
- Satu `h1` per halaman tanpa melompati level heading.
- Target sentuh minimal 44 px dan animasi dimatikan saat `prefers-reduced-motion`.

---

## 6. Struktur Folder

```
hidup-sehat-sdg3/
├── .gitignore                   # mengecualikan folder preview & file OS
├── README.md                    # dokumentasi ini
│
├── index.html                   # 1. Beranda
├── pola-hidup-sehat.html        # 2. Pola Hidup Sehat
├── gizi-seimbang.html           # 3. Gizi Seimbang
├── aktivitas-fisik.html         # 4. Aktivitas Fisik
├── kesehatan-mental.html        # 5. Kesehatan Mental
├── pencegahan-penyakit.html     # 6. Pencegahan Penyakit
├── sumber.html                  # 7. Sumber & kredit
│
├── css/
│   └── style.css                # satu-satunya stylesheet (936 baris)
│
├── js/
│   └── main.js                  # 32 baris, hanya untuk menu mobile
│
└── assets/
    ├── favicon.svg              # ikon tab browser (416 byte)
    └── img/                     # 11 foto, total lebih kurang 1,1 MB
        ├── hero-beranda.jpg
        ├── aktivitas-hero.jpg
        ├── aktivitas-lari.jpg
        ├── aktivitas-yoga.jpg
        ├── gizi-hero.jpg
        ├── gizi-hidrasi.jpg
        ├── gizi-pasar.jpg
        ├── minum-air-makan.jpg
        ├── mental-hero.jpg
        ├── pencegahan-hero.jpg
        └── pencegahan-tensi.jpg
```

**Ringkasan jumlah berkas:**

| Jenis | Jumlah | Ukuran |
|---|---|---|
| Halaman HTML | 7 file | lebih kurang 148 KB (2.402 baris) |
| Stylesheet | 1 file | 23 KB (936 baris) |
| JavaScript | 1 file | 1 KB (32 baris) |
| Gambar | 11 file | lebih kurang 1,1 MB |
| Ikon | 1 file | 416 byte |
| Dokumentasi | 2 file | 7 KB |
| **Total repositori** | **23 file** | **lebih kurang 1,3 MB** |

**Alasan penataan ini:**

- `css/` dan `js/` dipisah karena tugas mensyaratkan **CSS eksternal**, bukan `<style>` di dalam HTML.
- `assets/img/` menyimpan gambar **secara lokal**, bukan hotlink ke situs lain. Kalau memakai `<img src="https://medistra.com/...">`, gambar akan mati saat situs sumber mengganti atau menghapus berkasnya, dan halaman menjadi lebih lambat.
- Folder `preview/` (screenshot hasil pengujian) **tidak di-commit** karena hanya dipakai saat menyusun laporan.

---


## 7. URL Website dan Repositori

Website **Hidup Sehat - Edukasi Kesehatan Masyarakat** dipublikasikan menggunakan GitHub Pages agar dapat diakses secara daring. Repositori GitHub digunakan untuk menyimpan kode sumber, aset, dan dokumentasi proyek.

| Keperluan | URL |
|---|---|
| **Website (versi online)** | https://lyradelia-commits.github.io/hidup-sehat-sdg3/ |
| **Repositori GitHub** | https://github.com/lyradelia-commits/Hidup-Sehat-SDG-3 |
| **Halaman Sumber** | https://lyradelia-commits.github.io/hidup-sehat-sdg3/sumber.html |

Website diposting menggunakan GitHub Pages dengan akses publik melalui HTTPS. Pembaruan website dapat dipublikasikan melalui repositori GitHub sesuai dengan konfigurasi deployment yang digunakan.

### Cara Menjalankan Website Secara Lokal
Website dapat dijalankan secara lokal melalui langkah-langkah berikut:
1. Unduh repositori melalui tombol **Code → Download ZIP** di GitHub.
2. Ekstrak file ZIP ke folder komputer.
3. Buka folder proyek dan cari file `index.html`.
4. Klik dua kali file `index.html` untuk membukanya melalui browser.

Website menggunakan HTML dan CSS statis sehingga tidak memerlukan `npm install` atau framework tambahan. Seluruh file HTML, CSS, dan aset gambar perlu tetap berada pada struktur folder yang sesuai agar dapat ditampilkan dengan benar.

## 8. Referensi Konten dan Aset

Konten website **Hidup Sehat — Edukasi Kesehatan Masyarakat** disusun berdasarkan sumber informasi kesehatan yang relevan dan tepercaya. Materi mencakup pola hidup sehat, gizi seimbang, aktivitas fisik, kesehatan mental, serta pencegahan penyakit.

Daftar referensi dan kredit aset juga tersedia pada halaman **Sumber** (`sumber.html`) sebagai bentuk transparansi sumber informasi dan visual yang digunakan dalam proyek.

### 8.1 Referensi Konten

Referensi konten terdiri atas 25 sumber yang digunakan sebagai dasar penyusunan materi edukasi kesehatan. Sumber tersebut mencakup organisasi kesehatan internasional, lembaga pemerintah Indonesia, dan sumber informasi tambahan.

Beberapa referensi utama yang digunakan antara lain:

| No. | Sumber | Kegunaan |
|---|---|---|
| 1 | [WHO — Physical Activity](https://www.who.int/news-room/fact-sheets/detail/physical-activity) | Informasi anjuran aktivitas fisik dan kurangnya aktivitas fisik |
| 2 | [WHO — Healthy Diet](https://www.who.int/news-room/fact-sheets/detail/healthy-diet) | Informasi pola makan sehat, konsumsi buah dan sayur, serta gula |
| 3 | [WHO — Salt Reduction](https://www.who.int/news-room/fact-sheets/detail/salt-reduction) | Anjuran pembatasan konsumsi garam |
| 4 | [WHO — Noncommunicable Diseases](https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases) | Informasi penyakit tidak menular dan faktor risikonya |
| 5 | [WHO — Mental Disorders](https://www.who.int/news-room/fact-sheets/detail/mental-disorders) | Informasi mengenai gangguan kesehatan mental |
| 6 | [WHO — Mental Health](https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response) | Pengertian dan pentingnya kesehatan mental |
| 7 | [WHO — Tobacco](https://www.who.int/health-topics/tobacco) | Informasi dampak penggunaan tembakau dan paparan asap rokok |
| 8 | [WHO — Hand Hygiene](https://www.who.int/teams/integrated-health-services/infection-prevention-control/hand-hygiene) | Informasi kebersihan tangan |
| 9 | [United Nations — SDG 3](https://www.un.org/sustainabledevelopment/health/) | Informasi tujuan pembangunan berkelanjutan di bidang kesehatan |
| 10 | [Kemenkes — Isi Piringku](https://ayosehat.kemkes.go.id/isi-piringku-pedoman-makan-kekinian-orang-indonesia) | Pedoman komposisi makanan bergizi seimbang |
| 11 | [Kemenkes — Kebutuhan Gizi Seimbang](https://ayosehat.kemkes.go.id/isi-piringku-kebutuhan-gizi-harian-seimbang) | Informasi pemenuhan kebutuhan gizi |
| 12 | [Kemenkes — Batas Gula, Garam, dan Lemak](https://ayosehat.kemkes.go.id/batasi-asupan-gula-garam-dan-lemak-biar-kamu-makin-keren) | Edukasi pembatasan konsumsi gula, garam, dan lemak |
| 13 | [Kemenkes — Aktivitas Fisik Rutin](https://www.kemkes.go.id/id/aktivitas-fisik-rutin-cegah-hipertensi-diabetes-dan-kolesterol-tinggi) | Manfaat aktivitas fisik untuk mencegah penyakit |
| 14 | [BKPK Kemenkes — Aktivitas Fisik Penduduk Indonesia](https://www.badankebijakan.kemkes.go.id/aktifitas-fisik-penduduk-indonesia/) | Informasi aktivitas fisik penduduk Indonesia |
| 15 | [BKPK Kemenkes — Kurang Bergerak](https://www.badankebijakan.kemkes.go.id/kurang-bergerak-ancaman-tersembunyi-kesehatan-indonesia/) | Informasi kurangnya aktivitas fisik berdasarkan data Indonesia |
| 16 | [Kemenkes — Pekan Imunisasi Dunia 2025](https://www.kemkes.go.id/id/pekan-imunisasi-dunia-2025-ayo-lengkapi-imunisasi-untuk-generasi-sehat-menuju-indonesia-emas) | Informasi imunisasi |
| 17 | [Kemenkes — Enam Langkah Cuci Tangan](https://ayosehat.kemkes.go.id/6-langkah-cuci-tangan-pakai-sabun) | Panduan cuci tangan pakai sabun |
| 18 | [Kemenkes — Kebutuhan Waktu Tidur](https://upk.kemkes.go.id/new/lama-waktu-tidur-yang-dibutuhkan-oleh-tubuh) | Informasi kebutuhan tidur berdasarkan usia |
| 19 | [Kemenkes — Tidur Berkualitas](https://keslan.kemkes.go.id/read/2539/penting-tidur-berkualitas-jaga-kesehatan-fisik-dan-mental) | Hubungan tidur dengan kesehatan fisik dan mental |
| 20–25 | Sumber tambahan mengenai pola makan sehat, jogging, gizi seimbang, manfaat berlari, kesehatan mental, dan layanan Healing119 | Referensi pendukung materi kesehatan pada website |

Daftar lengkap 25 referensi beserta tautan sumber masing-masing dicantumkan pada halaman `sumber.html`.

### 8.2 Referensi Aset Gambar

Website menggunakan 11 foto yang disimpan secara lokal pada folder `assets/img/`. Gambar digunakan untuk mendukung penyampaian materi agar tampilan website lebih menarik dan informasi lebih mudah dipahami.

Foto diperoleh dari artikel pada situs penerbit terkait. Nama penerbit, judul artikel, dan tautan sumber dicantumkan sebagai kredit aset visual.

| Berkas lokal | Sumber gambar |
|---|---|
| `hero-beranda.jpg` | [Medistra Hospital](https://medistra.com/article/pola-makan-sehat-kunci-mencegah-penyakit-dan-meningkatkan-kualitas-hidup) |
| `aktivitas-hero.jpg` | [Fithub Indonesia](https://fithub.id/blog/jogging-artinya) |
| `gizi-hidrasi.jpg` | [Alodokter](https://www.alodokter.com/jangan-remehkan-manfaat-air-putih) |
| `gizi-pasar.jpg` | [Jurnalpost](https://jurnalpost.com/tips-dan-trik-memilih-buah-dan-sayuran-di-pasar-tradisional/89125/) |
| `gizi-hero.jpg` | [ANTARA News Sulawesi Tengah](https://sulteng.antaranews.com/berita/177984/pakar-gizi-ingatkan-perlunya-gizi-seimbang-pada-penderita-anemia) |
| `minum-air-makan.jpg` | [Cleopure Water](https://cleopurewater.com/blog/kesehatan/kenapa-harus-minum-air-putih-setelah-makan/) |
| `aktivitas-lari.jpg` | [detikcom](https://news.detik.com/berita/d-6759293/hari-lari-sedunia-7-juni-yuk-simak-manfaat-berlari) |
| `aktivitas-yoga.jpg` | [KlikDokter](https://www.klikdokter.com/gaya-hidup/sehat-bugar/jenis-jenis-yoga-yang-baik-bagi-tubuh) |
| `mental-hero.jpg` | [Halodoc](https://www.halodoc.com/artikel/4-gangguan-mental-yang-terjadi-tanpa-disadari) |
| `pencegahan-hero.jpg` | [Farmasi UMMADA](https://farmasi.ummada.ac.id/2026/08/10/cuci-tangan-pakai-sabun-kebiasaan-sederhana-untuk-mencegah-penyebaran-penyakit/) |
| `pencegahan-tensi.jpg` | [Alodokter](https://www.alodokter.com/berapa-tekanan-darah-normal-orang-dewasa) |

Kredit gambar juga dicantumkan pada halaman `sumber.html`. Penggunaan dan pengolahan aset perlu tetap mengikuti ketentuan lisensi serta atribusi dari masing-masing pemilik atau penerbit.

### 8.3 Referensi Aset Pendukung

| Aset | Sumber | Keterangan |
|---|---|---|
| Font Plus Jakarta Sans | [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | Digunakan untuk tipografi website dengan lisensi SIL Open Font License 1.1 |
| Ikon navigasi dan antarmuka | SVG inline yang ditulis langsung pada HTML | Digunakan untuk mendukung tampilan dan navigasi |
| `favicon.svg` | Dibuat sendiri dalam format SVG | Digunakan sebagai ikon website |
