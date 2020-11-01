const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if (members === null || Array.isArray(members) === false || typeof members != 'object' ) {
      return false;
  } else {
    members.forEach(element => {
        if (typeof element === 'string')
        result.push(element.replace(/\s/g, '').toUpperCase().slice(0,1));           
    });
    return result.sort().join('');
    }
};
