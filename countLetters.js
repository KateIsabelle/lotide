//string - remove spaces and tolowercase
//loop through string,
//if letter at index exists as object key, += 1,
//else create object key with letter name = 1
const countLetters = function(string) {
  if (typeof string !== "string" || !string) {
    return undefined;
  }
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

console.log(countLetters("Lighthouse in the house"));

module.exports = countLetters;
