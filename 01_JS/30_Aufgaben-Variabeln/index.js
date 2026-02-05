let banana = "Banane";

let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let appleWeight = 0.34;
let bananaWeight = 0.22;

let bananasPerKilo = 1 / bananaWeight;
let applesPerKilo = 1 / appleWeight;

let pricePerBanana = bananaPricePerKilo * bananaWeight;
let pricePerApple = applePricePerKilo * appleWeight;

let priceOf8Apples = pricePerApple * 8;
let priceOf17Bananas = pricePerBanana * 17;

let res1 = priceOf8Apples;

let pricePerTonneApples = applePricePerKilo * 1000;
let pricePerTonneBananas = bananaPricePerKilo * 1000;

console.log(res1);
console.log(priceOf17Bananas);
console.log(pricePerTonneApples);
console.log(pricePerTonneBananas);
