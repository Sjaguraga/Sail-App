import React from "react";
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <Link to="/"><button>Return to Home</button></Link>
    

    </div>
  );
}

export default About;
