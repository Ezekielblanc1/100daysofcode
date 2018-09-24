
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
  const timeStamp = moment.valueOf()
  movies.push({
    id: id,
    name: e.target.elements.firstJournal.value,
    producer: 'John Doe',
    createdAt: timeStamp,
    updatedAt: timeStamp
  })
  saveMovie(movies)
  location.assign(`edit.html#${id}`)
  e.target.elements.firstJournal.value = ''

})


document.querySelector('#select-by').addEventListener('change', function(e){
  console.log(e.target.value)
})
//Testting out Dates
const dateOne = new Date('March 1 2017 12:00:00')
const dateTwo = new Date()
const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if(dateOneTimeStamp < dateTwoTimeStamp){
  console.log(dateOne.toString())
}else if(dateTwoTimeStamp < dateOneTimeStamp){
  console.log(dateTwo.toString())
}
//Testing out Moments

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()
// console.log(nowTimeStamp)

// console.log(moment(nowTimeStamp).toString())

//Challenge

// const birthday = moment()
// birthday.subtract(25, 'year').subtract(7, 'month').subtract(18, 'days')
// console.log(birthday.format('MMMM Do, YYYY'))

const birth = moment()
birth.year(1990).month(1).date(5)
console.log(birth.format('MMM D, YYYY'))