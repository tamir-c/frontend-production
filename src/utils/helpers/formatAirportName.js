const formatAirportName = (airport) => {
    const lowerCaseAirport = airport.toLowerCase()
    const airportWords = lowerCaseAirport.split(" ")
    const capitalisedWords = airportWords.map(word => {
        return word[0].toUpperCase() + word.slice(1)
    })
    const formattedAirport = capitalisedWords.join(" ")
    return formattedAirport + " Airport"
}

export default formatAirportName;