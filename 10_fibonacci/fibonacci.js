const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if (typeof num === "string") num = parseInt(num);
    let fibCurr = 0;
    let fibNext = 1;
    let temp;
    for(let i = 0; i < num; i++) {
        temp = fibNext;
        fibNext = fibCurr + fibNext;
        fibCurr = temp;
    }

    return fibCurr;
};

// Do not edit below this line
module.exports = fibonacci;
