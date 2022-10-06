const palindromes = function (exp) {
    let expArr = exp.toLowerCase().split("");
    let filtered = expArr.filter(item => 
        !([","," ","!","?","."].includes(item))
        );
    let orig = [...filtered];
    return arrayEquals(filtered.reverse(), orig);
};

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

// Do not edit below this line
module.exports = palindromes;
