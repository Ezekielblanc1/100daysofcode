// const userAge = 14;
// const message = userAge >=18 ? 'You can drive': 'You cannot drive'


// console.log(message)

const myAge = 16;

const showPage = () => {
  return 'You can see page'
}

const errorPage = () => {
  return 'Error page'
}

const result = myAge >=18 ? showPage() : errorPage()
console.log(result)

const team = ['Hazard', 'Willian', 'Kante', 'Jorginho'];
const message = team.length <= 4 ?  `Team size: ${team.length}`: 'Too many people on your team'
console.log(message);