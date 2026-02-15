# JavaScript

JavaScript (JS) is a high-level programming language used primarily for creating interactive and dynamic features on websites, working alongside HTML and CSS. It allows developers to implement complex functionalities like animations, form validation, and real-time content updates.

## Using the Console

Uses REPL

REPL: Read-Evaluate-Print Loop

A REPL is an interactive programming environment that takes single user inputs, reads them, evaluates them, prints the result, and then loops back for more input.

## What is a Variable?

A variable is a named container used to store data in programming.

<img src="./assets/variable.png" alt="Variable" height="250px" width="400px">

## Data Types in JS

| Primitive Types |
|-----------------|
| Number          |
| Boolean         |
| String          |
| Undefined       |
| Null            |
| BigInt          |
| Symbol          |

### Numbers in JS

- positive (14) & Negative (-4)
- Integers (45, -50)
- Floating numbers - with decimal (4.6, -8.9)

### Boolean in JS

Boolean represents a truth value -> true or false / yes or no

```js
let age = 23;
let isAdult = true;

let age = 13;
let isAdult = false;
```

### String in Js

Strings are text or sequence of characters

```js
let name = "Tony Stark";
let role = "IronMan";
let char = 'a';
let num ='23';
let empty = "";

let sentence1 = 'this is "apple"';
let sentence2 = "this is 'orange'";
```

- **String Indices**

    JS is a 0 based indexing programming language

    <img src="./assets/string-indices.png" alt="String Indices" height="250px" width="400px">

    ```js
    let name ="TONY STARK"

    name[0]; // T
    name[5]; // S
    name[1000]; // Undefined

    name.length; // !0

    name[name.length-1]; // K
    ```

- **Concatenation**

    Adding strings together

    ```js
    let firstName = "Tony";
    let lastName = "Stark";
    let fullName = firstName + lastName; // Tony Stark
    ```

### null & undefined in JS

- **undefined**: A variable that has not been assigned a value is of type undefined

    ```js
    let a; // undefined
    ```

- **null**: The null value represents the intentional absence of any object value.

    To be explicitly assigned.

    ```js
    let a = null; // null
    ```

## Operators in JS

### Arithmetic Operators

```js
a = 20;
b = 10;

// Addition
sum = a + b;

// Subtraction
diff = a - b;

// Multiplication
prod = a * b;

// Division
div = a / b;

// Modulo
rem = a % b;
```

- Modulo (reminder operator) `12 % 5 = 2`
- Exponentiation (power operation) `2**3 = 8`

### NaN in JS

The NaN global property is a value representing **Not-A-Number**.

```js
0 / 0; // NaN

NaN - 1; // NaN

NaN * 1; // NaN

NaN + NaN; // NaN
```

### Operator Precedence

This is the general order of solving an expression.

`( )`

`**`

`*, /, %`

`+, -`

### Assignment Operators

```js
age = age + 1;
age += 1;

age = age - 1;
age -= 1;

age = age * 1;
age *= 1;
```

### Unary Operators

```js
age = age + 1;
age += 1;
age++ // Unary increment (POST-increment)

age = age - 1;
age -= 1;
age-- // Unary decrement (POST-decrement)
```

- **Pre-increment** (Change, then use)

    ```js
    let age = 10;
    let newAge = ++age;
    // Step-by-step:
    // 1. ++age increases age to 11 FIRST
    // 2. newAge = 11
    // 3. age is now 11
    ```

- **Post-increment** (use, then change)

    ```js
    let age = 10;
    let newAge = age++;
    // Step-by-step:
    // 1. age++ gives current value (10) to newAge FIRST
    // 2. newAge = 10
    // 3. THEN age increases to 11
    ```

- **Pre-decrement** (Change, then use)

    ```js
    let age = 10;
    let newAge = --age;
    // Step-by-step:
    // 1. --age decreases age to 9 FIRST
    // 2. newAge = 9
    // 3. age is now 9
    ```

- **Post-decrement** (use, then change)

    ```js
    let age = 10;
    let newAge = age--;
    // Step-by-step:
    // 1. age-- gives current value (10) to newAge FIRST
    // 2. newAge = 10
    // 3. THEN age decreases to 9
    ```
    
## let, const, and var Keywords 

### let keyword

Syntax of declaring variables.

```js
let age = 23;
age = age + 1; // 24

let cgpa;
cgpa = 8.9;
cgpa = cgpa * 10; // 89

let num1 = 1;
let num2 = 2;
let sum = num1 + num2; // 3
```

### const Keyword

Values of constants can't be changed with re-assignment & they can't be re-declared.

```js
const year = 2025;
year = 2026; // Error
year = year + 1; // Error

const pi = 3.14;
const g = 9.8;
```

### var Keyword

Old Syntax of writing variables

```js
var age = 23;
var cgpa = 8.9;

var num1 = 1;
var num2 = 2;
var sum = num1 + num2;
```

## Identifier Rules

All JavaScript variables must be identified with unique names (identifiers).

- Names can contain letters, digits, underscores, and dollar signs. (no space)
- Names must begin with a letter.
- Names can also begin with $ and _.
- Names are case sensitive (y and Y are different variables).
- Reserved words (like javaScript keywords) CANNOT be used as names.

### camelCase

Way of Writing identifiers

- camelCase (JS naming convention)
- snake_case
- Pascalcase
- this-is-kebab-case

## What is TypeScript

TypeScript is a superset of JavaScript that adds static typing, while JavaScript is dynamically typed, developed and maintained by Microsoft.
