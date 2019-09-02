const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch the data');
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('naw bro');
    }
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=d372247a325ff0');
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('nah not happening');
    }
}

const getCurrentCountry = async () => {
    const responseLocation = await fetch('http://ipinfo.io/json?token=d372247a325ff0');
    const responseCountry = await fetch('http://restcountries.eu/rest/v2/all');

    if (responseLocation.status === 200 && responseCountry.status === 200) {
        const countrylisting = await responseCountry.json();
        const location = await responseLocation.json();
        return countrylisting.find((country) => country.alpha2Code === location.country);
    } else {
        throw new Error('nah not happening');
    }
}

