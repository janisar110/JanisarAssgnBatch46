"use strict";
// create a array at least five usernames and apply conditions 
let myUsers = ["admin", "janisar110", "nadeem12", "ali55", "farman110"];
for (let x = 0; x < myUsers.length; x++) {
    if (myUsers[x] === "admin") {
        console.log(`hello ${myUsers[x]} would you like to see a status report?`);
    }
    else {
        console.log(`hello ${myUsers[x]} thank you for logging again`);
    }
}
