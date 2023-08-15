//create array and store usernames after clear all elements from the array



let myUsers1 = ["admin","janisar110","nadeem12","ali55","farman110"];

console.log(myUsers1);


if(myUsers1.length === 0){
    console.log("we need to find some users");
    
}
else{
    console.log("users are available");

}

// now clear all elements from the array

myUsers1.splice(0,myUsers1.length)

console.log(myUsers1);

if(myUsers1.length === 0){
    console.log("we need to find some users");
    
}
else{
    console.log("users are available");
}

