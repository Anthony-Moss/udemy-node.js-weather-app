const request = require('request');

const  url = 'https://api.darksky.net/forecast/5ff7d44666836f47201faa8a389d0db4/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    console.log(response.body.currently)
})