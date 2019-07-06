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

const newRequest = new XMLHttpRequest();
newRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status == 200) {
        const data = JSON.parse(e.target.responseText);
        const answer = data.find((country) => country.alpha2Code === countryCode);
        answer ? console.log(answer.name) : console.log('Nope such country');
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log('Some error occured..');
    }
})
newRequest.open('get', 'http://restcountries.eu/rest/v2/all');
newRequest.send();
const countryCode = "US";
