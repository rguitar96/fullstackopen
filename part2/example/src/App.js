import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

const App = (props) => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        console.log('effect')
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    const notesToShow = showAll
                        ? notes
                        : notes.filter(note => note.important === true)

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        }

        noteService
            .create(noteObject)
            .then(newNote => {
                setNotes(notes.concat(newNote))
                setNewNote('')
            })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(changedNote => {
                setNotes(notes.map(note => note.id === id ? changedNote : note))
            })
            .catch(error => {
                alert(`the note ${note.content} was already deleted from server`)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note => 
                <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
                )}
            </ul>

            <form onSubmit={addNote}>
                    <input value={newNote} onChange={handleNoteChange} />
                    <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default App