const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
    request.send()
}

const getCountryDeets = (countryCode, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const countryData = data.find((country) => country.alpha2Code === countryCode);
            countryData ? callback(undefined, countryData.name) : callback('ERRORED OUT HOMIE', undefined);
        } else if (e.target.readyState === 4) {
            callback('ERRORED OUT HOMIE', undefined);
        }
    })
    request.open('GET', 'http://restcountries.eu/rest/v2/all');
    request.send();
}
