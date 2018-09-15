//Get saved todos

const getSavedTodos = function(){
  const todoJSON = localStorage.getItem('todo')

if(todoJSON !== null){
  return JSON.parse(todoJSON)
  }else{
    return []
  }
}
//Save Todos
const saveTodos = function(todo){
  if(todo.length > 0){}
  localStorage.setItem('todo', JSON.stringify(myTodos))
}

//Render Todos

const renderTodos = function(todos, filters){
  const filteredTodos = myTodos.filter(function(todo){
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })
  debugger
  const incompleteTodos = filteredTodos.filter(function(todo){
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

 
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))


  filteredTodos.forEach(function(todo){
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })
}

const generateTodoDOM = function(todo){
  const mainEl = document.createElement('div')
  const todoCheckBox = document.createElement('input')
  const todoEl = document.createElement('span')
  const btnEl = document.createElement('button')

  //Set up the todo checkbox
  todoCheckBox.setAttribute('type', 'checkbox')
  mainEl.appendChild(todoCheckBox)
 
  //Set up todo text
  if(todo.text.length > 0){
    todoEl.textContent = todo.text
  }else{
    todoEl.textContent = 'Unnamed todo'
  }
  mainEl.appendChild(todoEl)
  //Set up remove button
  btnEl.textContent = 'x'
  mainEl.appendChild(btnEl)
  

 
   return mainEl
}

const generateSummaryDOM = function(incompleteTodos){
  let topHeading = document.createElement('h2')
  topHeading.textContent = `You have ${incompleteTodos.length} todos left`
  return topHeading
}

