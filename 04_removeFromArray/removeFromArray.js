const removeFromArray = function removeFromArray() {

    startArray = arguments[0];
    resultArray = startArray;
    for (let i = 1; i < arguments.length; i++) {
        // Find index of the element in the argument
        index = startArray.indexOf(arguments[i]);
        // If an element was found, remove it
        if (index !== -1) {
            resultArray.splice(index,1);
        }
    }

    return resultArray;

};

// Do not edit below this line
module.exports = removeFromArray;
