let flatten = require('../flatten');
let assert = require('chai').assert;

describe("#flatten()", () => {
  it("should return [1, 2, 3, 4, 5]", () => {
    const array = [[1, 2,], 3, [4, 5]];
    assert.deepEqual(flatten(array), [1, 2, 3, 4, 5])
  });
})
