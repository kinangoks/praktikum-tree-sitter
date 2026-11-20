def proses_data(data):
    hasil = []
    total = 0
    jumlah = 0

    for angka in data:
        if angka > 0:
            nilai = angka * 2
            hasil.append(nilai)
            total += nilai
            jumlah += 1
        elif angka < 0:
            nilai = abs(angka)
            hasil.append(nilai)
            total += nilai
            jumlah += 1
        else:
            hasil.append(0)
            jumlah += 1

    rata_rata = total / jumlah if jumlah > 0 else 0
    maksimum = max(hasil) if hasil else 0
    minimum = min(hasil) if hasil else 0

    print("Hasil:", hasil)
    print("Total:", total)
    print("Jumlah:", jumlah)
    print("Rata-rata:", rata_rata)
    print("Maksimum:", maksimum)
    print("Minimum:", minimum)

    return hasil
