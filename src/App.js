import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {


fetch('http://localhost:9292/')
.then(resp => resp.json())
.then(Box_data => {
  console.log(Box_data) 
})

  return (
    <div className="App">
      <NavBar/>

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 style={{ color: "cornsilk" }}>SAIL</h1>

          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
