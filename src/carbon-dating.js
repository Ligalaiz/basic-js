const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity < 1
  )
    return false;

  let a = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  let k = 0.693 / HALF_LIFE_PERIOD;
  return isNaN(Math.ceil(a / k)) ? false : Math.ceil(a / k);
};