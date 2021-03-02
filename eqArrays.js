const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
    //console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return false;
    //console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  array1 = JSON.stringify(array1);
  array2 = JSON.stringify(array2);
  return assertEqual(array1, array2);
};
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // returns true
console.log(eqArrays([1, 2, "3"], [1, 2, 3])); // returns false