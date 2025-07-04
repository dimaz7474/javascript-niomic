// Function dengan parameter dan nilai balik (return)
function ubahNilai(angka) {
  // Ubah nilai dalam function (misalnya dikali 2)
  let hasil = angka * 2;
  return hasil; // kembalikan nilai yang sudah diubah
}


// Kirim nilai ke dalam function
let nilaiAwal = 10;
let nilaiSesudah = ubahNilai(nilaiAwal);

// Tampilkan kedua nilai
console.log("Nilai sebelum diubah: " + nilaiAwal);
console.log("Nilai setelah diubah di dalam function: " + nilaiSesudah);
