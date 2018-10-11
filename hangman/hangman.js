class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split('')
  this.guesses = guesses;
  this.guessedLetters = [];
  this.status = 'Playing'
  }
  calculateStatus(){
    const finished = this.word.every((letter) => {
      return this.guessedLetters.includes(letter)
    })
    //SECOND ALTERNATIVE 
    // const unGuessedLetter = this.word.filter((letter) => {
    //   return !this.guessedLetters.includes(letter)
    // })
    // const finished = unGuessedLetter.length === 0
  // let finished = true;
  // this.word.forEach((letter) => {
  //   if (this.guessedLetters.includes(letter)){
  //     return; 
  //   }else {
  //     finished = false
  //   }
  // })
  if (this.guesses === 0) {
    this.status = 'Failed'
  } else if (finished){
    this.status = 'Finished'
  } else {
    this.status = 'Playing'
  }
  }
  getPuzzle(){
    let puzzle = ''

  this.word.forEach((letter)=>{
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    }else {
      puzzle += '*'
    }
  })
      return puzzle
  }
  statusMessage(){
    if (this.status === 'Playing'){
      return `Guesses left : ${this.guesses}`
    } else if (this.status === 'Failed') {
      return `Nice guess the word was "${this.word.join('')}"`
    } else if( this.status === 'Finished') {
      return `Great Job you guessed the word correctly`
    }
  }
  makeGuess(guess){
  guess = guess.toLowerCase()
  const uniqueGuess = !this.guessedLetters.includes(guess)
  const badGuess = !this.word.includes(guess)

  if (this.status !== 'Playing') {
    return;
  }
  if (uniqueGuess){
    this.guessedLetters.push(guess)
  }

  if (uniqueGuess && badGuess) {
    this.guesses--
  }
  this.calculateStatus()
  }
}









