"use strict";
//choose color and store in variable and apply conditions
//this condition is true for if block
let alienColor1 = "green";
console.log(`Color of alien is ${alienColor1}`);
if (alienColor1 == "green") {
    console.log("player earned 5 points for shooted alien");
}
else if (alienColor1 != "green") {
    console.log("The player  earn 10 points");
}
//this condition is true for else block
let alienColor2 = "yellow";
console.log(`Color of alien is ${alienColor2}`);
if (alienColor2 === "green") {
    console.log("player earned 5 points for shooted alien");
}
else {
    console.log("player has failed");
}
