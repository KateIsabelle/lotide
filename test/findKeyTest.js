const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey()", () => {
  it("should return 'Joe'", () => {
    const studentPerformance = {
      Sarah: { finalExam: 75 },
      Joe: { finalExam: 82 },
      Leah: { finalExam: 0 },
      Chris: { finalExam: 91 }
    };
    const callbackFunc = x => x.finalExam >= 80;
    assert.equal(findKey(studentPerformance, callbackFunc), 'Joe');
  });
  it("should return 'salad'", () => {
    const mealsPrep = {
      roastedChicken: { time: 60 },
      salad: { time: 10 },
      curry: { time: 30 },
      cereal: { time: 1 }
    };
    const callbackFunc = x => x.time < 20;
    assert.equal(findKey(mealsPrep, callbackFunc), 'salad')
  });
  it("returns undefined if only one argument passed", () => {
    const mealsPrep = {
      roastedChicken: { time: 60 },
      salad: { time: 10 },
      curry: { time: 30 },
      cereal: { time: 1 }
    };
    assert.equal(findKey(mealsPrep));
  });
  it("returns undefined if no arguments passed", () => {
    assert.equal(findKey());
  });
  // it("returns undefined if first argument is not an object", () => {
  //   const mealsPrep = [[roastedChicken, 60], [salad, 10]];
  //   const callbackFunc = x => x.time < 20;
  //   assert.equal(findKey(mealsPrep, callbackFunc));
  // }); 
  // ^^need to work on this some more 
  it("returns undefined if second argument is not a function", () => {
    const mealsPrep = {
      roastedChicken: { time: 60 },
      salad: { time: 10 },
      curry: { time: 30 },
      cereal: { time: 1 }
    };
    const callbackFunc = {eggs: 3.50, bread: 4, juice: 2.99}
    assert.equal(findKey(mealsPrep, callbackFunc));
  });
});