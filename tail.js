const tail = function(arr) {
  if (Array.isArray(arr)) {
    return arr.slice(1);
  } else {
    return undefined;
  }
};
console.log(tail());

module.exports = tail;







