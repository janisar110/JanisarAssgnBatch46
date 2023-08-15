// use array and shrink array 

let myGuestArray17 = ["Shoaib","Ali","Farhan"]; 

let myInvitingmsg17:string = `I'm very exited to invite at dinner my friend ${myGuestArray17}`


console.log(myInvitingmsg17);

let message17:string = `but unfortunatly my friend ${myGuestArray17[2]} not come at dinner.Ithink invite another friend on dinner`

myGuestArray17.pop(); // remove last of element from the array

myGuestArray17.push("Zubair"); //add element  starting of array 


console.log(myGuestArray17);



console.log("Now I invite my 3 more precious friends on dinner");

myGuestArray17.push("Nadeem"); // add element end in array  
myGuestArray17.unshift("Saqlain"); // add element start in array 
myGuestArray17.splice(2,0,"Farman"); // add element middle or own choise in array



console.log(myGuestArray17);



console.log("Dinner table contain only two peoples so I can invite only two peoples from you");

myGuestArray17.splice(2,5);

console.log("my dear friends today's dinner for you ", myGuestArray17);

console.log("Sorry for inviting i have no friends empty", myGuestArray17.splice(2,2));





