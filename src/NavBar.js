import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { RiSailboatLine } from "react-icons/ri";
import Popup from "./Popup"

function NavBar({appHandleToggle}) {

  const [showPopup, setShowPopup] = useState(false);
  const [toggleVibes, setToggleVibes] = useState(false);

  function togglePop(){
    setShowPopup(!showPopup);
  }

  function handleToggle () {
    setToggleVibes(!toggleVibes)
    appHandleToggle(toggleVibes)
    console.log(toggleVibes)
  }




  return (
    <>
      <nav>
       <Link to="/"><h1>SAIL <RiSailboatLine /></h1> </Link>
        <div className="btn top" onClick={togglePop}>How To Sail</div>
        {showPopup ? <Popup toggle={togglePop} /> : null}
        <NavLink className="nav-link" to="about">
          About
        </NavLink>
        <div className="top" onClick={handleToggle}> {toggleVibes ? 'Serref:Personal' : 'Serrf:Flatiron'}</div>
      </nav>
    </>
  );
}

export default NavBar;
