let a = prompt("Wie schnell in km/h?");
let b = prompt("Welchen Level hat der traffic?");

let km = Number(a);
let TrafficLevel = Number(b);

if ((km > 80) | (TrafficLevel > 7)) {
  console.log("Slow down");
} else {
  console.log("You are good to go!");
}
