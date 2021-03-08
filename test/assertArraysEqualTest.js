const assertArraysEqual = require('../assertArraysEqual')

console.log("should pass>")
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
console.log("should fail>")
assertArraysEqual([1, 2, "3"], [1, 2, 3]); // fail
console.log("should fail>")
assertArraysEqual([1, 3, 2], [1, 2, 3]); // fail
assertArraysEqual([], ""); // fail
