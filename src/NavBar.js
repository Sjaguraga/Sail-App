import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { RiSailboatLine } from "react-icons/ri";
import Popup from "./Popup"

function NavBar() {

  const [showPopup, setShowPopup] = useState(false);

  function togglePop(){
    setShowPopup(!showPopup);
  }


  return (
    <>
      <nav>
       <Link to="/"><h1>SAIL <RiSailboatLine /></h1> </Link>
        <div className="btn" onClick={togglePop}>How To Sail</div>
        {showPopup ? <Popup toggle={togglePop} /> : null}
        <NavLink className="nav-link" to="about">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
