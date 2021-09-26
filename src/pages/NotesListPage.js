import React, { useState, useEffect } from 'react'
// import notes from '../assets/data'
import ListItem from '../componenets/ListItem'
import AddButton from '../componenets/AddButton'

const NotesListPage = () => {

    let [notes, setNotes] = useState([])


    useEffect(() => {
        getNotes()
        return () => {
            
        }
    },[]) 
    // Empty [] as we want to mount componenet only once. 


    let getNotes = async () => {

            

            let response = await fetch('http://localhost:8000/notes/')
            let data = await response.json()
            // console.log("data", data)
            setNotes(data)
    }

    return (
        <div className="notes">

            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p clasName="notes-count"> {notes?.length} </p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => 

                    <ListItem key={index} note={note} body={note?.body} />

                )}
            </div>

            <AddButton />

        </div>
    )
}

export default NotesListPage

