const movieId = location.hash.substring(1)
const movies = getSavedJournal()
const movie = movies.find(function(journal){
  return journal.id === movieId
})

if(movie === undefined){
  location.assign('index.html')
}