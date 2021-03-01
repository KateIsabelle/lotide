const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

//test case to ensure original array is not modified:
let colours = ["green", "purple", "yellow"];
console.log(tail(colours));
console.log(colours);
assertEqual(colours.length, 3);

//use JSON.stringify to compare arrays
let array1 = [2, 4, 6, 8];
let array2 = [2, 4, 6, 8];
let a = JSON.stringify(tail(array1));
let b = JSON.stringify(tail(array2));

assertEqual(a, b);







