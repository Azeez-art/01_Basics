import readline from "readline/promises";

import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let name = await rl.question("Azeez");

console.log("Hello " + Azeez + "!");
