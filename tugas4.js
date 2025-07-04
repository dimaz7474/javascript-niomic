// 1. Data tinggi badan 3 siswa (dalam cm)
let siswaA = 170;
let siswaB = 165;
let siswaC = 180;

// 2. Urutkan tinggi dengan if else manual
let tinggi1, tinggi2, tinggi3;

if (siswaA >= siswaB && siswaA >= siswaC) {
  tinggi1 = siswaA;
  if (siswaB >= siswaC) {
    tinggi2 = siswaB;
    tinggi3 = siswaC;
  } else {
    tinggi2 = siswaC;
    tinggi3 = siswaB;
  }
} else if (siswaB >= siswaA && siswaB >= siswaC) {
  tinggi1 = siswaB;
  if (siswaA >= siswaC) {
    tinggi2 = siswaA;
    tinggi3 = siswaC;
  } else {
    tinggi2 = siswaC;
    tinggi3 = siswaA;
  }
} else {
  tinggi1 = siswaC;
  if (siswaA >= siswaB) {
    tinggi2 = siswaA;
    tinggi3 = siswaB;
  } else {
    tinggi2 = siswaB;
    tinggi3 = siswaA;
  }
}

// 3. Tampilkan hasil
console.log("Urutan tinggi siswa dari tertinggi ke terpendek:");
console.log(tinggi1 + " cm");
console.log(tinggi2 + " cm");
console.log(tinggi3 + " cm");
