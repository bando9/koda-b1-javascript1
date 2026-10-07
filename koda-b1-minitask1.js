const radius = 7;
const PI = 3.14;
const isHitungLuas = false;

if (typeof radius === "number") {
  if (isHitungLuas) {
    const luasLingkaran = PI * radius * radius;
    console.log(`Luas Lingkaran: ${luasLingkaran}`);
  } else {
    const kelilingLingkaran = 2 * PI * radius;
    console.log(`Keliling Lingkaran: ${kelilingLingkaran}`);
  }
} else {
  console.log("masukkan angka radius dg angka");
}

console.log(`
tipe radius: ${typeof radius}
tipe PI : ${typeof PI}
tipe isHitungLuas : ${typeof isHitungLuas}
  `);
