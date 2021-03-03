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
//loop through elements in array passed
//if element is an array, then .splice it,
//and loop through removed array, and put the elements back in 
//using reverse loop (so as to maintain index order)
const flatten = function(arr) {
 for (let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr[i])) {
     let removed = arr.splice(i, 1);
     for (let r = removed.length-1; r >= 0; r--) {
      arr.splice(i, 0, ...removed[r])
     }
   }
 }
 return arr;
}


console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([[1], 2, 3, [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([["hello", "bonjour", "hola"], ["goodbye", "au revoir", "adios"]]), ["hello", "bonjour", "hola", "goodbye", "au revoir", "adios"]);