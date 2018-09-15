let myTodos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
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
  saveTodos(myTodos)
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