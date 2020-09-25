const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
    this.alph = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
  }
  encrypt(testStr, testKey) {
    if (!testStr || !testKey) throw new Error();
    let arrStr = testStr.toLowerCase().split("");
    let arrKey = testKey.toLowerCase().split("");
    let newArrKey = [];

    for (let i = 0, j = 0; i < arrStr.length; i++) {
      if (/[\W\d]/.test(arrStr[i])) {
        newArrKey.push(arrStr[i]);
      } else {
        newArrKey.push(arrKey[j]);
        j++;
        if (j == arrKey.length) j = 0;
      }
    }

    let result = [];
    for (let i = 0; i < arrStr.length; i++) {
      if (/[\W\d]/.test(arrStr[i])) {
        result.push(arrStr[i]);
      } else {
        let resultIndex =
          (this.alph.indexOf(arrStr[i]) + this.alph.indexOf(newArrKey[i])) % 26;
        result.push(this.alph[resultIndex]);
      }
    }
    return this.direct == false
      ? result
          .map(el => el.toUpperCase())
          .reverse()
          .join("")
      : result.map(el => el.toUpperCase()).join("");
  }

  decrypt(encrypted, testKey) {
    if (!encrypted || !testKey) throw new Error();
    let arrEncrypted = encrypted.toLowerCase().split("");
    let arrKey = testKey.toLowerCase().split("");
    let newArrKey = [];
    for (let i = 0, j = 0; i < arrEncrypted.length; i++) {
      if (/[\W\d]/.test(arrEncrypted[i])) {
        newArrKey.push(arrEncrypted[i]);
      } else {
        newArrKey.push(arrKey[j]);
        j++;
        if (j == arrKey.length) j = 0;
      }
    }
    let result = [];
    for (let i = 0; i < arrEncrypted.length; i++) {
      if (/[\W\d]/.test(arrEncrypted[i])) {
        result.push(arrEncrypted[i]);
      } else {
        let resultIndex =
          (this.alph.indexOf(arrEncrypted[i]) +
            26 -
            this.alph.indexOf(newArrKey[i])) %
          26;
        result.push(this.alph[resultIndex]);
      }
    }
    return this.direct == false
      ? result
          .map(el => el.toUpperCase())
          .reverse()
          .join("")
      : result.map(el => el.toUpperCase()).join("");
  }
}

module.exports = VigenereCipheringMachine;

