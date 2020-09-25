const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  members.forEach(el => {
    if (typeof el === "string") {
      let str = el.replace(/^\s+/g, "");
      arr.push(str[0].toUpperCase());
    }
  });
  return arr.sort().join("");
};
