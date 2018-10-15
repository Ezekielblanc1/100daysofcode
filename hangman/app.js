//Generate DOM for the puzzle and guesses
const puzzleEl = document.querySelector('#game-puzzle')
const guessEl = document.querySelector('#game-guess') 
const result = new Hangman('React', 3)
puzzleEl.textContent = result.getPuzzle()
guessEl.textContent = result.statusMessage();



window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)//gets the guess from the user
  result.makeGuess(guess)
  puzzleEl.textContent = result.getPuzzle()
  guessEl.textContent = result.statusMessage()
});


const puzzle = getPuzzle()
console.log(puzzle)


const countryCode = 'GH'

const countryRequest = new XMLHttpRequest();
countryRequest.addEventListener('readystatechange', (e)=>{
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    const country = data.find((country) => country.alpha2Code === countryCode)
    console.log(country.name)
  } else if (e.target.readyState === 4) {
    console.log('An error occurred')
  }
})


countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()




