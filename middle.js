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

const middle = function(arr = []) {
  let middleArray = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      let index = arr.length/2;
      middleArray.push(arr[index-1], arr[index]);
    } else {
      let index = Math.floor(arr.length/2);
      middleArray.push(arr[index]);
    }
  }
  return middleArray;
}

assertArraysEqual(middle(["red", "fish", "blue", "fish"]), ["fish", "blue"]);
assertArraysEqual(middle([2,4,6,8,10]), [6]);
assertArraysEqual(middle(["hello", 123, [], "goodbye"]), [123, []]);
assertArraysEqual(middle(), []);