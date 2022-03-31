import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri";


export const Notes = ({comment, handleDelete}) => {
  return (

    <>
    <ul>
   
      <div className='todo-row'>
        {comment.text}
        <RiCloseCircleLine className="delete-icon" onClick={() => handleDelete(comment)} />
      </div>
      </ul>
      </>
  )
 
  
}

export default Notes
