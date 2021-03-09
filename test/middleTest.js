const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle()", () => {
  it("returns ['fish', 'blue'] for ['red', 'fish', 'blue', 'fish']", () => {
    assert.deepEqual(middle(['red', 'fish', 'blue', 'fish']), ['fish', 'blue']);
  });
  it("returns [6] for [2, 4, 6, 8, 10]", () => {
    assert.deepEqual(middle([2, 4, 6, 8, 10]), [6]);
  });
  it("returns [] for ['hello']", () => {
    assert.deepEqual(middle(['hello']), []);
  });
  it("returns [] for ['hello', 'goodbye']", () => {
    assert.deepEqual(middle(['hello', 'goodbye']), []);
  });
  it("returns undefined for argument that is not array", () => {
    assert.deepEqual(middle("I am a string"), undefined);
  });
});