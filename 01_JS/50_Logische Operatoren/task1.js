let a = prompt("Wie viel Prozent hast du bei der Schularbeit?");
let input = Number(a);
if (input >= 90) {
  console.log("Grade: A");
} else if (input > 79 && input < 90) {
  console.log("Grade: B");
} else if (input > 69 && input < 80) {
  console.log("Grade: C");
} else if (input > 59 && input < 70) {
  console.log("Grade: D");
} else if (input < 59) {
  console.log("Grade: F");
}
