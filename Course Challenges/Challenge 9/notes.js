const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    console.log('Your notes...') 
    const notes = loadNotes()
    const titles = []
    notes.forEach((list) => {
        titles.push(list.title)
    })
    console.log("titles are ",titles)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        return dataJson = JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON) 
}

module.exports = {
    getNotes : getNotes
}