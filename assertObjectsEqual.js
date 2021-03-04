//checks if two arrays are equal
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//checks if two objects are equal
const eqObjects = function(object1, object2) {
  const obj1keys = Object.keys(object1);
  const obj2keys = Object.keys(object2);
  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  for (let key of obj1keys) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (obj1keys[key] !== obj2keys[key]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let assertion = eqObjects(actual, expected);
  if (assertion) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc); // true
assertObjectsEqual(cd, cd2); // false
