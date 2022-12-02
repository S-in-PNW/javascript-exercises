const reverseString = function(input) {
    if (input === "") {
        return "";
    }

    let i = input.length;
    const letterList =[];
    const letterSplitter = input.split('');

    while (i > 0, i--) {
        letterList.push(letterSplitter.pop());
    }
    return letterList.join("");
};

// Do not edit below this line
module.exports = reverseString;
