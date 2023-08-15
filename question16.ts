//using array and invite more 3 members on dinner use question 15 array


let myGuestArray16 = ["Shoaib","Ali","Farhan"]; 

let myInvitingmsg16:string = "I'm very exited to invite at dinner my friend "


console.log(myInvitingmsg16+myGuestArray16[2]); 
console.log(myInvitingmsg16+myGuestArray16[1]);
console.log(myInvitingmsg16+myGuestArray16[0]);

let message16:string = `but unfortunatly my friend ${myGuestArray16[2]} not come at dinner.Ithink invite another friend on dinner`

console.log(message16);

myGuestArray16.pop(); // remove last of element from the array

myGuestArray16.push("Zubair"); //add element  starting of array 



console.log(myInvitingmsg16+myGuestArray16[2]);
console.log(myInvitingmsg16+myGuestArray16[1]);
console.log(myInvitingmsg16+myGuestArray16[0]);


console.log("Now I invite my 3 more precious friends on dinner");

myGuestArray16.push("Nadeem"); // add element end in array  
myGuestArray16.unshift("Saqlain"); // add element start in array 
myGuestArray16.splice(2,0,"Farman"); // add element middle or own choise in array



console.log(myInvitingmsg16+myGuestArray16[0]);
console.log(myInvitingmsg16+myGuestArray16[1]);
console.log(myInvitingmsg16+myGuestArray16[2]);
console.log(myInvitingmsg16+myGuestArray16[3]);
console.log(myInvitingmsg16+myGuestArray16[4]);
console.log(myInvitingmsg16+myGuestArray16[5]);



