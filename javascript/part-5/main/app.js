// JS Object Literal
const student = {
    name: "ria",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
console.log(student); // { name: 'ria', age: 23, marks: 94.4, city: 'Delhi' }
const item = {
    price: 299,
    discount: 40,
    colors: ["red", "pink"]
};
console.log(item); // { price: 299, discount: 40, colors: [ 'red', 'pink' ] }



// Create an object literal for the properties of thread/ twitter post which includes - username, content, likes, reposts, tags
const post = {
    username: "@nick",
    content: "Hello World!",
    likes: 701,
    reposts: 39,
    tags: ["openjdk", "java"]
};
console.log(post); // { username: '@nick', content: 'Hello World!', likes: 701, reposts: 39, tags: [ 'openjdk', 'java' ] }


// Get Values
console.log(post["username"]); // @nick
console.log(post.username); // @nick // pReferred way - dot notation

let prop = "reposts";
console.log(post[prop]); // 39
// post.prop; // wrong


// Convertion in Get values
// JS automatically converts objects keys to strings.
// Even if we made the number as a key, the number will be convered to string.
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj); // { '1': 'a', '2': 'b', true: 'c', null: 'd', undefined: 'e' }
console.log(obj[1]); // 'a'  // number 1 is converted to string '1'
console.log(obj[null]); // 'd'  // null is converted to string 'null'
console.log(obj.null); // 'd'
// console.log(obj.1); // dot notation not allowed for numbers


// Add/Update Values
const student2 = {
    name: "ria",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
console.log(student2.city)
student2.city = "Mumbai"; // update
student2.gender = "Male"; // add
student2.marks = [99, 98 ,97]; // update marks to array
console.log(student2); // { name: 'ria', age: 23, marks: [ 99, 98, 97 ], city: 'Mumbai', gender: 'Male' }


// To delete:
// delete obj.KeyName; 
// delete student2.gender;


// Object of Objects/Nested Objects
// Storing information of multiple students
const classInfo = {
    ria : {
        grade: "A+",
        city: "Delhi"
    },
    nick : {
        grade: "A",
        city: "Pune"
    },
    Jack : {
        grade: "O",
        city: "Mumbai"
    }
};
console.log(classInfo); // { ria: { grade: 'A+', city: 'Delhi' }, nick: { grade: 'A', city: 'Pune' }, Jack: { grade: 'O', city: 'Mumbai' } }
console.log(classInfo.Jack); // { grade: 'O', city: 'Mumbai' }
console.log(classInfo.Jack.grade); // O
classInfo.Jack.city = "Chennai"; // update city
console.log(classInfo.Jack); // { grade: 'O', city: 'Chennai' }


// Array of Objects
// Storing information of multiple students
const classInfo2 = [
    { 
        name: "ria",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "nick",
        grade: "A",
        city: "Pune"
    },
    {
        name: "Jack",
        grade: "O",
        city: "Mumbai"
    }
];
console.log(classInfo2); // (3) [ { name: 'ria', grade: 'A+', city: 'Delhi' }, { name: 'nick', grade: 'A', city: 'Pune' }, { name: 'Jack', grade: 'O', city: 'Mumbai' } ]
console.log(classInfo2[0]); // { name: 'ria', grade: 'A+', city: 'Delhi' }
console.log(classInfo2[0].name); // ria
classInfo2[0].city = "Chennai"; // update city
console.log(classInfo2[0]); // { name: 'ria', grade: 'A+', city: 'Chennai' }


// Math Object

// Constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Rounding Methods
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.1)); // -5
console.log(Math.floor(-4.9)); //
console.log(Math.trunc(4.9)); // 4 // removes decimal part
console.log(Math.trunc(4.1)); // 4
console.log(Math.trunc(-4.9)); // -4

// Power and Square Root
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(64)); // 8

// Min and Max
console.log(Math.min(5, 2, 9, 1, 7)); // 1
console.log(Math.max(5, 2, 9, 1, 7)); // 9

// Absolute Value
console.log(Math.abs(-7.8)); // 7.8

// Random Number
console.log(Math.random()); // random number between 0 and 1



// Random Integers
// From 1 to 10
let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log(step4);

console.log(Math.floor(Math.random() * 10) + 1); // one liner