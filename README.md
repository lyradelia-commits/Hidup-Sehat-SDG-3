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

