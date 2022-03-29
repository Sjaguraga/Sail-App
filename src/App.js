import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from './Home'
import About from './About'
import NavBar from './NavBar'

function App() {
  return (

    <div className="App">
      <NavBar/>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}


export default App;
