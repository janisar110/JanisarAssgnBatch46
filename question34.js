"use strict";
//pizza names store in array and print with own lines
let my_pizza = ["chicken fajita", "Malai Boti Pizza", "Cheese pizza"];
for (let x = 0; x < my_pizza.length; x++) {
    console.log(my_pizza[x]);
}
for (let x = 0; x < my_pizza.length; x++) {
    if (my_pizza[x] === "chicken fajita") {
        console.log(`${my_pizza[x]} I eat daily in lunch time`);
    }
    else if (my_pizza[x] === "Malai Boti Pizza") {
        console.log(`${my_pizza[x]} I eat every weekend i like it`);
    }
    else if (my_pizza[x] === "Cheese pizza") {
        console.log(`${my_pizza[x]} I like this flavour I eat every tour with friends`);
    }
}
console.log("How much you like pizza");
console.log(my_pizza.length);
for (let x = 0; x < my_pizza.length; x++) {
    console.log(my_pizza[x]);
}
console.log("I realy love pizza!");
