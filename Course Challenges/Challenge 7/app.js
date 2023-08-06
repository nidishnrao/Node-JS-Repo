const notes = require('./notes.js')
const yargs = require('yargs')

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
    handler : function (argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.parse()