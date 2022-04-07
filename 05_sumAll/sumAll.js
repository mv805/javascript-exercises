const sumAll = function () {
    let num1 = arguments[0];
    let num2 = arguments[1];

    if (
        (num1 < 0 || num2 < 0) ||
        (typeof num2 !== 'number' || typeof num1 !== 'number')
    ) {
        return 'ERROR';
    }

    let firstIndex;
    let lastIndex;

    if (num1 > num2) {
        firstIndex = num2;
        lastIndex = num1;
    } else {
        firstIndex = num1;
        lastIndex = num2
    }
    let finalSum = 0;

    for (i = firstIndex; i <= lastIndex; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
