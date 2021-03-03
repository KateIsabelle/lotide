const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//string - remove spaces and tolowercase
//loop through string,
//if letter at index exists as object key, += 1,
//else create object key with letter name = 1
const countLetters = function(string) {
  string = string.replace(/\s/g, "").toLowerCase();
  let obj = {};
  for (let letter of string) {
    if (Object.keys(obj).includes(letter)) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
};

let example1 = countLetters("Lighthouse in the HOUSE");
assertEqual(example1["h"], 4);
assertEqual(example1["z"], undefined);
assertEqual(example1["n"], 1);
//don't forget to eslint!!