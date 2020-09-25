const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = 2 ** disksNumber - 1;
  
  return {
    turns: t,
    seconds: Math.floor(t / (turnsSpeed / 3600)),
  };
};
