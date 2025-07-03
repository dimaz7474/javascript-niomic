// Deklarasi variabel boolean
var isLogin = true;
let isAdmin = false;
const isVerified = true;

// Menampilkan nilai boolean
console.log("Apakah sudah login? " + isLogin);
console.log("Apakah user adalah admin? " + isAdmin);
console.log("Apakah akun sudah terverifikasi? " + isVerified);

// Contoh penggunaan kondisi boolean
if (isLogin && isVerified) {
  console.log("Selamat datang di dashboard!");
} else {
  console.log("Silakan login atau verifikasi akun Anda.");
}
