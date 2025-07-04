let buah = ["apel", "jeruk", "mangga"];

let buahPertama = buah.shift(); // menghapus "apel"

console.log("Buah yang dihapus:", buahPertama);   // Output: "apel"
console.log("Array setelah shift:", buah);        // Output: ["jeruk", "mangga"]
console.log("Jumlah buah:", buah.length);         // Output: 2
console.log("Apakah buah adalah array?", Array.isArray(buah)); // Output: true
console.log("Indeks buah pertama:", buah.indexOf("jeruk")); // Output: 0
console.log("Indeks buah kedua:", buah.indexOf("mangga")); // Output: 1
console.log("Indeks buah ketiga:", buah.indexOf("apel")); // Output: -1 (karena "apel" sudah dihapus)
