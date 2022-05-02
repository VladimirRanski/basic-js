const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str == '') return ('');
  let counter = 1,
      res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i+1]) {
      while (str[i] == str[i+1]) {
        counter++;
        i++;
      }
    }
    if (counter > 1) {
      res = res + String(counter)+str[i-1];
      counter = 1;
      continue;
    }
    res = res + str[i];

  }
  return (res);
}

module.exports = {
  encodeLine
};
