const findTheOldest = function(info) {

/*
1. grab age, and if it is larget than the previous, keep the name
2. return the name

1. search through array and pull the dates of birth and death
2. compare the ages, keep the highest age
3. return the name of the person with the highest age
*/

let name = "";
let age = 0;

while (i = 0, i < info.length, i++) {
    let newAge = info.yearOfDeath - info.yearOfBirth;
    if (newAge > age) {
        name = info.name;
        newAge = age;
    }
    console.log(name);
    console.log(age);
}

return name;
}

// Do not edit below this line
module.exports = findTheOldest;
