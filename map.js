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

const assertArraysEqual = function(array1, array2) {
  let assertion = eqArrays(array1, array2);
  if (assertion) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const firstLetter = map(words, word => word[0]);
const pigLatinify = map(words, word => {
  let piglatin = "";
  for (let l = 1; l < word.length; l++) {
    piglatin += word[l];
  }
  piglatin += `${word[0]}ay`;
  return piglatin;
});
const length = map(words, word => word.length);

assertArraysEqual(firstLetter, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(pigLatinify, ['roundgay', 'ontrolcay', 'otay', 'ajormay', 'omtay']);
assertArraysEqual(length, [6, 7, 2, 5, 3]);

