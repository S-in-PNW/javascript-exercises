const palindromes = function (input) {
    
    let newInput = input.replace(/[^a-z0-9]/gi, '')
    let i = newInput.length;
    const letterList =[];
    const letterSplitter = newInput.split('');
    
    const newArray = letterSplitter.map(element => {
        return element.toLowerCase();
    });

    const sample = letterSplitter.map(element => {
        return element.toLowerCase();
    });
    
    while (i > 0, i--) {
        letterList.push(newArray.pop());
    }
    
    console.log(sample);
    console.log(letterList);
    
    return JSON.stringify(sample)==JSON.stringify(letterList);

};

// Do not edit below this line
module.exports = palindromes;
