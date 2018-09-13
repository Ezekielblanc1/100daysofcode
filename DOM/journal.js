
let movies = []

const filters = {
  searchText: ''
}

const movieJSON = localStorage.getItem('movie')

if(movieJSON !== null){
  movies = JSON.parse(movieJSON)
}



const renderMovies = function(movie,filters){
  const filteredMovies = movies.filter(function(movie){
    return movie.name.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  

  document.querySelector('#journal').innerHTML = ''//To clear out of date data
  filteredMovies.forEach(function(movie){
    const movieEl = document.createElement('p')

    if(movie.name.length > 0){
      movieEl.textContent = movie.name
    }else{
      movieEl.textContent = 'Unnamed note'
    }
    
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
  localStorage.setItem('movie', JSON.stringify(movies))
  renderMovies(movies, filters)
  e.target.elements.firstJournal.value = ''

})


document.querySelector('#select-by').addEventListener('change', function(e){
  console.log(e.target.value)
})