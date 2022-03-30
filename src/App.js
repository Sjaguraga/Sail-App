import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CommentList from "./CommentList";
import { RiSailboatLine } from "react-icons/ri";

function App() {
  fetch("http://localhost:9292/")
    .then((resp) => resp.json())
    .then((Box_data) => {
      console.log(Box_data);
    });

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 style={{ color: "cornsilk" }}>
            SAIL <RiSailboatLine />
          </h1>
          <Link to="/commentlist">Comment List</Link>
          <Link to="/about">About</Link>
        </nav>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/commentlist" element={<CommentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
