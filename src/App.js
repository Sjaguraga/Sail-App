import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import BoxComment from "./BoxComment";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
// import Details from "./Details";
import CommentList from "./CommentList";
import { useEffect, useState } from "react";

function App() {

  const [boxes, setBoxes] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/boxes")
    .then(resp => resp.json())
    .then(data => {
      setBoxes(data)
    })
    },[])


  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/box/:id" element={<BoxComment boxes={boxes} />} />
        <Route path="/comments_list" element={<CommentList />} />
        <Route path="/comments" element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;
