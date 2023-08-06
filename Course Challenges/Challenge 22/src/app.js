const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname,'../public'))

const app = express()

//Define paths for Express config

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//Setup static directory to serve
app.use(express.static(publicDirectoryPath))
//Routes for the app
// app.com
// app.com/help
// app. com/about

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name : 'Dynamic Web Page'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name : 'Nidish'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help Me',
        contact : 'Contact me at nidishnrao@gmail.com'
    })
})

app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})