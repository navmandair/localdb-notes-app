const fs = require('fs')

const noteDatabaseFilePath = 'db.json'


const getNotes  = function(){
    return loadNotes();
}

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    if(duplicateNotes.length == 0){
        notes.push({title, body});
        saveNotes(notes);
        console.log('Note added!')
    }else{
        console.log('Duplicate note please change title to something else!')
    }
    
}


const removeNote = function(title){
    const notes = loadNotes();
    const filteredNotes = notes.filter(function(note){
        return note.title !== title;
    })
    if(notes.length !== filteredNotes.length){
        console.log(filteredNotes)
        saveNotes(filteredNotes)
        console.log('Note removed!')    
    }else{
        console.log('Note not found!')
    }
    
}

const loadNotes = function(){
    try{
        let stringData = fs.readFileSync(noteDatabaseFilePath).toString()
        let data = JSON.parse(stringData)
        return data;
    } catch(e){
        return []
    }
}


const saveNotes = function(notes){
    let data = JSON.stringify(notes);
    fs.writeFileSync(noteDatabaseFilePath, data)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    getNotes: getNotes
};