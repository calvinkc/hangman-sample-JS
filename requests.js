const getPuzzle = () => {
  return 'what the fizzle';
}

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log("An error has occured.");
    }
    
})
request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.send();


const newRequest = new XMLHttpRequest();
newRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status == 200) {
        const data = JSON.parse(e.target.responseText);
        const answer = data.find((country) => country.alpha2Code === countryCode);
        answer ? console.log(answer.name) : console.log('Nope such country');
   //     console.log(data);
    } else if (e.target.readyState === 4) {
        console.log('Some error occured..');
    }
})
newRequest.open('get', 'http://restcountries.eu/rest/v2/all');
newRequest.send();
const countryCode = "US";