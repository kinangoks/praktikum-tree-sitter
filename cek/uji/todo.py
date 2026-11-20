def hitung_total(harga, jumlah):
    # TODO: Tambahkan validasi agar harga tidak negatif
    if harga < 0:
        raise ValueError("Harga tidak boleh negatif")
    total = harga * jumlah
    return total
