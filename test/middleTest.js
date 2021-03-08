const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle(["red", "fish", "blue", "fish"]), ["fish", "blue"]);
assertArraysEqual(middle([2,4,6,8,10]), [6]);
assertArraysEqual(middle(), []);
//assertArraysEqual(middle(["hello", 123, [], "goodbye"]), [123, []]); 
//^assertArraysEqual does not yet work with nested arrays 