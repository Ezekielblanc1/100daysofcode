const nameElement = document.querySelector('#name-title')
const producerElement = document.querySelector('#name-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('last-edited')

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
dateElement.textContent = generateTimeStamp(movie.updatedAt)
nameElement.addEventListener('input', function(e){
  movie.name = e.target.value
  movie.updatedAt = moment().valueof()
  dateElement.textContent = generateTimeStamp(movie.updatedAt)
  saveMovie(movies)
})

producerElement.addEventListener('input', function(e){
  movie.producer = e.target.value 
  movie.updatedAt = moment().valueof()
  dateElement.textContent = generateTimeStamp(movie.updatedAt)
  saveMovie(movies)
})

removeElement.addEventListener('click', function(){
  removeJournal(movie.id)
  saveMovie(movies)
  location.assign('index.html')
})

window.addEventListener('storage', function(e){
  if(e.key === 'notes'){
    movies = JSON.parse(e.newValue)
    movie = notes.find(function(note){
      return movie.id === movieId
    })

    if(note === undefined){
      location.assign('index.html')
    }
    nameElement.value = movie.name
    producerElement.value = movie.producer
    dateElement.textContent = generateTimeStamp(movie.updatedAt)
  }
})
  

