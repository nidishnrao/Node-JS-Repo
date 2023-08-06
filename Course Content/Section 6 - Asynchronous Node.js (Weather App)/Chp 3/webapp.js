const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

address = process.argv[2]

if(!address){
    console.log("Please provide the address")
}

else{
    geocode(address, (error, {latitude,longitude,location}) => {
        if (error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error){
                return console.log(error)
            }
            console.log("Location ",location)
            console.log("Weather Update ",forecastdata)
        })
    })
        
}

