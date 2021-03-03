const eqArrays = function(array1, array2) {
  array1 = JSON.stringify(array1);
  array2 = JSON.stringify(array2);
  return array1 === array2;
};

const assertArraysEqual = function(array1, array2) {
  let assertion = eqArrays(array1, array2);
  if (assertion) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${array1} !== ${array2}`);
  }
};

//string toLowerCase
//loop through string and check if character is a letter (exclude spaces),
//if letter exists as object key, push it into array,
//else create object key with letter and give array value
const letterPosition = function(string) {
  string = string.toLowerCase();
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-zA-Z]/)) {
      if (Object.keys(obj).includes(string[i])) {
        obj[string[i]].push(i);
      } else {
        obj[string[i]] = [i];
      }
    }
  }
  return obj;
};

const example1 = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};
assertArraysEqual(letterPosition("Lighthouse in the HOUSE"), example1); //pass
assertArraysEqual(letterPosition("Lighthouse in the HOUS"), example1); //fail

//////////// don't forget to eslint! //////////////
