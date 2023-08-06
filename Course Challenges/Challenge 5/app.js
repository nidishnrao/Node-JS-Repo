const yargs = require('yargs')

//Adding "Body" property to Add command

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
    handler : function (argv) {
        console.log(argv)
        console.log('Title : ' + argv.title)
        console.log('Body : ' + argv.body)
    }
})

yargs.parse()