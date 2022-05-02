const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * 
* `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
* `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
* `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
* `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) return ('\'arr\' parameter must be an instance of the Array!');

  let resArr = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]){
      case '--discard-next':
        i++;
        continue;
      case '--discard-prev':
        j--;
        continue;
      case '--double-next':
        if (arr[i+1] != undefined) {
          resArr[j] = arr[i+1];
          j++
        }
        continue;
      case '--double-prev':
        if (arr[i-1] != undefined) {
          resArr[j] = arr[i-1];
          j++
        }
        continue;
      default:
        resArr[j] = arr[i];
        j++;
    }

  }

  return (resArr);

}

module.exports = {
  transform
};
