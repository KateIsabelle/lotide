const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

///test: 
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
const modeOfTransport = {
  train: "visit mom",
  bus: "go to work, winter",
  bike: "go to work, summer",
  walk: "depanneur",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(modeOfTransport, "visit mom"), "train");
assertEqual(findKeyByValue(modeOfTransport, "go to work, summer"), "bike");
assertEqual(findKeyByValue(modeOfTransport, "island"), undefined);
