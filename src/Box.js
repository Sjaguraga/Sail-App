<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
=======
import React,{useState} from 'react'
import { Link } from "react-router-dom"
>>>>>>> 2ab107c06f50a554fdbbcce07ffe8fd9889cfc34
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

function Box({ data, box_id }) {
  const [upvotes, setUpvotes] = useState(data.upvotes);

  function handleUpvote() {
    fetch(`http://localhost:9292/upvote/${box_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setUpvotes(upvotes + 1);
  }

  function handleDownvote() {
    fetch(`http://localhost:9292/downvote/${box_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUpvotes(upvotes - 1);
  }

  return (
    <>
      <div className="flexbox-item" id={`item${box_id}`}>
        <Link to={`/box/${box_id}`}>
          {" "}
          <p className="Box_Title">{data.title}</p>{" "}
        </Link>
        <p className="upvotes">{upvotes}</p>
        <button onClick={handleUpvote}>
          <BiUpvote /> UPVOTE
        </button>
        <button onClick={handleDownvote}>
          <BiDownvote />
          DOWNVOTE
        </button>
      </div>
    </>
  );
}

export default Box;
