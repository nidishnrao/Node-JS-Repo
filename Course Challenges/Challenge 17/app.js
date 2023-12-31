const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Challenge 17')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})