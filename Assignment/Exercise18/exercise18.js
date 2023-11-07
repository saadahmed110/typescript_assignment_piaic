var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['kashmir', 'hunza', 'sawat', 'lyari', 'quetta'];
console.log(places);
console.log("Alphabetically sorted array");
var sortedarray = __spreadArray([], places, true);
console.log(sortedarray.sort());
console.log("Orignal Array");
console.log(places);
console.log("=================================================================================");
console.log("Reverse Alphabetical Order array");
var reversearray = __spreadArray([], places, true);
reversearray.sort();
console.log(reversearray.reverse());
console.log("Orignal Array");
console.log(places);
console.log("=================================================================================");
console.log("Reverse Order array");
var reversearray = __spreadArray([], places, true);
console.log(reversearray.reverse());
console.log("Orignal Array");
console.log(places);
console.log("=================================================================================");
console.log("Back to orignal Order array");
var reversearray = __spreadArray([], places, true);
var reverseorder = reversearray.reverse();
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
