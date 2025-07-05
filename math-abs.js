const angka1 = -15;
const angka2 = 7;
const angka3 = -3.5;

console.log(`Math.abs(${angka1}) =`, Math.abs(angka1)); // 15
console.log(`Math.abs(${angka2}) =`, Math.abs(angka2)); // 7
console.log(`Math.abs(${angka3}) =`, Math.abs(angka3)); // 3.5

// Contoh dalam array
const arr = [-10, 0, 5, -7];
const absArr = arr.map(Math.abs);
console.log('Array setelah Math.abs:', absArr); // [10, 0, 5, 7]