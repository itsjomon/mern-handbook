console.log("Hello World"); // Hello World
console.log(2+2); // 4



// Template Literals
let pencil = 10;
let eraser = 5;
console.log("The total Price is", pencil + eraser, "rupees."); // The total Price is 15 rupees.

let a = 15;
let b = 20;
// Template Literals
console.log(`Total ${a + b} rupees.`); // Total 35 rupees.

let c = 25;
let d = 30;
// Template Literals
let total = `The price is : ${c + d} rupees.`; // The price is : 55 rupees.
// let total = "Total price is : " + (c + d) + " rupees.";
console.log(total);



// Operators:

// Arithmetic 
let e = 3;
let f = 4;
console.log(e+f); // 7
console.log(e-f); // -1
console.log(e*f); // 12
console.log(e/f); // 0.75
console.log(e%f); // 3
console.log(e**f); // 81

// Unary
console.log(e++); //3
console.log(++e); //5

// Assignment
let g = 13;
let h = 14;
h = g;
console.log(h); //13

// Comparison
let age = 10;
let age2 = "10";
console.log(age > 18); // false
console.log(age == 18); // false
console.log(age != 18); // true
console.log(age == age2); // true
console.log(age === age2); // false

// Comparison for Non-numbers
console.log('a' > 'A'); // true
console.log('*' < '&'); // false

// Logical
let score = 80;
if (score >= 33 && score >= 80) {
    console.log("pass"); // pass
    console.log("A+"); // A+
}

if (score > 33 || score === 33) {
    console.log("pass"); // pass
}

let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in.");  // Please log in.
} else {
  console.log("Welcome back!");
}



// truthy and falsy
if (0) {
    console.log("it has true value");
}
else {
    console.log("it has false value"); // it has false value
}

let string = "";
if (string) {
    console.log("string is not empty");
}
else {
    console.log("string is empty"); // string is empty
}

let num = -10;
if (num) {
    console.log("num is not equal to 0"); // num is not equal to 0
}
else {
    console.log("num is equal to 0");
}



// Conditional Statement

// if
console.log("before my if statement"); // before my if statement
let age3 = 13;
// let age3 = 19;
if(age3 >= 18) {
    console.log("You can vote");
    let a = 5;
    console.log(5*a);
}
if(age3 < 18) {
    console.log("You cannot vote"); // You cannot vote
}
console.log("after my if statement"); // after my if statement


let firstName = "Jomon"
if (firstName = "Jomon") {
    console.log(`Welcome ${firstName}`); // Welcome Jomon
}

// else if
let mark = 75;
if (mark >= 80) {
    console.log("A+");
}
else if (mark >= 60) {
    console.log("A"); // A
}
else if (mark >= 33) {
    console.log("B");
}
else if (mark < 33) {
    console.log("F");
}

let month = "january";
if (month === "january") {
    console.log("Winter is here"); // Winter is here
}
else if (month === "april") {
    console.log("Summer is here");
}

// else
let age4 = 17;
if(age3 >= 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote"); // You cannot vote
}

let color = "blue";
if (color === 'red') {
    console.log('Stop!');
}
else if (color === 'yellow') {
    console.log('Slow');
}
else if (color === 'green') {
    console.log('Go');
}
else {
    console.log('traffic light is broken'); // traffic light is broken
} 

// Nested if-else
let mark2 = "60";
if (mark2 >= 33) {
    console.log("Pass") // Pass
    if (mark2 >= 80) {
        console.log("Grade: O");
    }
    else{
        console.log("Grade: A"); // A
    }
}
else {
    console.log("better luck next time");
}

// Switch statement
let clr = "red";

switch (clr) {
    case "red" :
        console.log ("Stop"); // Stop
        break;
    case "yellow" :
        console.log ("Slow Down");
        break;
    case "green" :
        console.log ("Go");
        break;
    default :
        console.log ("Broken Light");
}



// Alerts & Prompts
let fname = prompt("enter first name : ");
let lname = prompt("enter last name : ");
console.log(`Welcome ${fname + " " + lname}`);
let msg = `Welcome ${fname + " " + lname}`;
alert(msg);

console.log("this is a simple log");
console.error("this is an error msg");
console.warn("this is a warning msg");