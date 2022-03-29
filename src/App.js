import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Home from './Home'
import About from './About'
import NavBar from './NavBar'

function App() {

fetch('http://localhost:9292/')
.then(resp => resp.json())
.then(Box_data => {
  console.log(Box_data) 
})

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
