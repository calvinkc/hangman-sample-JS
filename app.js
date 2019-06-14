const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('car parts', 10);

puzzleEl.textContent = game1.Puzzle;
guessesEl.textContent = game1.StatusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.Puzzle;
    guessesEl.textContent = game1.StatusMessage;
})


const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log("An error has occured.");
    }
    
})
request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send();
