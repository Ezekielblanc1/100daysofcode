

const heading = document.createElement('h2');
heading.textContent = "Second heading"
document.querySelector('body').appendChild(heading)


// document.querySelector('#first-btn').addEventListener('click', function(e){
//   console.log('You clicked me')
// })

// document.querySelector('#second-btn').addEventListener('click', function(e){
//   document.querySelectorAll('.journal').forEach(function(journal){
//     journal.remove()
//   })
// })


const movies = [
  {
    name: "Things fall apart",
    producer: "John Doe"
  },
  {
    name: "Many years Ago",
    producer: "Mark ken"
  },
  {
    name: "Gods not Dead",
    producer: "Resy Duke"
  }
]

const filters = {
  searchText: ''
}

const renderMovies = function(movie,filters){
  const filteredMovies = movies.filter(function(movie){
    return movie.name.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  

  document.querySelector('#journal').innerHTML = ''//To clear out of date data
  filteredMovies.forEach(function(movie){
    const movieEl = document.createElement('p')
    movieEl.textContent = movie.name
    document.querySelector('#journal').appendChild(movieEl)
  })
}
renderMovies(movies,filters)

document.querySelector('#search-text').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderMovies(movies,filters)//Function to re-render when the input changes
})
document.querySelector('#form').addEventListener('submit', function(e){
  e.preventDefault()
  movies.push({
    name: e.target.elements.firstJournal.value,
    producer: 'John Doe'
  })
  renderMovies(movies, filters)
  e.target.elements.firstJournal.value = ''

})