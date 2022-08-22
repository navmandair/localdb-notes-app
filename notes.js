const fs = require('fs')
const chalk = require('chalk')

const noteDatabaseFilePath = 'db.json'


const getNote  = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title)
    if(note){
        console.log(note.body)
    }else{
        console.log(chalk.red('Note not found!'))
    }
    
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)
    if(!duplicateNote){
        notes.push({title, body});
        saveNotes(notes);
        console.log(chalk.green('Note added!'))
    }else{
        console.log(chalk.red('Duplicate note please change title to something else!'))
    }
    
}

const listNotes = () => {
    console.log(chalk.bold('Your Notes:'))
    let data = loadNotes();
    data.map(note => (console.log(note.title)))
}



const removeNote = (title) =>{
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title)
    if(notes.length !== filteredNotes.length){
        saveNotes(filteredNotes)
        console.log(chalk.green('Note removed!'))   
    }else{
        console.log(chalk.red('Note not found!'))
    }
    
}

const loadNotes = () => {
    try{
        let stringData = fs.readFileSync(noteDatabaseFilePath).toString()
        let data = JSON.parse(stringData)
        return data;
    } catch(e){
        return []
    }
}


const saveNotes = (notes) => {
    let data = JSON.stringify(notes);
    fs.writeFileSync(noteDatabaseFilePath, data)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    getNote: getNote
};