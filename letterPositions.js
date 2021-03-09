//string toLowerCase
//loop through string and check if character is a letter (exclude spaces),
//if letter exists as object key, push it into array,
//else create object key with letter and give array value

const letterPosition = function(string) {
  string = string.toLowerCase();
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-zA-Z]/)) {
      if (Object.keys(obj).includes(string[i])) {
        obj[string[i]].push(i);
      } else {
        obj[string[i]] = [i];
      }
    }
  }
  return obj;
};

module.exports = letterPosition;


