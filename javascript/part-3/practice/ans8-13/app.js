// Ans 8
let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n)); // [7, 9, 0]


// Ans 9
let arr2 = [7, 9, 0, -2];
let n2 = 3;
console.log(arr2.slice(-n2)); // [9, 0, -2] (-n2 means, length - n2 = 4 - 3 = 1, so it starts from index 1)


// Ans 10
let str = prompt("Enter a string");
if (str.length == 0) {
    console.log("Empty string");
}
else {
    console.log("string is not empty");
}


// Ans 11
let str2 = "Itsjomon";
let idx = 3;
let char = str2[idx];

if (char >= 'a' && char <= 'z') {
    console.log("character is lowercase");
} else {
    console.log("character is not lowercase");
}


// Ans 12
let str3 = prompt("Enter a string 2");
console.log(`original string: ${str3}`);
console.log(`string without spaces: ${str3.trim()}`);


// Ans 13
let arr3 = ["hello", "hi", 1, 2, 3, 5, 65, -1, -90];
let item = -90;
if (arr3.indexOf(item) !== -1) {
    console.log("item found");
}
else {
    console.log("item not found");
}