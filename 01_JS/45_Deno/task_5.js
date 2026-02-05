let a = prompt("Gib die Temperatur in Grad an");
let input = Number(a);

if (input <= 5) {
  console.log("Drinnen bleiben");
}
if (input > 5 && input < 15) {
  console.log("Warm anziehen");
}
if (input >= 15 && input < 30) {
  console.log("raus gehen");
}
if (input >= 30) {
  console.log("In die Kühlbox gehen");
}
