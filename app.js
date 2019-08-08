const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]


if (address) {
    geocode(address, (error, data) => {
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
} else {
    console.log('Please provide an address')
}

// geocode(input)


// alternate way to call forecast test case 
// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//     console.log(`${data.summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProb} % chance of rain`)
// })