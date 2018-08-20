let event = {
  name: 'Go Happy',
  guessCapacity: 100,
  guessCount: 99,
  checkAvailabilty(eventSize){
    let seatsLeft = this.guessCapacity - this.guessCount;
    return eventSize <=seatsLeft
  }
}
let status = event.checkAvailabilty(3);
console.log(status);


//String Methods 

let name = "Ezekiel";
console.log(name.length);
console.log(name.toUpperCase())


const isvalidPassword = function(test){
  return test.length > 8 && test.includes('password')
}

let result = isvalidPassword('passwor1234');
console.log(result);

//Number Methods

let num = 104.279;
let data = num.toFixed(1);
console.log(data);

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max-min) + 1) + min;
console.log(randomNum);

let guessGame = function(num){
  let min = 1;
  let max = 5;
  let radNum = Math.floor(Math.random * (max-min) + 1) + min;
  return num === radNum;
}
let myNum = guessGame(3);
console.log(myNum)