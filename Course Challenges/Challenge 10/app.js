const notes = require('./notes.js')
const yargs = require('yargs')
// console.log(process.argv) //Alternate way of using without any module

//customize yargs version
yargs.version('1.0.1')

//add, remove, read, list

//Creating Add command
yargs.command({
    command : 'add',
    describe : 'Adding a new note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        // console.log(argv)
        // console.log('Title : ' + argv.title)
        // console.log('Body : ' + argv.body)
        notes.addNotes(argv.title,argv.body)
    }
})

//Creating Remove command
yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        // console.log(argv)
        // console.log("Removing a note")
        notes.removeNotes(argv.title)
    }
})

//Creating Read command
yargs.command({
    command : 'read',
    describe : 'Reading a note',
    builder : {
        title :{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        // console.log("Reading a note")
        notes.readNotes(argv.title)
    }
})

//Creating List command
yargs.command({
    command : 'list',
    describe : 'Listing your notes',
    handler() {
        // console.log("Listing out all your note")
        notes.listNotes()
    }
})

yargs.parse()