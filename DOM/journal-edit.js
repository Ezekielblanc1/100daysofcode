const nameElement = document.querySelector('#name-title')
const producerElement = document.querySelector('#name-body')
const removeElement = document.querySelector('#remove-note')

const movieId = location.hash.substring(1)
const movies = getSavedJournal()
const movie = movies.find(function(journal){
  return journal.id === movieId
})

if(movie === undefined){
  location.assign('index.html')
}
nameElement.value = movie.name
producerElement.value = movie.producer

nameElement.addEventListener('input', function(e){
  movie.name = e.target.value
  saveMovie(movies)
})

producerElement.addEventListener('input', function(e){
  movie.producer = e.target.value 
  saveMovie(movies)
})

removeElement.addEventListener('click', function(){
  removeJournal(movie.id)
  saveMovie(movies)
  location.assign('index.html')
})

