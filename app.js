const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Atlanta', (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.latitude, data.latitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
        // console.log(`${data.summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProb} % chance of rain`)
    })
})



// alternate way to call forecast test case 
// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//     console.log(`${data.summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProb} % chance of rain`)
// })