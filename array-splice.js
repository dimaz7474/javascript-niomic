const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Menghapus 2 item mulai dari index 1
const removed = fruits.splice(1, 2);

console.log('Setelah splice:', fruits); // ['apple', 'date', 'elderberry']
console.log('Item yang dihapus:', removed); // ['banana', 'cherry']

// Menyisipkan item baru di index 2
fruits.splice(2, 0, 'fig', 'grape');
console.log('Setelah menambah:', fruits); // ['apple', 'date', 'fig', 'grape', 'elderberry']

// Mengganti 1 item di index 1
fruits.splice(1, 1, 'blueberry');
console.log('Setelah mengganti:', fruits); // ['apple', 'blueberry', 'fig', 'grape', 'elderberry']