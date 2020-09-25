const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let cur = 1;
    let depth = 1;
    for (let val of arr) {
      if (Array.isArray(val)) {
        cur = 1 + this.calculateDepth(val, cur);
      }
      if (cur > depth) depth = cur;
    }
    return depth;
  }
};