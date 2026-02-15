// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // 1 2 3 4 5
}

for (let i = 20; i >= 15; i = i - 2) {
    console.log(i); // 20 18 16
}



// print all odd numbers form 1 to 15
for (let i = 1; i <= 15; i = i+2) {
    console.log(i); // 1 3 5 7 9 11 13 15
}
// backward odd numbers from 15 to 1
for (let i = 15; i >= 1; i = i-2) {
    console.log(i); // 15 13 11 9 7 5 3 1
}



// print all even numbers form 2 to 10
for (let i = 2; i <= 10; i = i+2) {
    console.log(i); // 2 4 6 8 10
}
// backward even numbers from 10 to 2
for (let i = 10; i >= 2; i = i-2) {
    console.log(i); // 10 8 6 4 2
}



// print the multiplication table for 5
for (let i = 5; i <= 50; i = i+5) {
    console.log(i); // 5 10 15 20 25 30 35 40 45 50
}



// print the multiplication table input form user
let n = prompt("Enter a number to print its multiplication table:");
n = parseInt(n); // converting string input to integer
for (let i = n; i <= n*10; i = i+n) {
    console.log(i); // if user enters 7, output will be 7 14 21 28 35 42 49 56 63 70
}



// nested for loop
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 3; j ++) {
        console.log(j);
    }
}
// output:
// Outer loop: 1
// 1
// 2
// 3
// Outer loop: 2
// 1
// 2
// 3
// Outer loop: 3
// 1
// 2
// 3



// while loop
let i = 10;
while (i <= 15) {
    console.log(i); // 10 11 12 13 14 15
    i++;
}



// break keyword
let j = 1;
while (j <= 5) {
    if (j == 3) {
        break;
    }
    console.log(j); // 1 2
    j++;
}



// loops with arrays 
let fruits = ["mango", "apple", "banana", "litchi", "orange"]
fruits.push("grapes");

// normal order
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
// output:
// 0 'mango'
// 1 'apple'
// 2 'banana'
// 3 'litchi'
// 4 'orange'
// 5 'grapes'

// reverse order
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}
// output:
// 5 'grapes'
// 4 'orange'
// 3 'litchi'
// 2 'banana'
// 1 'apple'
// 0 'mango'



// Nested Loops with Nested Arrays
let heroes = [["ironman", "spiderman", "thor"], ["superman", "batman", "flash"]];

for (let i = 0; i < heroes.length; i++) {
    console.log(`array ${i}`);
    for (let j = 0; j < heroes[i].length; j++){
        console.log(j, heroes[i][j]);
    }
}
// output:
// array 0
// 0 'ironman'
// 1 'spiderman'
// 2 'thor'
// array 1
// 0 'superman'
// 1 'batman'
// 2 'flash'

let students = [["geo", 75], ["sharon", 90], ["riya", 83]];

for (let i = 0; i < students.length; i++) {
    console.log(`student ${i+1}`);
    for (let j = 0; j < students[i].length; j++){
        console.log(students[i][j]);
    }
}
// output:
// student 1
// geo
// 75
// student 2
// sharon
// 90
// student 3
// riya
// 83



// for of loop
let fruits2 = ["mango", "apple", "banana", "litchi", "orange"]

for (fruit of fruits2) {
    console.log(fruit);
}
// output:
// mango
// apple
// banana
// litchi
// orange

for (char of "HelloWorld") {
    console.log(char);
}
// output:
// H
// e
// l
// l
// o
// W
// o
// r
// l
// d



// nested for of loop
let heroes2 = [["ironman", "spiderman", "thor"], ["superman", "batman", "flash"]];

for (list of heroes2) {
    for (hero of list) {
        console.log(hero);
    }
}
// output:
// ironman
// spiderman
// thor
// superman
// batman
// flash
