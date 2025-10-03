// qs5
let months= ["january", "july", "march", "august"];
console.log(months.splice(0, 2, "july", "june"));
console.log(months); // (4) ['july', 'june', 'march', 'august']

// qs6
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("javascript")); // 4