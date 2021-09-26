import React from 'react'
import notes from '../assets/data'
import ListItem from '../componenets/ListItem'

const NotesListPage = () => {
    return (
        <div className="notes">

            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p clasName="notes-count"> {notes.length} </p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => 

                    <ListItem key={index} note={note} body={note.body} />

                )}
            </div> 
        </div>
    )
}

export default NotesListPage
