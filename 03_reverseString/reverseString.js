const reverseString = function(word) {
    let reversedWord = [];

    for (let char of word) {
        reversedWord.unshift(char);
    }

    return reversedWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
