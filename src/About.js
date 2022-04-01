import React from "react";
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>This app is about loving youself. </p>
      <br />
      <Link to="/"><button>Return to Home</button></Link>
    

    </div>
  );
}

export default About;
