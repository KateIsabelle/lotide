const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const firstLetter = map(words, word => word[0]);
// const pigLatinify = map(words, word => {
//   let piglatin = "";
//   for (let l = 1; l < word.length; l++) {
//     piglatin += word[l];
//   }
//   piglatin += `${word[0]}ay`;
//   return piglatin;
// });
// const length = map(words, word => word.length);

// assertArraysEqual(firstLetter, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(pigLatinify, ['roundgay', 'ontrolcay', 'otay', 'ajormay', 'omtay']);
// assertArraysEqual(length, [6, 7, 2, 5, 3]);

