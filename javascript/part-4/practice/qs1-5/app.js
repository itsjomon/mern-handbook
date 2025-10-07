// Qs1.
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr); // Output: [1, 3, 4, 5, 6, 3]



// Qs2.
let number = 287152;
let count = 0;
let copy = number;
while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count); // Output: 6



// Qs3.
let number2 = 234728;
let sum = 0;
let copy2 = number2;
while(copy2 > 0) {
    digit = copy2 % 10;
    sum += digit;
    copy2 = Math.floor(copy2/10);
}
console.log(sum); // Output: 26



// Qs4.
let n = 5;
let factorial = 1;
for(let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`); // Output: factorial of 5 is 120



// Qs5.
let arr2 = [2,5,10,4,2,7,1,9];
let largest = 0;
for(let i = 0; i <= arr2.length; i++) {
    if(largest < arr2[i]) {
        largest = arr2[i];
    }
}
console.log(largest); // 10
