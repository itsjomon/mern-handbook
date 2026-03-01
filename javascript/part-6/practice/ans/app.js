// Ans 1
function poem(){
    console.log("Roses are red, violets are blue,\nJavaScript is sweet, and so are you.");
}
poem();


// Ans 2
function rollDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a: " + diceValue);
}
rollDice();


// Ans 3
function avg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log("The average is: " + avg);
}
avg(3, 6, 9);


// Ans 4
function mulTable(n){
    for (let i = 1; i <= 10; i++) {
        console.log(i*n);
    }
}
mulTable(7);


// Ans 5
function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let result = sum(7); // for n = 7
console.log("The sum from 1 to n is: " + result);


// Ans 6
let str = ["Hello", " ", "World", "!"];
function concatStr(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
let concatenated = concatStr(str);
console.log("Concatenated String: " + concatenated);


// Ans 8
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 5;
function newArr(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
newArr(arr, num);


// Ans 9
let str2 = "abcdabcdefgggh";

function uniqueChars(str2) {
    let result = "";
    for (let i = 0; i < str2.length; i++) {
        if (result.indexOf(str2[i]) === -1) {
            result += str2[i];
        }
    }
    return result;
}
console.log(uniqueChars(str2));


// Ans 10
let country = ["Australia", "Germany", "United States of America"];

function longestCountryName(countries) {
    let longest = countries[0];
    
    for (let i = 1; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
            longest = countries[i];
        }
    }
    return longest;
}
console.log(longestCountryName(country)); 


// Ans 11
let str3 = "Hello World!";
function countVowels(str3) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str3.length; i++) {
        if (vowels.includes(str3[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(str3));


// Ans 12
let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start + 1;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));
