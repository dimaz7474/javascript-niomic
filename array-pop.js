// Contoh penggunaan array pop di JavaScript

let buah = ['apel', 'jeruk', 'mangga', 'pisang'];

console.log('Sebelum pop:', buah);

// Menghapus elemen terakhir dari array
let buahTerakhir = buah.pop();

console.log('Buah yang di-pop:', buahTerakhir);
console.log('Setelah pop:', buah);
console.log('Jumlah buah:', buah.length);
console.log('Apakah buah adalah array?', Array.isArray(buah));  // Output: true
console.log('Indeks buah pertama:', buah.indexOf("jeruk")); // Output: 0
console.log('Indeks buah kedua:', buah.indexOf("mangga")); // Output: 1
console.log('Indeks buah ketiga:', buah.indexOf("apel")); // Output: -1 (karena "apel" sudah dihapus)
