import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import BoxComment from "./BoxComment";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
// import Details from "./Details";
import CommentList from "./CommentList";
import {useState} from "react";

function App() {
  const [AppToggleVibes, setAppToggleVibes] = useState(false);



  function appHandleToggle () {
    setAppToggleVibes(!AppToggleVibes)
    console.log(AppToggleVibes)
  }


  return (
    <div className="App">
      <NavBar appHandleToggle={appHandleToggle} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/box/:id" element={<BoxComment AppToggleVibes={AppToggleVibes} />} />
        <Route path="/comments_list" element={<CommentList />} />
        <Route path="/comments" element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;
