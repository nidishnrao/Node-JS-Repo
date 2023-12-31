const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Welcome to Challenge 18</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is Pouring Heavily',
        location : 'Udupi'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})