// JS Object Literal
const student = {
    name: "ria",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
console.log(student);

const item = {
    price: 299,
    discount: 40,
    colors: ["red", "pink"]
};
console.log(item);


// Create an object literal for the properties of thread/ twitter post which includes - username, content, likes, reposts, tags
const post = {
    username: "@nick",
    content: "Hello World!",
    likes: 701,
    reposts: 39,
    tags: ["openjdk", "java"]
};
console.log(post);


// Get Values
console.log(post["username"]);
console.log(post.username);

let prop = "reposts";
console.log(post[prop]);
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
console.log(obj);
console.log(obj[1]);
console.log(obj[null]);


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
student2.marks = [99, 98 ,97];
console.log(student2);

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
console.log(classInfo);
console.log(classInfo.Jack);
console.log(classInfo.Jack.grade);
classInfo.Jack.city = "Chennai";
console.log(classInfo.Jack);


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
console.log(classInfo2);
console.log(classInfo2[0]);
console.log(classInfo2[0].name);
classInfo2[0].city = "Chennai"
console.log(classInfo2[0]);


// Math Object

// Properties        Methods
// math.PI           Math.abs(n) // absolute value without -
// Math.E            Math.pow(a,b) // a ** b
//                   Math.floor(n) // round of ( <= n )
//                   Math.ceil(n) // round of ( >= n )
//                   Math.random() // give random between 0 to 1, but not 1 
console.log(Math.PI);


// Random Integers
// From 1 to 10
let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log(step4);

console.log(Math.floor(Math.random() * 10) + 1); // one line