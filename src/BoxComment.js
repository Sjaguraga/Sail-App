import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";

function BoxComment(){
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  let { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:9292/comments/${id}`)
    .then(resp => resp.json())
    .then(setComments)
  },[]);

  function handleChange(event) {
    setNewCommentText(event.target.value)
  }

  function handleSubmit(event) {
    console.log(newCommentText);
    fetch(`http://localhost:9292/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: newCommentText,
        box_id: id
      })
    })
    .then(resp => resp.json())
    .then(resp => setComments([...comments, resp]))
  }

  function handleDelete(comment){
    console.log(comment);
    fetch(`http://localhost:9292/comments/${comment.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(resp => setComments(comments.filter(c => c !== comment)))
  }

  return (
    <>
      <h2>BoxComment {`${id}`}</h2>
      <br />

      <input placeholder="type here" name="text" className="todo-input" onChange={handleChange} value={newCommentText}/>
      <button onClick={handleSubmit} className="todo-button">
        Add New Comment
      </button>

      <ul>
        {comments.map(comment => 
          <div className='todo-row'>
            {comment.text}
            <RiCloseCircleLine className="delete-icon" onClick={() => handleDelete(comment)} />
          </div>
      )}
      </ul>
    </>
  )
}

export default BoxComment;
