
//Check for existing data(Read,check & parse)
const getSavedJournal = function(){
  const movieJSON = localStorage.getItem('movie')

  if(movieJSON !== null){
  return JSON.parse(movieJSON)
  }else{
    return []
  }
}

//Remove individual
const removeJournal = function(id){
  const journalIndex = movies.findIndex(function(movie){
    return movie.id === id
  })
  if(journalIndex > -1){
    movies.splice(journalIndex, 1)
  }
  saveMovie(movies)
}
//Save the movie data to local storage

const saveMovie = function(movie){
  localStorage.setItem('movie', JSON.stringify(movies))
}

//Generate The movie DOM element

const generateDOM = function(movie){
  const movieEl = document.createElement('div')
  const textEl = document.createElement('span')
  const button = document.createElement('button')
  //Set up the remove buton
  button.textContent = 'x'
  movieEl.appendChild(button)

  button.addEventListener('click', function(){
    removeJournal()
    saveMovie(movies)
    renderMovies(movies, filters)
  })
//Set up the text for the paragraph
  if(movie.name.length > 0){
    textEl.textContent = movie.name
  }else{
    textEl.textContent = 'Unnamed movie'
  }

  movieEl.appendChild(textEl)
  return movieEl
  
}

//Render movie application


const renderMovies = function(movie,filters){
  const filteredMovies = movies.filter(function(movie){
    return movie.name.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  

  document.querySelector('#journal').innerHTML = ''//To clear out of date data
  filteredMovies.forEach(function(movie){
   const movieEl = generateDOM(movie)
    document.querySelector('#journal').appendChild(movieEl)
  })
}

