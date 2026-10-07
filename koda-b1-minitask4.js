// TODO:
// * fizzbuzz
// * 1-20
// * perkalian 3 dan 5 = fizzbuzz
// * odd-even
// * 1-10
// * 1. ganjil, 2. genap
// * multiplication
// * 1+1=2, 1+2=3

const mode = "fizzbuzz";

switch (mode) {
  case "fizzbuzz":
    for (let i = 1; i <= 20; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
      }
      console.log(i);
    }
    break;
  case "odd-even":
    for (let i = 1; i <= 10; i++) {
      if (i % 2 == 0) {
        console.log(`${i} = Genap`);
      } else {
        console.log(`${i} = Ganjil`);
      }
    }

    break;
  case "multiplication":
    for (let i = 1; i <= 10; i++) {
      const number = 1;
      let result = number + i;
      console.log(`${number} + ${i} = ${result}`);
    }
    break;

  default:
    console.log("Masukkan nilai mode: Fizzbuzz / Odd-Even / Multiplication");
}
