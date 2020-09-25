const CustomError = require('../extensions/custom-error');

module.exports = function repeater(
  str,
  {
    separator = '+',
    additionRepeatTimes,
    addition,
    repeatTimes,
    additionSeparator,
  } = {}
) {
  let newStr = '';
  if (typeof additionRepeatTimes != 'undefined') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      i == 0
        ? (newStr += `${addition}`)
        : (newStr += `${additionSeparator}${addition}`);
    }
  }
  let result = '';
  if (typeof repeatTimes != 'undefined') {
    for (let i = 0; i < repeatTimes; i++) {
      if (i == 0) {
        result = newStr = `${str}${newStr}`;
      } else {
        result += `${separator}${newStr}`;
      }
    }
    return result;
  } else {
    return str + addition;
  }
};
