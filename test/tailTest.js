const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail()', () => {
  it('should return [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('should return ["goodbye", "adios"] for ["hello", "goodbye", "adios"]', () => {
    assert.deepEqual(tail(["hello", "goodbye", "adios"]), ["goodbye", "adios"]);
  });
  it('should not return [3, 4] for [1, 2, 3, 4]', () => {
    assert.notDeepEqual(tail([1, 2, 3, 4]), [3, 4]);
  });
  it('should return undefined for input that is not array', () => {
    assert.equal(tail("hello"), undefined);
  });
  it('should return undefined if no argument passed', () => {
    assert.equal(tail(), undefined);
  });
})

// const assertArraysEqual = require('../assertArraysEqual')
// assertArraysEqual(tail([1,2,3]), [2,3]);
// assertArraysEqual(tail(["hello", "goodbye", "adios"]), ["goodbye", "adios"]);
// console.log("should fail>")
// assertArraysEqual(tail([1,2,3,4]), [3,4]);


