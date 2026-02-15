// Array
let students = ["abc", "def", "ghi"];
console.log(students); // (3) ['abc', 'def', 'ghi']
console.log(students[0]); // abc
console.log(students[1]); // def
console.log(students[2]); // ghi
console.log(students[2][0]); // g
console.log(students.length); // 3


// Push, Pop, Shift, Unshift
students.push("jkl"); // adds 'jkl' at the end
console.log(students); // (4) ['abc', 'def', 'ghi', 'jkl']

students.pop(); // removes last element
console.log(students); // (3) ['abc', 'def', 'ghi']

students.shift(); // removes first element
console.log(students); // (2) ['def', 'ghi']

students.unshift("xyz"); // adds 'xyz' at the beginning
console.log(students); // (3) ['xyz', 'def', 'ghi']


// indexOf and includes
console.log(students.indexOf("def")); // 1
console.log(students.indexOf("Def")); // -1
console.log(students.indexOf("abc")); // -1

console.log(students.includes("abc")); // false
console.log(students.includes("def")); // true


// concat(concatenate)
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

console.log(primary.concat(secondary)); // (6) ['red', 'yellow', 'blue', 'orange', 'green', 'violet']


// reverse
let colors = ["red", "yellow", "blue"];

console.log(colors.reverse()); // (3) ['blue', 'yellow', 'red']


// slice
let colors2 = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors2.slice()); // (6) ['red', 'yellow', 'blue', 'orange', 'pink', 'white']
console.log(colors2.slice(2)); // (4) ['blue', 'orange', 'pink', 'white']
console.log(colors2.slice(2, 3)); // ['blue']
console.log(colors2.slice(-2)); // (2) ['pink', 'white']


// splice
let colors3 = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors3.splice(4)); // (2) ['pink', 'white']
console.log(colors3); // (4) ['red', 'yellow', 'blue', 'orange']
console.log(colors3.splice(0, 1)); // ['red']
console.log(colors3); // (3) ['yellow', 'blue', 'orange']
console.log(colors3.splice(0, 1, "black", "grey")); // ['yellow']
console.log(colors3); // (4) ['black', 'grey', 'blue', 'orange']


//sort
let days = ["monday", "sunday", "wednesday", "tuesday"];
console.log(days.sort()); // (4) ['monday', 'sunday', 'tuesday', 'wednesday']

let squares = [25, 16, 4, 49, 36, 9];
console.log(squares.sort()); // (6) [16, 25, 36, 4, 49, 9]


// array reference
let a = [1];
let b = [1];
console.log(a === b); // false
console.log(a == b); // false

let arr = ["a", "b"];
let arrCopy = arr;

console.log(arrCopy); // (2) ['a', 'b']

arrCopy.push("c");

console.log(arr); // (3) ['a', 'b', 'c']
console.log(arr == arrCopy); // true


// constant arrays
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.push(6)); // 6
console.log(arr2); // (6) [1, 2, 3, 4, 5, 6]


// nested arrays/multi dimentional arrays
let nums = [[2,4], [3,6], [4,8]];

console.log(nums); // (3) [Array(2), Array(2), Array(2)]
console.log(nums[0]); // (2) [2, 4]
console.log(nums[0][0]); // 2
console.log(nums[1]); // (2) [3, 6]
console.log(nums[1][0]); // 3
console.log(nums.length); // 3
console.log(nums[0].length); // 2