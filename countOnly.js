const countOnly = function (allItems, itemsToCount) {
  if (!Array.isArray(allItems) || !(itemsToCount && itemsToCount.constructor === Object)) {
    return undefined;
  }
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

module.exports = countOnly;


