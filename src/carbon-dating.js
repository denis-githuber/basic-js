const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

    if(typeof sampleActivity != "string" || +sampleActivity == NaN) {
      return false;
    } else if (isNaN(parseInt(sampleActivity)) == true) {
      return false; 
   } else if(parseInt(sampleActivity) <= 0 || parseInt(sampleActivity) > 20 || (parseInt(sampleActivity) ^ 0) === parseInt(sampleActivity) ) {
      return false;
   } else {
      let firstParametr = 0.693/HALF_LIFE_PERIOD;
      let result = Math.log2((MODERN_ACTIVITY/parseInt(sampleActivity)) / firstParametr);
  
      return result;
    }
  
};
