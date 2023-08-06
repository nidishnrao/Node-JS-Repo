const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note)=> note.title === title) 

    if (!duplicateNotes){

        notes.push ({
            title : title,
            body : body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added successfully!!!"))
    
    }

    else{
        console.log(chalk.red.inverse("Try again.",title,"note is taken."))
    }

}

const removeNotes = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title != title)

    if (notes.length > notesToKeep.length){

        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note removed successfully!!!"))
    }

    else{
        console.log(chalk.red.inverse("Try again. No note named ",title ,"found"))
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes...')) 

    notes.forEach((note) => {
     console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const searchNote = notes.find((note)=>note.title === title)

    if (searchNote) {
        console.log(chalk.bold(searchNote.title))
        console.log(chalk.dim(searchNote.body))
    }
    else{
        console.log(chalk.red.inverse("Note not found?"))
    }
       
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
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}