const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  arr.forEach(element => {
    element.forEach(element => {
        if (element === '^^') {
          result++
        } 
    })
  });
return result;
};
