const myTodos = [
  {
    text: 'Write some code',
    completed: true
  },
  {
    text: "Visit udacity to complete Js tutorial",
    completed: false
  },
  {
    text: "Read Kyle Simpson's You don't know javascript",
    completed: true
  },
  {
    text: "Continue with my 100daysofCode",
    completed: false
  }
]


const incompleteTodos = myTodos.filter(function(todo){
  return todo.completed === false
})

let topHeading = document.createElement('h2')
topHeading.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(topHeading)

const eachTodo = myTodos.forEach(function(todo){
  const para = document.createElement('p')
  para.textContent = todo.text
  document.querySelector('body').appendChild(para)
})


document.querySelector('#add-btn').addEventListener('click', function(e){
  console.log('Todo added')
})

document.querySelector('#add-todo').addEventListener('input', function(e){
  console.log(e.target.value)
})