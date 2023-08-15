// copy of array from 41 question 
var magicianName1 = ["farhan", "saqi", "saddam", "farman", "nadeem"];
function showMagician(magicianName1) {
    console.log(magicianName1);
}
showMagician(magicianName1);
function makeGreat(value, index) {
    magicianName1[index] = "The great magician ".concat(value);
}
magicianName1.forEach(function (item, index) {
    makeGreat(item, index);
});
showMagician(magicianName1);
