import React from 'react'

function Popup ({ toggle }) {

  return (
    <div className="modal">
        <div className="modal_content">
        <span className="close" onClick={toggle}>&times;    </span>
        <p>I'm A Pop Up!!!</p>
        </div>
    </div>
  )
}

export default Popup
