import React, {useEffect, useState} from "react";
import Box from "./Box";
// import { Link } from "react-router-dom"



function Home() {
  const [boxes, setBoxes] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/boxes")
    .then(resp => resp.json())
    .then(data => {
      setBoxes(data)
    })
    },[])


    
    let mappedBoxes = boxes.map(box => {
      return (
        <Box 
        key={box.id}
        data={box}
        box_id = {box.id}
        />
      ) 
    })
  

  return (
    <>
    <div id="MasterDiv">
    {mappedBoxes}
    </div>
  

    </>
  );
}

export default Home
