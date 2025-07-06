// Fungsi untuk mencari nilai minimum dari beberapa angka
function cariMin(...angka) {
    return Math.min(...angka);
}

// Fungsi untuk mencari nilai maksimum dari beberapa angka
function cariMax(...angka) {
    return Math.max(...angka);
}

// Contoh penggunaan
console.log(cariMin(5, 2, 9, 1, 7)); // Output: 1
console.log(cariMax(5, 2, 9, 1, 7)); // Output: 9