const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

address = process.argv[2]

if(!address){
    console.log("Please provide the address")
}

else{
    geocode(address, (error, data) => {
        if (error){
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            if (error){
                return console.log(error)
            }
            console.log("Location ",data.location)
            console.log("Weather Update ",forecastdata)
        })
    })
        
}

