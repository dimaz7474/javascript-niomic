function getNamaHari(angkaHari) {
  let namaHari;

  switch (angkaHari) {
    case 1:
      namaHari = "Senin";
      break;
    case 2:
      namaHari = "Selasa";
      break;
    case 3:
      namaHari = "Rabu";
      break;
    case 4:
      namaHari = "Kamis";
      break;
    case 5:
      namaHari = "Jumat";
      break;
    case 6:
      namaHari = "Sabtu";
      break;
    case 7:
      namaHari = "Minggu";
      break;
    default:
      namaHari = "Angka tidak valid (1-7)";
  }

  return namaHari;
}

// Contoh pemanggilan fungsi
console.log(getNamaHari(3)); // Output: Rabu
console.log(getNamaHari(8)); // Output: Angka tidak valid (1-7)
