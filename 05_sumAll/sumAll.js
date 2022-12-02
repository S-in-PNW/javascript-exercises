const sumAll = function(first, second) {
    
    //variable declarations

    let final = 0;
    //console.log(typeof first);
    //console.log(typeof second);
    //first = parseInt(first);
    //second = parseInt(second);


    //loops

    if (isNumber(first) && isNumber(second)) {
       
        if (first < second) {
            first = first - 1;

            while (first != second){
            sumAll(first, second)
            second--
            }

        }else if (second < first) {
            second = second - 1;

            while (second != first){
            sumAll(second, first)
            first--
            }
            
        }

        return final; 

    } else {
        return "ERROR"
    }


    //functions

    function isNumber(n) {
        return !isNaN(n) && !isNaN(n - 0) && n > -1 && typeof n === 'number';
    }

    function sumAll(one, two) {
        final = final + two;
        //console.log(one + " first")
        //console.log(two + " second")
    }

};

// Do not edit below this line
module.exports = sumAll;
