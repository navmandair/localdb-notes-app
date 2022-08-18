const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')

console.log(notes.getNotes())
console.log(validator.isEmail('t@t.com'))
console.log(chalk.red.bold('Error!'))