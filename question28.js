"use strict";
// conditions on age stage 
let age_stage = 20;
if (age_stage <= 2) {
    console.log("The person is a baby");
}
else if (age_stage == 2 || age_stage <= 4) {
    console.log("The person is tollder");
}
else if (age_stage == 4 || age_stage <= 13) {
    console.log("The person is kid");
}
else if (age_stage == 13 || age_stage <= 20) {
    console.log("The person is teenager");
}
else if (age_stage == 20 || age_stage <= 65) {
    console.log("The person is adult");
}
else if (age_stage >= 65) {
    console.log("The person is elder");
}
