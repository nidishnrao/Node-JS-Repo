const fs = require("fs")

const DataBuffer = fs.readFileSync("Challenge6.json")
const JSONData = JSON.parse(DataBuffer)
console.log(JSONData)


JSONData.name =  'Nidish',
JSONData.age = 23


const updateString = JSON.stringify(JSONData)

fs.writeFileSync("Challenge6.json",updateString)
const newDataBuffer = fs.readFileSync("Challenge6.json")
const newJSONData = JSON.parse(newDataBuffer)
console.log(newJSONData)
