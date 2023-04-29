'use strict';

function validateBrackets(bracketString) {
  let regex = /^[A-Za-z\s]*$/gm;
  let arr = [];

  for (let c in bracketString) {
    console.log(arr);
    if (!arr.length) {
      if (!bracketString[c].match(regex)) {
        arr.push(bracketString[c]);
      }
    }
    else {
      let lastChar = arr[arr.length - 1];
      if (lastChar === '(' && bracketString[c] === ')') {
        arr.pop();
      }
      else if (lastChar === '{' && bracketString[c] === '}') {
        arr.pop();
      }
      else if (lastChar === '[' && bracketString[c] === ']') {
        arr.pop();
      }
      else {
        if (!bracketString[c].match(regex)) {
          arr.push(bracketString[c]);
        }
      }
    }
  }
  if (arr.length) {
    return false;
  }
  else {
    return true;
  }
}

module.exports = {validateBrackets};
