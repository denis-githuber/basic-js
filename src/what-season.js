const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(date == null) return 'Unable to determine the time of year!';
  if(!Object.prototype.toString.call(date).match(['object Date'])) throw new Error();

  const monthDate = date.getMonth();
  if (monthDate == 11 || monthDate == 0 || monthDate == 1) {
    return 'winter'
  } else if (monthDate == 2 || monthDate == 3 || monthDate == 4) {
     return 'spring'
  } else if (monthDate == 5 || monthDate == 6 || monthDate == 7) {
    return 'summer'
  } else if (monthDate == 8 || monthDate == 9 || monthDate == 10) {
    return 'fall'
  } 
};
