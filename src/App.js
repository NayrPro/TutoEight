import React, {useRef} from 'react';
import './App.css';
import Onglets from './Composants/Onglets'
function App() {
  let cursorRef = useRef()

  const mousePos = e =>{
    console.log(cursorRef.current);
    cursorRef.current.setAttribute("style", `top: ${e.pageY - 20}px; left : ${e.pageX - 20}px;`)
  }

  return (
    <div onMouseMove={mousePos} className="App">
      <div ref={cursorRef} className="custom-cursor"></div>
      <Onglets/>
    </div>
  );
}

export default App;
