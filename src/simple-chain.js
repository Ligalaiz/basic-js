const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push("" + value);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.arr.length ||
      typeof position != "number"
    ) {
      this.arr = [];
      throw new Error();
    }
    if (position == this.arr.length) this.arr.pop();
    else
      this.arr = this.arr
        .slice(0, position - 1)
        .concat(this.arr.slice(position));
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    for (let i = 0; i < this.arr.length; i++) {
      if (i == 0) {
        str += `( ${this.arr[i]} )`;
      } else {
        str += `~~( ${this.arr[i]} )`;
      }
    }
    this.arr = [];
    return str;
  }
};


module.exports = chainMaker;
