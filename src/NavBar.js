import React from "react";
import { NavLink } from "react-router-dom";
import { RiSailboatLine } from "react-icons/ri";

function NavBar() {
  return (
    <>
      <nav>
        <h1 style={{ color: "cornsilk" }}>
          SAIL <RiSailboatLine />
        </h1>
        <NavLink className="nav-link" to="about">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
