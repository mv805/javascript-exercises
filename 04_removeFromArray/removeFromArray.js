const removeFromArray = function () {

    let returnArray = arguments[0];

    for (let i = 1; i < arguments.length; i++) {//loop through arguments to remove 
        for (let j = 0; j < returnArray.length; j++) {
            if (returnArray[j] === arguments[i]) {
                returnArray.splice(j, 1);
                j--;
            }
        }
    }
    return returnArray;
};



// Do not edit below this line
module.exports = removeFromArray;
