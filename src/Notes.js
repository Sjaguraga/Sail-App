import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri";


export const Notes = ({comment, handleDelete, AppToggleVibes}) => {
    console.log(AppToggleVibes)
  return (

   
    <>
    <ul>
        <div className='By'> {AppToggleVibes ? null :  `:${comment.user.username}`}   </div>
      <div className='todo-row'>
        {comment.text}
        <RiCloseCircleLine className="delete-icon" onClick={() => handleDelete(comment)} />
      </div>
      </ul>
      </>
  )
 
  
}

export default Notes
