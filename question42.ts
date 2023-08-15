// copy of array from 41 question 
let magicianName1 = ["farhan","saqi","saddam","farman","nadeem"];


function showMagician(magicianName1:string[]){
    console.log(magicianName1);   
}
showMagician(magicianName1)



function makeGreat(value:string, index:number){

    magicianName1[index] = `The great magician ${value}`
    
}
magicianName1.forEach((item:string, index:number)=>{

    makeGreat(item,index)

})
 

showMagician(magicianName1)
