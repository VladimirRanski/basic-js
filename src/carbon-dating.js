const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693/HALF_LIFE_PERIOD;
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *sampleActivity
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const SA = Number(sampleActivity);
  if ((typeof(sampleActivity) != 'string') || (sampleActivity == '') || isNaN(SA) || (SA <= 0) || (SA > 15))  {
    return false;
  }

  return Math.ceil((Math.log(MODERN_ACTIVITY/SA))/K);


}

module.exports = {
  dateSample
};
