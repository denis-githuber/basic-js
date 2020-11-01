const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strArr = [];

  if(options.repeatTimes != undefined) {
    while(strArr.length < options.repeatTimes) {
     strArr.push(String(str));
    }
  } else { 
    strArr.push(String(str));
  }

  /* addAddition */

  let additionArr = [];
  let additionCheck = '';

  if (options.addition !== undefined) {
    additionCheck += String(options.addition)
  }

  if (additionCheck != undefined) {
    if(options.additionRepeatTimes != undefined) {
      while(additionArr.length < options.additionRepeatTimes) {
        additionArr.push(additionCheck);
      }
    } else {
      additionArr.push(additionCheck);
    }
  } 

  let locAddition = '';
  if(options.additionSeparator != undefined) {
    locAddition += additionArr.join('' + options.additionSeparator);
  } else {
    locAddition += additionArr.join('|');
  }

  let result = strArr.map(element => {
    return element + locAddition;
  })

  if (options.separator == undefined) {
    return result.join('+');
  } else {
    return result.join('' + options.separator);
  }
};
  