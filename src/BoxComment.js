import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Notes from './Notes';
import { v4 as uuidv4 } from "uuid";


function BoxComment({AppToggleVibes}){
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  let { id } = useParams();
  let id_integer = parseInt(id)  

  // const [BoxCommentToggleVibes, setBoxCommentToggleVibes] = useState(false);


  let subject 
  // function setTheToggle() {
  //   setBoxCommentToggleVibes(AppToggleVibes)
  //   console.log(BoxCommentToggleVibes)
  // }
  // setTheToggle()
  // console.log(AppToggleVibes)

  function nameTheSubject () {
    if(id_integer===1){
      subject = "Body"
    } else if (id_integer === 2) {
      subject ="Mind"
    } else if (id_integer === 3) {
      subject = "Heart"
    } else if (id_integer === 4) {
      subject = "Soul"
    }
  }
  nameTheSubject()
  


  useEffect(() => {
    fetch(`http://localhost:9292/comments/${id}`)
    .then(resp => resp.json())
    .then(data => {
      setComments(data)
    })
  },[]);

  

  function handleChange(event) {
    setNewCommentText(event.target.value)
  }

  function handleSubmit(event) {
    fetch(`http://localhost:9292/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: newCommentText,
        box_id: id,
        user_id: 2
      })
    })
    .then(resp => resp.json())
    .then(resp => setComments([...comments, resp]))
  }

  function handleDelete(comment){
    fetch(`http://localhost:9292/comments/${comment.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(resp => setComments(comments.filter(c => c !== comment)))
  }

        
  let mappedNotes = comments.map(comment => {
    return (
      <Notes 
      AppToggleVibes={AppToggleVibes}
      key={uuidv4()}
      comment = {comment}
      handleDelete = {handleDelete}

       />  


    )
  })

  function handleReset(e) {
    e.preventDefault();
    setNewCommentText("");
  }

  return (
    <>

      <h2 id='subjectTitle'>{subject}</h2>
      <br />

      <form onSubmit={handleReset}>
      <input placeholder="type here" name="text" className="todo-input" onChange={handleChange} value={newCommentText}/>
      <button onClick={handleSubmit} className="todo-button">
        Add New Comment
      </button>
      </form>
     
      
      {mappedNotes}

    </>
  )
}

export default BoxComment;
