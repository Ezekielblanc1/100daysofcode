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

const filters = {
  searchText: '',
  hideCompleted: false
}


const renderTodos = function(todos, filters){
  const filteredTodos = myTodos.filter(function(todo){
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter(function(todo){
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

  let topHeading = document.createElement('h2')
  topHeading.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector('#todos').appendChild(topHeading)


  filteredTodos.forEach(function(todo){
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('#todos').appendChild(todoEl)
  })
}


renderTodos(myTodos, filters)


document.querySelector('#add-todo').addEventListener('input', function(e){
  // console.log(e.target.value)
  filters.searchText = e.target.value
  renderTodos(myTodos, filters)
})


document.querySelector('#myForm').addEventListener('submit', function(e){
  e.preventDefault()
  myTodos.push({
    text: e.target.elements.todosName.value,
    completed: false
  })
  renderTodos(todos, filters)
  e.target.elements.todosName.value = ''
})

document.querySelector('#Hide-completed').addEventListener('change', function(e){
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})



document.querySelector('#add-btn').addEventListener('click', function(e){
  console.log('Todo added')
})
//  