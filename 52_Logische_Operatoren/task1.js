let a = prompt("Gib die Temperatur an");
let b = prompt("Gib die Luftfeuchtigkeit an");
let input = Number(a);
let humidity = Number(b);
if (input < 26 && input > 19 && humidity < 60) {
  console.log("Perfect day for outdoor activities!");
} else {
  console.log("Maybe stay indoors today");
}
