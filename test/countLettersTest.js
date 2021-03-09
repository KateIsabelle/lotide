const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters()", () => {
  it("returns 4 for 'h' key of object made from 'Lighthouse in the HOUSE'", () => {
    const example = countLetters("Lighthouse in the HOUSE");
    assert.equal(example["h"], 4);
  });
  it("returns undefined for 'z' key of 'Lighthouse in the HOUSE'", () => {
    const example = countLetters("Lighthouse in the HOUSE");
    assert.equal(example["z"], undefined);
  });
  it("returns undefined if argument type of is not string", () => {
    assert.equal(countLetters(123), undefined);
  });
  it("returns indefined if argument is empty string", () => {
    assert.equal(countLetters(""), undefined);
  });
});