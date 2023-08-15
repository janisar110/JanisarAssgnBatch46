//Question no 6 create name varible store name with  whitespace use \n,\t starts and ends then print name.
// after (stripped) removing these whtie spaces then print 


let myName:string = "\t \n Janisar Mallah \n \t"

console.log("With whitespaces")
console.log(myName);


let myName6:string = myName.trim()
console.log("Without whitespaces")
console.log(myName6)