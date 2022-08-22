const notes = require('./notes')
const yargs = require('yargs')
const validator = require('validator')
const chalk = require('chalk')


yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Add new note',
    builder:{
        title: {
            description: 'Note Title',
            type: 'string',
            demandOption: true
        },
        body: {
            description: 'Note Description',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})


yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder:{
        title: {
            description: 'Note Title',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})


yargs.command({
    command: 'read',
    description: 'Read a note',
    builder:{
        title: {
            description: 'Note Title',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => notes.getNote(argv.title)
})


yargs.command({
    command: 'list',
    description: 'List all notes', 
    handler: () => notes.listNotes()
})


yargs.parse()

