var places : string[] = ['kashmir', 'hunza', 'sawat', 'lyari', 'quetta'];
console.log(places);

console.log("Alphabetically sorted array");
var sortedarray = [...places];
console.log(sortedarray.sort());
console.log("Orignal Array");
console.log(places);

console.log("=================================================================================");

console.log("Reverse Alphabetical Order array");
var reversearray = [...places];
reversearray.sort();
console.log(reversearray.reverse());
console.log("Orignal Array");
console.log(places);

console.log("=================================================================================");

console.log("Reverse Order array");
var reversearray = [...places];
console.log(reversearray.reverse());
console.log("Orignal Array");
console.log(places);

console.log("=================================================================================");

console.log("Back to orignal Order array");
var reversearray = [...places];
let reverseorder = reversearray.reverse();
console.log(reverseorder.reverse());
console.log("Orignal Array");
console.log(places);

console.log("=================================================================================");

console.log("Alphabeticaly sorted original array");
console.log(places.sort());
console.log("Orignal Array");
console.log(places);

console.log("=================================================================================");

console.log("Alphabeticaly reverse sorted original array");
console.log(places.reverse());
console.log("Orignal Array");
console.log(places);

console.log("=================================================================================");
