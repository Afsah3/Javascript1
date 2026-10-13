// QUESTION 1
const name = "Afsa";
const n = 23;
const BigN= 129383648394363n;
const isSingle =true;
const email = null;

console.log(typeof name);
console.log(typeof n);
console.log(typeof BigN);
console.log(typeof isSingle);
console.log(typeof email);

// QUESTION 2
const frontend = "frontend-developer-kigali";

const words = frontend.split("-");
const title = words.map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

console.log(title);

// QUESTION 3
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random Number:", randomNumber);

if (randomNumber % 2 === 0) {
    console.log("Even: Yes");
} else {
    console.log("Even: No");
}

const squareRoot = Math.sqrt(randomNumber).toFixed(2);

console.log("Square Root:", squareRoot);

// QUESTION 4
console.log("10" + 2 * 3);
console.log(("10" + 2) * 3);
console.log(0 || "default");
console.log(0 ?? "default");
console.log(typeof NaN);
console.log("Kigali".slice(-3));

// QUESTION 5
const price = "2500";
let qty = 3;
let total = Number(price) * qty;

console.log(`Total: ${total} RWF`);

let discount = 0.1;
discount = 0.2;

console.log(`Discount: ${discount}`);

