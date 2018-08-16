let firstName = "Ezekiel";
let lastName = "blanc";
let fullName = firstName + "" + lastName;
// console.log(fullName);

//First challenge 
let city = "Portharcourt";
let country = "Nigeria";
let location = city + ", "+ country;
// console.log(location)


//Temp converter

let fahrenheit = 32;
let celsuis = (fahrenheit -32) * 5/9;
let kelvin = (fahrenheit +459.67) * 5/9;
console.log(celsuis);
console.log(kelvin)

//Score calculator

let score = 100;
let totalScore = 35;
let finalScore = totalScore/score
console.log(finalScore);

//if statements

let age = 65;

if(age<=17){
    console.log("Discount for child")
}
if(age>=65){
    console.log("Discount for senior")
}


//Variable scope 

let name = "Mark";
if(true){
    let name = "Titus"
    console.log(name);//Prints Titus
}
console.log(name)//Prints Mark

