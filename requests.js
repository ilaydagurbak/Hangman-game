const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error ('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getCountry = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)

    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else { 
        throw new Error('Unable to fetch the country')
    }
}

const getLocation = async () => {
    const response  = await fetch(`https://ipinfo.io/json?token=66fdfcd62105d1`)

    if (response.status === 200){
        return response.json()
     } else {
            throw new Error ('Unable to fetch the location')
     }
}
