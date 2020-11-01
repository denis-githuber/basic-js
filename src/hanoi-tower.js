const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let result = {
      turns: 0,
      seconds: 0
    }
    
    let disk = 2**disksNumber - 1;
    let speeds = Math.floor(disk * 3600 / turnsSpeed);
 
    result.turns = disk;
    result.seconds = speeds

    return result;
};
