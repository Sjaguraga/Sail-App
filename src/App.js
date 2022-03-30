import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Details from "./Details";
import CommentList from "./CommentList";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/details" element={<Details />} />
        <Route path="/comments" element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;
