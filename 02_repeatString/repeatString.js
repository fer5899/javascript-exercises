const repeatString = function repeatString(string, num) {

    if (num >= 0) {
        repeatedString = "";

        for(let i = 0; i < num; i++) {
            repeatedString += string;
        }

        return repeatedString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
