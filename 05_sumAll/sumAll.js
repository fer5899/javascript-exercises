const sumAll = function(firstRangeLimit, secondRangeLimit) {

    sum = "ERROR";
    if ((typeof firstRangeLimit === "number") 
        && (typeof secondRangeLimit === "number")
        && (firstRangeLimit >= 0)
        && (secondRangeLimit >= 0)) {

        if (firstRangeLimit <= secondRangeLimit) {
            lowerLimit = firstRangeLimit;
            upperLimit = secondRangeLimit;
        } else {
            lowerLimit = secondRangeLimit;
            upperLimit = firstRangeLimit;
        }

        sum = 0;

        for (let i = lowerLimit; i <= upperLimit; i++) {
            sum += i;
        }
    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
