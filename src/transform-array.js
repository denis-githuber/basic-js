const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

if(Array.isArray(arr) != true) {throw new Error()};

let newArr = arr.slice();
let del = 'del';

  newArr.forEach((element, index) => {

    if (element == '--discard-next') {
      if (index != newArr.length - 1) {
        newArr[index] = del;
        newArr[index + 1] = del;
      } else {
        newArr[index] = del;
      }
    } else if (element == '--discard-prev') {

        if (index != 0) {
          newArr[index] = del;
          newArr[index - 1] = del;
        } else {
          newArr[index] = del;
        }
    } else if (element == '--double-next') {

      if (index != newArr.length - 1) {
        newArr[index] = newArr[index + 1]
      } else {
        newArr[index] = del
      }
    } else if (element == '--double-prev') {

      if (index != 0) {
        newArr[index] = newArr[index - 1]
      } else {
        newArr[index] = del;
      }
    }

  });
 
 return newArr.filter(element => {return element != del}) 

};
