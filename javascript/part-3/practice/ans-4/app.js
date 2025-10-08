let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months); // ['july', 'june', 'march', 'august']