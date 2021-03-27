const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor (revers) {
    this.revers = revers;
  }

  encrypt (message, key) {
    let mesLowreCase = message.toLowerCase();
    let mesToArr = mesLowreCase.replace(/\s/g, '').split('');
    let keyUp = key.padEnd(mesToArr.length, key).toLowerCase().split('');
    let count = 0;
    let keyUpSpace = []
    let result = [];

    mesLowreCase.split('').forEach (element => {
      
      if (/[a-zA-Z]/.test(element) == false) {
        keyUpSpace.push(element)
      } else {
        keyUpSpace.push(keyUp[count])
        count++ 
      }
    })

    mesLowreCase.split('').forEach((element, index) => {

      if(/[a-zA-Z]/.test(element) == false) {
        result.push(element)
      } else { 
          if( ((element.charCodeAt() - 97) + (keyUpSpace[index].charCodeAt() - 97)) >= 26 ) {
            result.push( String.fromCharCode( (element.charCodeAt() - 97) + (keyUpSpace[index].charCodeAt() - 97) + 97 - 26) )
          } else {
            result.push( String.fromCharCode( (element.charCodeAt() - 97) + (keyUpSpace[index].charCodeAt() - 97) + 97) )
          }
      }
    });

    if(this.revers == false) {
      return result.reverse().join('').toUpperCase();
    } else {
      return result.join('').toUpperCase();
    }
    
  }

  decrypt (message, key) {
    let mesLowreCase = message.toLowerCase();
    let mesToArr = mesLowreCase.replace(/\s/g, '').split('');
    let keyUp = key.padEnd(mesToArr.length, key).toLowerCase().split('');
    let count = 0;
    let keyUpSpace = []
    let result = [];

    mesLowreCase.split('').forEach (element => {
      
      if (/[a-zA-Z]/.test(element) == false) {
        keyUpSpace.push(element)
      } else {
        keyUpSpace.push(keyUp[count])
        count++ 
      }
    })

    mesLowreCase.split('').forEach((element, index) => {

      if(/[a-zA-Z]/.test(element) == false) {
        result.push(element)
      } else { 
          if( ((element.charCodeAt() - 97) - (keyUpSpace[index].charCodeAt() - 97)) < 0 ) {
            result.push( String.fromCharCode( (element.charCodeAt() - 97) - (keyUpSpace[index].charCodeAt() - 97) + 97 + 26) )
          } else {
            result.push( String.fromCharCode( (element.charCodeAt() - 97) - (keyUpSpace[index].charCodeAt() - 97) + 97) )
          }
      }
    });

    if(this.revers == false) {
      return result.reverse().join('').toUpperCase();
    } else {
      return result.join('').toUpperCase();
    }
  }

}

module.exports = VigenereCipheringMachine;


