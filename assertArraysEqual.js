const eqArrays = function (array1, array2) {
  array1 = JSON.stringify(array1);
  array2 = JSON.stringify(array2);
  return array1 === array2;
  
};

const assertArraysEqual = function (array1, array2) {
  let assertion = eqArrays(array1, array2);
  if (assertion) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, "3"], [1, 2, 3]); // fail
assertArraysEqual([1, 3, 2], [1, 2, 3]); // fail