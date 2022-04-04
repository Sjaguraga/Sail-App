import React from "react";
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p className="message">This app is your compass on the high seas of life. <br/>Keep calm, take care of your vessel and enjoy the breeze.  </p>
      <br />
      <Link to="/"><button>Return to Home</button></Link>
    

    </div>
  );
}

export default About;
