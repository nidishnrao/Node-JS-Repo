
const path = require('path')
const express = require('express')

// console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))


app.get('/help', (req, res) => {
    res.send([{
        name: 'Nidish',
        age: 23
    },{
        name: 'Andrew',
        age: 27
    }])
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