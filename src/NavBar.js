import React from "react";
import { NavLink,Link } from "react-router-dom";
import { RiSailboatLine } from "react-icons/ri";

function NavBar() {
  return (
    <>
      <nav>
       <Link to="/"><h1>SAIL <RiSailboatLine /></h1> </Link>
        <NavLink className="nav-link" to="about">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
