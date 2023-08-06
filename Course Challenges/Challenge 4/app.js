const yargs = require('yargs')

//Creating Read command
yargs.command({
    command : 'read',
    describe : 'Reading a note',
    handler : function () {
        console.log("Reading a note")
    }
})

//Creating List command
yargs.command({
    command : 'list',
    describe : 'Listing your notes',
    handler : function () {
        console.log("Listing out all your note")
    }
})

console.log(yargs.argv)