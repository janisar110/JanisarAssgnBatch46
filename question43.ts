// copy of array from 41,42 question
let magicianName2 = ["farhan","saqi","saddam","farman","nadeem"];


function showMagician(magicianName2:string[]){
    console.log(magicianName2);   
}
showMagician(magicianName2)



function makeGreat(value:string, index:number){

    magicianName2[index] = `The great magician ${value}`
    
}
magicianName2.forEach((item:string, index:number)=>{

    makeGreat(item,index)

})
 

showMagician(magicianName2)

//original array 

console.log(magicianName2);
