let count = prompt("Wie viele Zahlen möchtest du eingeben?");
count = Number(count);
let sum = 0;

for (let i = 1; i <= count; i++) {
  let number = prompt("Gib Zahl " + i + "ein");
  number = Number(number);
  sum += number;
}
let average = sum / count;
average = prompt("Der Durchscnitt ist:" + average);
