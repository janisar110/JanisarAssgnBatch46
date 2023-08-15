//create funtion describe_cities with two parameters city name and country name and country name by default value putted 

function describe_cities(cityName:string, countryName:string = "Pakistan"){

    console.log(`${cityName} is in ${countryName}`);
    
}

//call functions

describe_cities("karachi")
describe_cities("Islamabad")
describe_cities("Hyderabad")