const middle = function(arr = []) {
  let middleArray = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      let index = arr.length/2;
      middleArray.push(arr[index-1], arr[index]);
    } else {
      let index = Math.floor(arr.length/2);
      middleArray.push(arr[index]);
    }
  }
  return middleArray;
}

module.exports = middle;


