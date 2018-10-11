//Generate DOM for the puzzle and guesses
const puzzleEl = document.querySelector('#game-puzzle')
const guessEl = document.querySelector('#game-guess') 
const result = new Hangman('React', 3)
puzzleEl.textContent = result.getPuzzle()
guessEl.textContent = result.statusMessage()


window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)//gets the guess from the user
  result.makeGuess(guess)
  puzzleEl.textContent = result.getPuzzle()
  guessEl.textContent = result.statusMessage()
});





