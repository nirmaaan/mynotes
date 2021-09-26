import React from 'react'
import { Link } from 'react-router-dom'
const ListItem = (props) => {

    // console.log('Props',props)



    return (
        <Link to={`/note/${props.note.id}`}>
            <div className="notes-list-item">

            <h3> {props.body} </h3>

            </div>
        </Link>
    )
}

export default ListItem
