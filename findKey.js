const findKey = function(object, callback) {
  if (!(object && object.constructor === Object) ||
   !(typeof callback === "function" || callback instanceof Function)) {
     return undefined;
   }
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};


module.exports = findKey;

