import React from 'react'
import notes from '../assets/data'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = ({match}) => {

    let noteId = match.params.id
    let note = notes.find(note => note.id === Number(noteId))




    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft />
                    </Link>

                </h3>
            </div>
            
            <textarea value={note?.body}>  

            </textarea>
            {/* '?' used above is used to not throw error if body is not available of a particular note. For examle /21 is not in dataset so it throws error. '?' removes error and reponds with empty body.  */ }      
             {/* text area lets you edit you type or edit your body.  */}
            
        </div>
    )
}

export default NotePage
