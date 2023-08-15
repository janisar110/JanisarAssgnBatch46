//Question no 3 person's name in uppercase, lowercase, titlecase

let name2:string = "janisar mallah"

//lowercase
let lowercaseName = name2.toLowerCase()

console.log(lowercaseName)
//uppercase

let uppercaseName = name2.toUpperCase()
console.log(uppercaseName)
//titlecase
let newName = name2.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(newName)