const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let numberOfMoves = 0;

  for (let i = 1; i <= disksNumber; i++) {
    numberOfMoves += numberOfMoves + 1;
  }

  const time = Math.floor((numberOfMoves / turnsSpeed) * 3600);

  return({ turns: numberOfMoves, seconds: time });
}

module.exports = {
  calculateHanoi
};
