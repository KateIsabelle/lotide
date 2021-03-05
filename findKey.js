const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

let mealsPrep = {
  roastedChicken: { time: 60 },
  salad: { time: 10 },
  curry: { time: 30 },
  cereal: { time: 1 }
};



let studentPerformance = {
  Sarah: { finalExam: 75 },
  Joe: { finalExam: 82 },
  Leah: { finalExam: 0 },
  Chris: { finalExam: 91 }
};


assertEqual(findKey(studentPerformance, x => x.finalExam >= 80), 'Joe');
assertEqual(findKey(mealsPrep, x => x.time < 20), 'salad');
