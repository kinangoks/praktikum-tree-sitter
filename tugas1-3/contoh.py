import os
from pathlib import Path

def sapa(nama):
    print("Halo", nama)

def tambah(a, b):
    hasil = a + b
    print("Hasil:", hasil)
    return hasil

def hitung_luas(panjang, lebar):
    luas = panjang * lebar
    print("Luas:", luas)
    return luas

def main():
    sapa("kinan")

    angka = tambah(5, 3)
    luas = hitung_luas(10, 5)

    print("Angka:", angka)
    print("Luas akhir:", luas)

if __name__ == "__main__":
    main()
