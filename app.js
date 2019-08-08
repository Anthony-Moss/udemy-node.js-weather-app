const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]


if (address) {
    geocode(address, (error, { latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, latitude, (error, { summary, temperature, precipProb }) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(summary, temperature, precipProb)
            // console.log(`${data.summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProb} % chance of rain`)
        })
    })
} else {
    console.log('Please provide an address')
}