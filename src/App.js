import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [pos, setPos] = useState([0,0])

  const logMousePosition = e => {
      console.log(e.clientX, e.clientY)
      let arrPos = []
      arrPos[0] = e.clientX
      arrPos[1] = e.clientY
      setPos(arrPos)
    }

  useEffect(() => {
    console.log("Event on");
    window.addEventListener("mousemove", logMousePosition)

    return () => {
      console.log("Nettoyage");

      window.removeEventListener("mousemove", logMousePosition)
    }
    

  },[])
  

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
