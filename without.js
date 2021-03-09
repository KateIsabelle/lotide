const without = function(arr, remove) {
  let withoutArr = [...arr];
  for (let i = 0; i < withoutArr.length; i++) {
    for (let j of remove) {
      if (withoutArr[i] === j) {
        withoutArr.splice(i, 1)
      }
    }
  }
  return withoutArr;
}

module.exports = without;

// assertArraysEqual(without([2,3,4], [4]), [2,3]);
// assertArraysEqual(without([1,3,2,'hello'],[1,2]), [3,'hello']);
// assertArraysEqual(without([], ['lighthouse']), []);
// assertArraysEqual(without([2,3,4], []), [2,3,4]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);