"use strict";
// stores some cities mames in array and sort different ways are following 
let citiesNames = ["karachi", "hyderabad", "lahore", "naushehro feroz", "islamabad"];
// print array in original way
console.log(citiesNames);
//print array in alphabaticaly order and using ... because create copy of array 
console.log([...citiesNames].sort());
//print array in original order 
console.log(citiesNames);
//print array in reverse alphabaticaly order and using ... because create copy of array 
console.log([...citiesNames].sort().reverse());
// print array in original order 
console.log(citiesNames);
//reverse the order of your list 
citiesNames.sort().reverse();
console.log(citiesNames);
//again apply reverse function so array will back
citiesNames.reverse();
console.log(citiesNames);
