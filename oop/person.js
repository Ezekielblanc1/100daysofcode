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

class PersonClass {
  constructor(name, lastname, age, likes){
    this.name = name;
    this.age = age;
    this.lastname = lastname;
    this.likes = likes || []
  }
  getBio() {
    let bio = `${this.name} is ${this.age}`
    this.likes.forEach((like)=>{
      bio += ` Likes ${like}`
    })
    return bio
  }
  setName(fullname) {
    const names = fullname.split(' ');
    this.name = names[0];
    this.lastname = names[1];
  }
}

class Teacher extends PersonClass{
  constructor(name, lastname, age, likes,position){
    super(name,age,lastname, likes)
    this.position = position
  }
  getBio() {
    return `${this.name}, ${this.lastname} is a ${this.position}`
  }
  yearsLeft(){
    return 65 - this.age;
  }
}


class Student extends PersonClass {
  constructor(name, lastname, age, grade, likes){
    super(name, lastname, age)
    this.grade = grade
  }
  updateGrade(upgrade){
    this.grade += upgrade
  }

  getBio() {
    const status = this.grade >=70;
    if(status){
      return `${this.name} is Passing the class`
    } else {
      return `${this.name} is Failing the class`
    }
  }
}

const summary = new Student('George', 'Ken', 54, 98, []);
console.log(summary.getBio())
summary.updateGrade(-30);
console.log(summary.getBio())

