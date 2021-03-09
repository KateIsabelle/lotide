const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue()", () => {
  it("should return 'drama' if tv show is 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return 'Indonesia' if capital is 'Jakarta'", () => {
    const capitals = {
      Canada: "Ottawa",
      Germany: "Berlin", 
      Colombia: "Bogota",
      Indonesia: "Jakarta"
    }
    assert.equal(findKeyByValue(capitals, "Jakarta"), "Indonesia")
  });
  it("should return undefined if capital is 'Toronto'", () => {
    const capitals = {
      Canada: "Ottawa",
      Germany: "Berlin", 
      Colombia: "Bogota",
      Indonesia: "Jakarta"
    }
    assert.equal(findKeyByValue(capitals, "Toronto"), undefined)
  });
});
