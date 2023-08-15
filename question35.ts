//store animals name  in array more the 3 and print out their names with the help of loop 


let my_pets = ["cat","dog","horse","cow"];


for(let x=0; x<my_pets.length; x++)
{
    console.log(my_pets[x]);
    
}

for(let x=0; x<my_pets.length; x++)
{
    if(my_pets[x] === "dog")
    {
        console.log( my_pets[x] +" is good pets");
        
    }
    else if(my_pets[x] === "cat")
    {
        console.log(my_pets[x]+ " is very friendly pets");
        
    }

    else if(my_pets[x] === "horse")
    {
        console.log(my_pets[x]+ " good for rides outside");
        
    }
    else if(my_pets[x] === "cow")
    {
        console.log(my_pets[x]+ " provide milk every day");
        
    }

    
}

console.log(my_pets+" These pets is very friendly not harm");

