const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=bbb26c45aa9a62258216db9ac635fbb6&query=udupi"

request({ url: url, json : true}, (error, response)=>{
    console.log(response.body.current.weather_descriptions +". It is currently "+ response.body.current.temperature +" degrees out. It feels like " + response.body.current.feelslike +" degrees out. ")
})
