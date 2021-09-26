import React, {useState, useEffect} from 'react'
// import notes from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


const NotePage = ({match, history}) => {

    let noteId = match.params.id


    // let note = notes.find(note => note.id === Number(noteId))
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
        return () => {
            
        }
    }, [noteId])


    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async() => {
        await fetch(`http://localhost:8000/notes/`, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date() })

        })
    }


    let updateNote = async() => {
                await fetch(`http://localhost:8000/notes/${noteId}`, {
                    method:'PUT',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({...note, 'updated': new Date() })

                })
            }


    let deleteNote = async () =>{
            await fetch(`http://localhost:8000/notes/${noteId}`, {
                method:'DELETE',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(note)

            })

            history.push('/')

    }


    let handleSubmit = () => {
        
        if(noteId !== 'new' && !note.body){
            deleteNote()
        } else if (noteId !== 'new'){
            updateNote()

        } else if (noteId == 'new' && note!== null){
            createNote()
        }
        history.push('/')
    }



    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft onClick={ handleSubmit} />
                    </Link>

                </h3>
                { noteId !== 'new' ? 
                (
                    <button onClick={deleteNote}>Delete</button>
                ):(  
                    <button onClick={handleSubmit}>Done</button> 
                  )
                
                }
                
            </div>
            
            <textarea value={note?.body} onChange={(e) => { setNote({ ...note, 'body':e.target.value}) }} value={note?.body} >  

            </textarea>
            {/* '?' used above is used to not throw error if body is not available of a particular note. For examle /21 is not in dataset so it throws error. '?' removes error and reponds with empty body.  */ }      
             {/* text area lets you edit you type or edit your body.  */}
            
        </div>
    )
}

export default NotePage
