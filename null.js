// Tipe data undefined: variabel yang belum diinisialisasi
var data1;
console.log("Nilai data1 (undefined):", data1); // Output: undefined
// Tipe data null: variabel sengaja di-set tidak bernilai
var data2 = null;
console.log("Nilai data2 (null):", data2); // Output: null
// Cek tipe data
console.log("Tipe data1:", typeof data1); // Output: undefined
console.log("Tipe data2:", typeof data2); // Output: object (khusus null, ini memang hasil bawaan JavaScript)
// Contoh penggunaan dalam kondisi
if (data1 === undefined) {
  console.log("data1 belum diisi");
}

if (data2 === null) {
  console.log("data2 sengaja dikosongkan");
}
