const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chein: [],

  getLength() {
    return this.length;
  },

  addLink(value) {
    if (value === undefined) {
       this.chein.push('( )');
       return this;
     } else {
       this.chein.push(String(value));
       return this;
     }
  },

  removeLink(position) {
    if (typeof position !== 'number' || Number.isInteger(position) == false || this.chein.length < position || position < -1) {
      this.chein = [];
      throw new Error ();
    } else {
      this.chein.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chein.reverse();
    return this
  },

  finishChain() {
   
    let copyMod = this.chein;
    let addBrackets = [];

    copyMod.forEach(element => {
      addBrackets.push('( ' + element + ' )')
    })

    this.chein = [];
    return addBrackets.join('~~');
  }
};

module.exports = chainMaker;
