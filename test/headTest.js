const assertEqual = require('../assertEqual')
const head = require('../head');

assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
assertEqual(head([]), 5); // fail
assertEqual(head([5,6,7]), 6); // fail

