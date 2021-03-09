
const flatten = function(arr) {
 for (let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr[i])) {
     let removed = arr.splice(i, 1);
     for (let r = removed.length-1; r >= 0; r--) {
      arr.splice(i, 0, ...removed[r])
     }
   }
 }
 return arr;
}

module.exports = flatten;


