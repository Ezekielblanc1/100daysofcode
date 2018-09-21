
const movies = getSavedJournal()

const filters = {
  searchText: ''
}
renderMovies(movies,filters)

document.querySelector('#search-text').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderMovies(movies,filters)//Function to re-render when the input changes
})
document.querySelector('#form').addEventListener('submit', function(e){
  e.preventDefault()
  const id = uuidv4()
  movies.push({
    id: id,
    name: e.target.elements.firstJournal.value,
    producer: 'John Doe'
  })
  saveMovie(movies)
  location.assign(`edit.html#${id}`)
  e.target.elements.firstJournal.value = ''

})


document.querySelector('#select-by').addEventListener('change', function(e){
  console.log(e.target.value)
})