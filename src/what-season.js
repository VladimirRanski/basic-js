const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * весна — spring, лето — summer, осень — autumn (fall), зима — winter
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  if (typeof(date) != 'object') return ('Unable to determine the time of year!');
  // if (date.month === (null || Nan || undefined)) return ('Invalid date!');
  // year month day hour minute second millisecond

  if (date.month > 11 || date.month < 0) return ('Invalid date!');
  if (date.day > 31 || date.day < 0) return ('Invalid date!');
  if (date.hour > 23 || date.hour < 0) return ('Invalid date!');
  if (date.minute > 59 || date.minute < 0) return ('Invalid date!');
  if (date.second > 59 || date.second< 0) return ('Invalid date!');
  if (date.millisecond > 99 || date.millisecond < 0) return ('Invalid date!');

  let month = date.getMonth();
  

  switch (month) {
      case 11:
      case 0:
      case 1:
          return ('winter');
      case 2:
      case 3:
      case 4:
          return ('spring');
      case 5:
      case 6:
      case 7:
          return ('summer');
      case 8:
      case 9:
      case 10:
          return ('autumn');
  }
}

module.exports = {
  getSeason
};
