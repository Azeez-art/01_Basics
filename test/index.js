let age1 = 9;
let age2 = 90;

let Differenz = Math.abs(age1 - age2);

if (Differenz > 50) {
  console.log("Oma");
} else if (Differenz > 20 && Differenz < 49) {
  console.log("Mama");
} else {
  console.log("Schwester");
}
