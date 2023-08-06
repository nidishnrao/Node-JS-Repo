const request = require('request');

const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlkaXNocmFvIiwiYSI6ImNrY2dkdW9qYTByMjIycnBiamZydmIxemsifQ.Q2kIdv9nj0F8saLwnSEGeA"

request({ url: geocodeurl, json : true}, (error, response)=>{
    console.log("Longitude "+ response.body.features[0].center[0]+" latitude "+response.body.features[0].center[1])
})

