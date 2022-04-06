const repeatString = function (word, repetitions) {

    if (repetitions < 0) {
        return 'ERROR';
    }

    let returnString = [];

    for (let i = 1; i <= repetitions; i++) {
        returnString.push(word);
    }

    return returnString.join('');
};

// Do not edit below this line
module.exports = repeatString;
