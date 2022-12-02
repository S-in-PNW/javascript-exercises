const fibonacci = function(x) {

    if (x < 0) {

        return "OOPS";

    } else {
        
        //Equation that calculates the FSequence up to the Requested number.

        let counter = 1;
        let lesser = 0;
        let greater = 1;
        let cup = 0;

        while (x > counter) {
            cup = greater;
            greater = greater + lesser;
            lesser = cup;
            counter++;
        }

        return greater;
    
    } 
    
};

// Do not edit below this line
module.exports = fibonacci;
