const removeFromArray = function(myArray, ...removal) {

    myArray = myArray.filter( function( el ) {
        return removal.indexOf( el ) < 0;
    } );
    
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
