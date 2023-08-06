const notes = require('./notes.js')
const yargs = require('yargs')

//Creating List command
yargs.command({
    command : 'list',
    describe : 'Listing your notes',
    handler() {
        //console.log("Listing out all your note")
        notes.getNotes()
    }
})

yargs.parse()