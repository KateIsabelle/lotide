//const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')
const tail = require('../tail');

assertArraysEqual(tail([1,2,3]), [2,3]);
assertArraysEqual(tail(["hello", "goodbye", "adios"]), ["goodbye", "adios"]);
console.log("should fail>")
assertArraysEqual(tail([1,2,3,4]), [3,4]);


