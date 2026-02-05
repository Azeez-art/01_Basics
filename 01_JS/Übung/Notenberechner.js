let anzahl = prompt("Wie viele Noten möchtest du eingeben?");
let summe = 0;

for (let i = 1; i <= anzahl; i++) {
  let note = parseFloat(prompt("Gib Note " + i + " ein:"));
  summe += note;
}
let durchschnitt = summe / anzahl;

if (durchschnitt >= 0.0 && durchschnitt <= 2.0) {
  alert("Ausgezeichneter Erfolg! Durchschnitt: " + durchschnitt.toFixed(2));
} else if (durchschnitt > 2.0 && durchschnitt <= 2.5) {
  alert("Guter Erfolg! Durchschnitt: " + durchschnitt.toFixed(2));
} else {
  console.log("Kein ausgezeichneter oder guter Erfolg. Durchschnitt");
}
