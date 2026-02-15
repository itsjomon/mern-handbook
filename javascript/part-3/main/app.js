// Trim method
let msg = "   Hello   ";
let msg2 = msg.trim(); // removes whitespace from both ends
console.log(msg); // "   Hello   " (original string)
console.log(msg2); // "Hello" (trimmed string)

// Example usage
let password = prompt("Enter Password");
// console.log("password is:" + password.trim());
let newPass = password.trim();
console.log("password is:", password);
console.log("new password is:", newPass);



// toLowerCase and toUpperCase methods
let userName = "Jomon";
console.log(userName.toLowerCase()); // "jomon"
console.log(userName.toUpperCase()); // "JOMON"



// Methods with Args

// indexOf
let msg3 = "Hello, welcome to the world of JavaScript";
console.log(msg3.indexOf("welcome")); // 7
console.log(msg3.indexOf("o")); // 4 (first occurrence)
console.log(msg3.indexOf("o", 5)); // 11 (search from index 5)
console.log(msg3.indexOf("Python")); // -1 (not found)

// Method Chaining
let msg4 = "   Hello World   ";
let newMsg = msg4.trim().toUpperCase();
console.log(newMsg); // "HELLO WORLD"

// slice
let msg5 = "Hello, welcome to the world of JavaScript";
let part1 = msg5.slice(0, 5);
let part2 = msg5.slice(7, 14);
let part3 = msg5.slice(15);
let part4 = msg5.slice(-10); // from the end, 40-10=30(total length - 10)
console.log(part1); // "Hello"
console.log(part2); // "welcome"
console.log(part3); // "to the world of JavaScript"
console.log(part4); // "JavaScript" // (from the end), 40-10=30(total length - 10)

// replace
let msg6 = "Hello, welcome to the world of JavaScript";
let newMsg2 = msg6.replace("JavaScript", "Java");
console.log(newMsg2); // "Hello, welcome to the world of Java"

// repeat
let msg7 = "Hello! ";
let repeatedMsg = msg7.repeat(3);
console.log(repeatedMsg); // "Hello! Hello! Hello! "