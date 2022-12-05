const findTheOldest = function(info) {
    
    let name = "";
    let age = 0;
    let i = 0;
    let dateNow = 2022;
    
    while(i < info.length) {
    
        let newAge = (info[i].yearOfDeath || dateNow) - info[i].yearOfBirth;
        
        if (newAge > age) {
            name = info[i].name;
            age = newAge;
        }

        i++
    }
        
    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
