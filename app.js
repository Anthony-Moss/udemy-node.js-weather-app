const request = require('request');

// const  weatherUrl = 'https://api.darksky.net/forecast/5ff7d44666836f47201faa8a389d0db4/37.8267,-122.4233'

// request({ url: weatherUrl, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(response.body.currently)
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location input!')
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} % chance of rain`)
//     }
// })

// Geocoding
// user provides address => get lat/long from geo api => put lat/long into weath api and get weather
// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Atlanta.JSON?access_token=pk.eyJ1Ijoic3dpZnRtYXBsZSIsImEiOiJjanRjNjZyNGEwaGN1M3lxandlbzRnbGQ5In0.EWCNMHBKSS6VY6o5UFh6Ew&limit=1'

// request({url: geoUrl, json: true}, (error, response) => {
//     // console.log(response.body.message)
//     if (error) {
//         console.log('Unable to connect to geolocation service!')
//     } else if (response.body.message) {
//         console.log('Unable to find location!')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(`The latitude is ${latitude} the longitude is ${longitude}`)
//     }
// })

const geocode = (address, callback) => {
    const encodedURI = encodeURIComponent(address)
    const url  = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + address + `.JSON?access_token=pk.eyJ1Ijoic3dpZnRtYXBsZSIsImEiOiJjanRjNjZyNGEwaGN1M3lxandlbzRnbGQ5In0.EWCNMHBKSS6VY6o5UFh6Ew&limit=1`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (response.body.features.length ===  0) {
            callback('Unable to find location!')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Atlanta', (error, data) => {
    console.log('error',  error)
    console.log('Data', data)
})