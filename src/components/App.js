import React, {useState} from "react";
import React from "react";
import './../styles/App.css';


const App = () => {
 const [counter.updateCounter]=useStae(0);
  const onClick=()=>{
    updateCounter(counter+1);
  };
  return (
  <div>
   <p>button clicked {counter} times</p>
    <button onClick={onClick}>click me</button>
    </div>

  )
}

export default App
