import {useState} from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
  
        {/* Do not remove the main div */}
    let[counter,updatecounter]=useState(0);
        const onclick=(){
            updatecounter(counter+1);
        };
  <div>
      
        <p>button clicked{counter}times</p>
        <button onclick={onclick}>click me</button>
  </div>

  )
}

export default App
