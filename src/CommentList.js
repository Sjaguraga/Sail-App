import React, { useState } from "react";
import Comments from "./Comments";
import Details from "./Details";

function CommentList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };


  return (
    <>
      <h1>SUBJECT</h1>
      <Comments onSubmit={addTodo} />
      <Details
        todos={todos}
        // completeTodo={completeTodo}
        removeTodo={removeTodo}
        // updateTodo={updateTodo}
      />
    </>
  );
}

export default CommentList;
