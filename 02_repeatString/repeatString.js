const repeatString = function(word, number) {
    const outputWord = [];
    if (number < 0) {
        return "ERROR";
    } else if (word === " ") {
        return " ";
    }
    while(number > 0, number--) {
        outputWord.push(word);
    }
    return outputWord.join("")

};

// Do not edit below this line
module.exports = repeatString;
