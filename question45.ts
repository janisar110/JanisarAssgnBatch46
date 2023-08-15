// create function and  create object store car info using 


function carInfo(manufacturer:string, model:string, color?:string){
    let carData = {
        manufacturer1: manufacturer,
        model1:model
    }

   return carData
}

let CarInfo = carInfo("Toyota port qasim","2022");

console.log(CarInfo);
