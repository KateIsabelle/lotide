const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;



//code before refactoring:
// const eqArrays = function(array1, array2) {
//   array1 = JSON.stringify(array1);
//   array2 = JSON.stringify(array2);
//   return assertEqual(array1, array2);
// };