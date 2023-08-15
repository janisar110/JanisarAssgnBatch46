"use strict";
// checking a unique names in arrays
let current_users = ["janisar", "yasir", "wali", "fayyaz", "faaiz"];
let new_users = ["janisar", "fayyaz", "aliyan", "yasir", "wali"];
for (let x = 0; x < new_users.length; x++) {
    for (let y = 0; y < new_users.length; y++) {
        if (new_users[x] === current_users[y]) {
            console.log(`${new_users[x]} This username is already taken choose unique name`);
        }
    }
}
