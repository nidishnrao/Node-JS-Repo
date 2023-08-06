
const path = require('path')
const express = require('express')

// console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.set('view engine','hbs')

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name : 'Dynamic Web Page'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help Me',
        name : 'Contact me at nidishnrao@gmail.com'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})