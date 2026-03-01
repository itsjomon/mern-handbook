// Function without Arguments
function hello() {
    console.log("Hello, world!");
}
hello();
hello();
hello();
hello();
hello();


function printName() {
    console.log("Alice");
    console.log("Jack");
}
printName();
printName();
printName();


function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();


function isAdult() {
    let age = 18;
    if(age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
}
isAdult();



// Function with Arguments
function Info(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
Info("Jomon", 21);


function sum(a, b) {
    console.log("Sum is: " + (a + b));
}
sum(1, 3);
sum(5, 8);



// Function with Return Values
function sum2 (a, b) {
    return a + b;
}
console.log(sum2(2, 4));


function multiply(x, y) {
    return x * y;
    // console.log("This will not be printed because it's after the return statement.");
}
let result = multiply(multiply(4, 5), 3);
console.log("Multiplication Result: " + result);
// The return statement immediately stops the execution of a function and sends a value back to the code that called it. Any code following a return statement within the function will not be executed.


function isAdult2(age) {
    if(age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
    // console.log("This will not be printed because it's after the return statement.");
}
console.log(isAdult2(13));


// To return multiple values, we can use an array or an object. Here are examples of both approaches:

// Using an array
function getCoordinates() {
    let x = 10;
    let y = 20;
    return [x, y];
}
let coordinates = getCoordinates();
console.log("Coordinates: " + coordinates[0] + ", " + coordinates[1]);

// Using an object
function getUserInfo() {
    let name = "Alice";
    let age = 30;
    return { name: name, age: age };
}
let userInfo = getUserInfo();
console.log("Name: " + userInfo.name + ", Age: " + userInfo.age);



// Scope
function testScope() {
    let localVar = "I am local"; // Function scope variable
    console.log(localVar);
}
testScope();
// console.log(localVar); // This will cause an error because localVar is not defined in the global scope


let globalVar = "I am global"; // Global scope variable
function accessGlobal() {
    console.log(globalVar); // This will work because globalVar is in the global scope
}
accessGlobal();


{
    let blockVar = "I am block-scoped"; // Block scope variable
    console.log(blockVar); // This will work because blockVar is accessible within this block
}
// console.log(blockVar); // This will cause an error because blockVar is not defined outside the block

for (let i = 0; i < 3; i++) {
    console.log(i); // This will work because i is accessible within the loop block
}
// console.log(i); // This will cause an error because i is not defined outside the loop block
// In JavaScript, variables declared with let and const are block-scoped, meaning they are only accessible within the block they are defined in. Variables declared with var are function-scoped, meaning they are accessible throughout the entire function they are defined in, but not outside of it.


function outerFunction() {
    let x = 10;
    let y = 20;
    function innerFunction() {
        console.log("Sum from inner function: " + (x + y)); // Inner function can access variables from the outer function // This is an example of lexical scope, where the inner function has access to the variables of its outer function.
    }
    innerFunction();
}
outerFunction();



// Function Expressions
let sum3 = function(a, b) {
    return a + b;
}
console.log("Sum is: " + sum3(2, 3));

// Function Expression: A function that is stored as a value in a variable, allowing the function to be reassigned, passed as an argument, and defined conditionally, just like any other variable value.

let operation = function(a, b) {
    return a + b;  // Initially addition
};

console.log(operation(5, 3));

operation = function(a, b) {
    return a * b;  // Now changed to multiplication
};

console.log(operation(5, 3));



// Higher order Functions
function multipleGreet(func, count) {
    for (let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

multipleGreet(greet, 2);
multipleGreet(function() {console.log("Goodbye!")}, 2);

// Returns a function
function oddEvenTest(req) {
    if(req == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if (req == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong req");
    }
}

let req = "odd"; // or "even"
let testFunc = oddEvenTest(req);
testFunc(5);



// Methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};
console.log("Addition: " + calculator.add(2, 3));
console.log("Subtraction: " + calculator.sub(5, 2));
console.log("Multiplication: " + calculator.mul(4, 6));