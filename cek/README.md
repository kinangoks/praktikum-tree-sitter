# Mini Proyek Tree-sitter: Pendeteksi TODO dan Fungsi Panjang

## 1. Deskripsi Program

Program ini merupakan CLI sederhana berbasis Python dan Tree-sitter yang digunakan untuk menganalisis file Python secara otomatis.

Program memiliki tiga fitur utama:

1. **Pendeteksi TODO/FIXME**: Mencari komentar yang mengandung kata `TODO` atau `FIXME`, kemudian menampilkan lokasi file dan nomor barisnya.
2. **Pendeteksi Fungsi Panjang**: Mendeteksi fungsi yang memiliki lebih dari 30 baris kode, kemudian menampilkan nama fungsi dan jumlah barisnya.
3. **Pendeteksi Syntax Error**: Memeriksa apakah file Python memiliki kesalahan sintaks berdasarkan hasil parsing Tree-sitter.

## 2. Persyaratan Sistem

Sebelum menjalankan program, pastikan perangkat sudah memiliki:

- Python versi 3.10 atau lebih baru.
- pip untuk memasang library Python.
- Terminal atau Command Prompt.

## 3. Instalasi Dependensi

Program menggunakan library Tree-sitter dan grammar Python untuk melakukan parsing kode sumber.

Jalankan perintah berikut pada terminal:

```bash
python -m pip install tree-sitter tree-sitter-python
```

Periksa apakah dependensi berhasil dipasang:

```bash
python -m pip show tree-sitter
python -m pip show tree-sitter-python
```

Jika informasi paket berhasil ditampilkan, dependensi sudah terpasang.

## 4. Cara Menjalankan Program

Pastikan terminal berada di direktori utama proyek `praktikum-tree-sitter`.

Jalankan perintah berikut:

```bash
python cek/cek.py cek/uji
```

Perintah tersebut akan menjalankan file `cek.py` dan memeriksa seluruh file berekstensi `.py` yang terdapat di dalam folder `cek/uji`, termasuk subfolder di dalamnya.

Jika ingin memeriksa folder Python lainnya, ganti argumen `cek/uji` dengan lokasi folder yang ingin diperiksa.

Contoh:

```bash
python cek/cek.py tugas1-3
```

## 5. Contoh Struktur Folder Pengujian

```text
cek/
├── cek.py
├── README.md
└── uji/
    ├── todo.py
    ├── panjang.py
    └── rusak.py
```

Keterangan:

- `todo.py`: Berisi komentar TODO untuk menguji fitur pendeteksi TODO/FIXME.
- `panjang.py`: Berisi fungsi `proses_data` untuk menguji pendeteksi fungsi panjang.
- `rusak.py`: Berisi kode Python dengan kesalahan sintaks untuk menguji pendeteksi syntax error.

## 6. Contoh Output

Ketika program dijalankan menggunakan folder pengujian `cek/uji`, contoh hasil yang ditampilkan adalah:

```text
cek/uji/todo.py:2: # TODO: Tambahkan validasi agar harga tidak negatif
cek/uji/panjang.py: Fungsi proses_data memiliki 32 baris
cek/uji/rusak.py: Ditemukan syntax error
```

Hasil tersebut menunjukkan bahwa:

1. Program berhasil menemukan komentar TODO pada baris ke-2 di file `todo.py`.
2. Program berhasil mendeteksi fungsi `proses_data` pada file `panjang.py` yang memiliki 32 baris, sehingga melewati batas maksimal 30 baris.
3. Program berhasil menemukan kesalahan sintaks pada file `rusak.py`.

## 7. Kesimpulan

Program pendeteksi berbasis Tree-sitter berhasil menggabungkan query dan parsing syntax tree untuk melakukan pemeriksaan kode Python secara otomatis. Ketiga fitur yang dikembangkan dapat membantu menemukan komentar TODO/FIXME, fungsi yang terlalu panjang, dan file yang memiliki kesalahan sintaks. Dengan demikian, program dapat digunakan sebagai alat pemeriksaan sederhana untuk membantu menjaga kualitas kode dalam suatu proyek Python.