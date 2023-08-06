const fs = require('fs')

const book = {                  //Here we have created a book Json object. Where book is variable and its values are objects (key value pair) which are title & author
    title : 'Do epic shit',
    author : 'Ankur Warikoo'
}

const bookJSONString = JSON.stringify(book)        //  To convert data from Json object into string to save it in file using fs module (fs module works only with string data)


const bookJSONObject = JSON.parse(bookJSONString)  //  To convert data from String into Json Object

// console.log(book)
// console.log(bookJSONString)
// console.log(bookJSONObject)


// Now we save the data in file system
fs.writeFileSync('1-json.json',bookJSONString)

// Now we read the data from the file system
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)