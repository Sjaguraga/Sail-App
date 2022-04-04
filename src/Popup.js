import React from 'react'

function Popup ({ toggle }) {

  return (
    <div className="modal">
        <div className="modal_content">
        <span className="close" onClick={toggle}>&times;    </span>
        <p>Ask Moish and Serref. <br></br> We got you.</p>
        </div>
    </div>
  )
}

export default Popup
