const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


//create empty array and empty object
//take `true` items out of itemsToCount and put keys into empty array;
//loop through this toCountArray and allItems array, 
//and if the elements match:
//if key does exist, update value += 1
//if there is no key, create key = 1
//return object
const countOnly = function (allItems, itemsToCount) {
  const toCountArray = [];
  const obj = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      toCountArray.push(item);
    }
  }
  for (let item of allItems) {
    for (let toCount of toCountArray) {
      if (item === toCount) {
        if (obj.hasOwnProperty(item)) {
          obj[item] += 1;
        } else {
          obj[item] = 1;
        }
      }
    }
  }
  return obj;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


