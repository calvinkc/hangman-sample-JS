class Hangman {
  constructor(word, remainingGuesses) {
      this.word = word.toLowerCase().split('');
      this.remainingGuesses = remainingGuesses;
      this.guessedLetters = [];
      this.status = 'playing';
  }
  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
  }
  getStatusMessage() {
    let statusMessage = '';

    if (this.status === 'playing') {
      statusMessage = `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      statusMessage = `Nice try! The word was "${this.word.join('')}"`;
    } else {
      statusMessage = 'Great work! You\'ve guessed the word';
    }

    return statusMessage;
  }
  getPuzzle() {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    })

    return puzzle;
  }
  makeGuess = function (guess) {
    if (this.status == 'playing') {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (isUnique) {
            this.guessedLetters.push(guess);
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        }

        this.calculateStatus();

    } 
    else console.log('No longer playing');
  }
}
