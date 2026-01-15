let zahlen = [4, 1, 2, 3];

zahlen.push(17, 199);

console.log("Array-Werte:");
for (let i = 0; i < zahlen.length; i++) {
  console.log(zahlen[i]);
}

let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
  summe += zahlen[i];
}

console.log("Summe:", summe);

let mittelwert = summe / zahlen.length;
console.log("Mittelwert:", mittelwert);
