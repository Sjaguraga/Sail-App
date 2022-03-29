import React from "react";

function Home() {
  return (
    <>
      <div className="flexbox-container">
        <div className="flexbox-item" id='item1'>
          <p className="HomeText">Body</p>
          <button>Upvote</button>
        </div>

        <div className="flexbox-item" id= 'item2'>
          <p className="HomeText">Mind</p>
          <button>Upvote</button>
        </div>
      </div>
      
      <div className="flexbox-container">

        <div className="flexbox-item" id='item3'>
          <p className="HomeText">Heart</p>
          <button>Upvote</button>
        </div>

        <div className="flexbox-item" id='item4'>
          <p className="HomeText">Soul</p>
          <button>Upvote</button>
        </div>

      </div>
    
    </>
  )
}

export default Home;
