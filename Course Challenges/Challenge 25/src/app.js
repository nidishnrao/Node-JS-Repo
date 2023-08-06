const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        content:'A dynamic weather page built using Node',
        name : 'Nidish'
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
        title: 'Help',
        contact : 'Contact me at nidishnrao@gmail.com',
        name : 'Nidish'
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address
    console.log(address)

    if(!address){
        return res.send({
            Error : 'Error, Can\'t find address. Please enter the address to get weather results'
        })
    }

    geocode(address, (error, {latitude, longitude,location}={}) => {
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastdata) => {
            if(error){
                return res.send({error})
            }
            
            res.send({
                forecast : forecastdata,
                location : location,
                address : req.query.address
            })
        })
    })
  
})

//Query String example
//Note http can only send one res and one req at a time 
// app.get('/products', (req, res) => {
//     if (!req.query.search) {
//         return res.send({
//             error: 'You must provide a search term'
//         })
//     }

//     console.log(req.query.search)
//     res.send({
//         products: []
//     })
// })

//error page should come in the end 

app.get('/help/*', (req, res) => {
    res.render('404',{
        title: '404',
        errormessage : 'Help article not found',
        name : 'Nidish'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        errormessage : 'Page not found',
        name : 'Nidish'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})