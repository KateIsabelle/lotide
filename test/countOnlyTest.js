const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [ // all items
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
const namesToCount = { //items to count
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
}

describe("#countOnly()", () => {
  it("should return 1 for 'Jason' key of resulting object if taking in firstNames, and namesToCount", () => {
    let example = countOnly(firstNames, namesToCount);
    assert.equal(example['Jason'], 1);
  });
  it("should return 2 for 'Fang' key of resulting object if taking in firstNames, and namesToCount", () => {
    let example = countOnly(firstNames, namesToCount);
    assert.equal(example['Fang'], 2);
  });
  it("should return undefined for 'Karima' key from namesToCount object", () => {
    let example = countOnly(firstNames, namesToCount);
    assert.equal(example['Karima'], undefined);
  });
  it("should return undefined for 'Agouhanna' key from firstName array", () => {
    let example = countOnly(firstNames, namesToCount);
    assert.equal(example['Agouhanna'], undefined);
  });
  it("should return undefined if one argument is missing", () => {
    let example = countOnly(firstNames);
    assert.equal(example, undefined);
  });
  it("should return undefined if both arguments are missing", () => {
    let example = countOnly(firstNames);
    assert.equal(example, undefined);
  });
});