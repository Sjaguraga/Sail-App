import React,{useState} from 'react'

function Box({data, box_id}) {
    const [upvotes, setUpvotes] = useState(data.upvotes)

    function handleUpvote () {

      fetch(`http://localhost:9292/upvote/${box_id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
  })
     
     setUpvotes(upvotes+1)

}

    function handleDownvote () {
        fetch(`http://localhost:9292/downvote/${box_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
        })
            setUpvotes(upvotes -1)
    }

    function handleRedirect () {
        console.log("send me to my page plz")
    }


  return (
    <>
        <div className="flexbox-item" id={`item${box_id}`}>
          <p onClick={handleRedirect} className="Box_Title">{data.title}</p>
          <p className='upvotes'>{upvotes}</p>
          <button onClick={handleUpvote}>Upvote</button>
          <button onClick={handleDownvote}>Downvote</button>
        </div>
  

        {/* <div className="flexbox-item" id="item2">
          <p className="HomeText">Mind</p>
          <button>Upvote</button>
        </div>
      </div>

      <div className="flexbox-container">
        <div className="flexbox-item" id="item3">
          <p className="HomeText">Heart</p>
          <button>Upvote</button>
        </div>

        <div className="flexbox-item" id="item4">
          <p className="HomeText">Soul</p>
          <button>Upvote</button>
        </div> */}
    
    </>
  )
}

export default Box