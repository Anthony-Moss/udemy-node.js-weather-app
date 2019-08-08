const express = require('express');

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})


app.get('/help', (req, res) => {
    res.send('<h1>Help Page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Weather App</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Atlanta'
    })
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`)
})