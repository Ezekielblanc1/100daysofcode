const add = (num) =>{
  return num + num
}

console.log(add(5))


const people = [{
  name: 'Eazi',
  age: 25
},{
  name: 'Mike',
  age: 27
},{
  name: 'Dan',
  age: 37
}]

// const persons = people.filter((person)=> person.age < 30)
// console.log(persons)

const persons = people.find((person)=> person.age === 37)
console.log(persons.name)

