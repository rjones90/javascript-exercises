const sumAll = function(numberOne, numberTwo) {
    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) {
        return "ERROR";
    }
    if (numberOne < 0 || numberTwo < 0 ){
        return "ERROR";
    }
    if (numberOne > numberTwo) {
        const tempNumber = numberOne;
        numberOne = numberTwo;
        numberTwo = tempNumber;
    }
let sum = 0;
for (let i = numberOne; i <= numberTwo; i++){
    sum += i;
}

return sum;
}

// Do not edit below this line
module.exports = sumAll;
