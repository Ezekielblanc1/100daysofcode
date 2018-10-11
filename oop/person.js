const Person = function(firstname, lastname, age){
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

Person.prototype.getBio = function(){
  return `${this.firstname} is ${this.age} years old`
}

const data = new Person('Ezekiel', 'Blanc', 13)
console.log(data.getBio())
const data1 = new Person('Emeka', 'Kelvin', 24)
console.log(data1.getBio())
