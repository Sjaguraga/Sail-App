import React from "react";
import { NavLink } from "react-router-dom"


function NavBar() {
  return (
    <>
      <nav>
        <h1 id="Sail_Text">SAIL</h1>
          <NavLink className="nav-link" to="about">About</NavLink>
      </nav>
    </>
  );
}

export default NavBar;
