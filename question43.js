// copy of array from 41,42 question
var magicianName2 = ["farhan", "saqi", "saddam", "farman", "nadeem"];
function showMagician(magicianName2) {
    console.log(magicianName2);
}
showMagician(magicianName2);
function makeGreat(value, index) {
    magicianName2[index] = "The great magician ".concat(value);
}
magicianName2.map(function (item, index) {
    makeGreat(item, index);
});
showMagician(magicianName2);
//original array 
console.log(magicianName2);
