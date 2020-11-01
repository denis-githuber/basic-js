const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let currCount = 1;
    let count = 1;

    arr.forEach(element => {
      if(Array.isArray(element) == true) {
        currCount = 1 + this.calculateDepth(element);

        if (currCount > count) {
        count = currCount;
       }
      }
    })

  

    return count;
  }
};