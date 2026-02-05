let password = "3234";
let input = prompt("Enter your password:");

if (input === password) {
  console.log("Access granted");
}

if (input !== password) console.log("Access denied");
