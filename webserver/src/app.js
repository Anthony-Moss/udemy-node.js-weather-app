const express = require('express');

const app = express()

app.get('', (req, res) => {
    res.send('Hello Express!')
})


app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('Title page')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`)
})