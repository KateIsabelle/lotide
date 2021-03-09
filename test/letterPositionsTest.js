const assert = require('chai').assert;
const letterPosition = require('../letterPositions');

// const example1 = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// };

describe("#letterPosition()", () => {
  it("should", () => {
    const example = letterPosition("Lighthouse in the HOUSE");
    assert.deepEqual(example["t"], [4, 14]);
  });
})