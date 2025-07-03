function sapaPengunjung() {
  console.log("Halo, selamat datang di website kami!");
}

// Memanggil fungsi
sapaPengunjung();

function sapaNama(nama) {
  console.log("Halo, " + nama + "! Senang bertemu denganmu.");
}

// Memanggil fungsi dengan argumen
sapaNama("Dimas");



function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}
var hasil = hitungLuasPersegiPanjang(10, 5);
console.log("Luas persegi adalah:", hasil);

function hitungKelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}
var keliling = hitungKelilingPersegiPanjang(10, 5);
console.log("Keliling persegi adalah:", keliling);

function hitungVolumeKubus(sisi) {
  return sisi * sisi * sisi;
}
var volume = hitungVolumeKubus(4);
console.log("Volume kubus adalah:", volume);

function hitungLuasSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}
var luasSegitiga = hitungLuasSegitiga(10, 5);
console.log("Luas segitiga adalah:", luasSegitiga);

function hitungLuasTrapesium(sisiAtas, sisiBawah, tinggi) {
  return ((sisiAtas + sisiBawah) * tinggi) / 2;
// Memanggil fungsi
}
if (typeof hitungLuasTrapesium === "function") {    
    var luasTrapesium = hitungLuasTrapesium(5, 10, 4);
    console.log("Luas trapesium adalah:", luasTrapesium);
}       

function cekBilanganGenap(bilangan) {
  if (bilangan % 2 === 0) {
    return true; // Bilangan genap
  } else {
    return false; // Bilangan ganjil
  }
}
var bilangan = 8;
if (cekBilanganGenap(bilangan)) {
  console.log(bilangan + " adalah bilangan genap.");
} else {
  console.log(bilangan + " adalah bilangan ganjil.");
}



function sapaNama(nama) {
  console.log("Halo, " + nama + "! Senang bertemu denganmu.");
}

// Memanggil fungsi dengan argumen
sapaNama("Dimas");

function hitungFaktorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Faktorial dari 0 atau 1 adalah 1
  } else {
    return n * hitungFaktorial(n - 1); // Rekursif untuk menghitung faktorial
  }
}
var angka = 5;
var faktorial = hitungFaktorial(angka);
console.log("Faktorial dari " + angka + " adalah:", faktorial);

const tambah = (a, b) => {
  return a + b;
};

console.log("Hasil penjumlahan:", tambah(4, 6));

function hitungLuasLingkaran(jariJari) {
  const phi = 3.14; // Nilai pi
  return phi * jariJari * jariJari; // Rumus luas lingkaran
}
var jariJari = 7;
var luasLingkaran = hitungLuasLingkaran(jariJari);
console.log("Luas lingkaran adalah:", luasLingkaran);   