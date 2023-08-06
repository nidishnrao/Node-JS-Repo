const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}
const removeNotes = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note){
        return note.title != title
    })

    if (notes.length > notesToKeep.length){

        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note removed successfully!!!"))
    }

    else{
        console.log(chalk.red.inverse("Try again. No note named ",title ,"found"))
    }

    
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        return dataJson = JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON) 
}

module.exports = {
    getNotes: getNotes,
    removeNotes : removeNotes
}