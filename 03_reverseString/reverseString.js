const reverseString = function reverseString(string) {

    arrayFromString = string.split("");
    reversedString = arrayFromString.reverse().join("");

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
