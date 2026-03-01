## Functions in JS

Functions are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

E.g.

```js
console.log();

arr.push();

arr.pop();
```

### Function Definition (telling JS)

```js
function funcName() {
    // do something
}
```

### Function calling (Using the function)

```js
funcName();
```

### Fuction with Arguments

Values we pass to the fuctions

```js
function funcName(arg1, arg2) {
    // do something
}
```

## Return Keyword

return keyword is used to return some value from the function.

```
+-------+                                           +--------+
|       |                                           |        |
| input | ----> [ Function (does some work) ] ----> | output |
|       |                                           |        |
+-------+                                           +--------+
```

```js
function funcName(arg1, arg2) {
    // do something

    return val;
}
```

## Scope

Scope determines the accessibility of variables, objects, and functions from different parts of the code.

- Function
- Block
- Lexical

### Function Scope

Variables defined inside a function are not accessible (visible) from outside the function.

### Block Scope

Variables declared inside a {} block cannot be accessed from outside the block.

### Lexical Scope

A variable defined outside a function can be accessible inside another function defined after the variable declaration.

The opposite is NOT true.

## Function Expressions

```js
const variable = function(arg1, arg2) {
    // do or return something
}
```

E.g.

```js
const sum = function(a, b) {
    return a + b;
}

sum(2, 3);
```

## Higher order Functions

A function that does one or both:

- Takes one or multiple functions as arguments
- Returns a function

```js
// Takes one or multiple functions as arguments
function multipleGreet(func, count) {
    for (let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 2);
```

```js
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
```

## Methods

Actions that can be performed on an object.

```js
const calculatr = {
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
```

### Methods (Shorthand)

```js
const calculatr = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};
```