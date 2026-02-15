# Loops

Loops are used to iterate a piece of code by repeatedly running a block until a condition is met.

## for loop

Loop that runs a set number of times with initialization, condition, and update steps.

```js
for(initialisation; condition; updation){
    // do something
}

// example
for (let i = 1; i <= 5; i++) {
    console.log(i); // 1 2 3 4 5
}
```

### Nested for loop

```js
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 1; j <= 3; j ++) {
        console.log(j);
    }
}

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
```

## Infinite Loops

An infinite loop is a loop that never ends because its exit condition is never met or it lacks an exit condition altogether. This causes the loop to run indefinitely, which can freeze or crash programs if not controlled.

```js
// example
for (let i = 1; i >= 0; i++) {
}

for (let i = 1; i <= 5; i--) {
}

for (let i = 1; ; i++) {
}
```

## while loop

Runs a block of code repeatedly while a condition remains true.

```js
while (condition) {
    // do something
}

// example
let i = 1;
while (i <= 5) {
    console.log(i); // 1 2 3 4 5
    i++;
}
```

## break Keyword

Stops the loop immediately and exits it.

```js
let i = 1;
while (i <= 5) {
    if (i == 3) {
        break;
    }
    console.log(i); // 1 2
    i++;
}
```

## Loops with Arrays

Use loops to iterate through array elements one by one.

```js
let fruits = ["mango", "apple", "banana", "litchi", "orange"]

for (let i = 0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}
```

### Nested Loops with Nested Arrays

```js
let heroes = [["ironman", "spiderman", "thor"], ["superman", "batman", "flash"]];

for (let i = 0; i < heroes.length; i++) {
    console.log(`List #${i}`);
    for (let j = 0; j < heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}
```

## for of loop

Simpler syntax to loop over iterable objects like arrays or strings.

```js
for (element of collection) {
    // do something
}

// example
let fruits = ["mango", "apple", "banana", "litchi", "orange"]

for (fruit of fruits) {
    console.log(fruit);
}

for (char of "HelloWorld") {
    console.log(char);
}
```

### Nested for of loop

```js
let heroes = [["ironman", "spiderman", "thor"], ["superman", "batman", "flash"]];

for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}
```