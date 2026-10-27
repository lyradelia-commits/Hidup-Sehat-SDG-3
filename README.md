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





## 7. URL Website dan Repositori

Website **Hidup Sehat - Edukasi Kesehatan Masyarakat** dipublikasikan menggunakan GitHub Pages agar dapat diakses secara daring. Repositori GitHub digunakan untuk menyimpan kode sumber, aset, dan dokumentasi proyek.

| Keperluan | URL |
|---|---|
| **Website (versi online)** | https://lyradelia-commits.github.io/hidup-sehat-sdg3/ |
| **Repositori GitHub** | https://github.com/lyradelia-commits/hidup-sehat-sdg3 |
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


