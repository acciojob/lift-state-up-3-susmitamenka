
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";


const App = () => {
  const[selectedOption,setSelectedOption]=useState("")

  const handleSelection=(Option)=>{
    setSelectedOption(Option)
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Selected Option: {selectedOption}</h1>
        <ChildComponent1 onSelect={handleSelection}/>
        <ChildComponent2 onSelect={handleSelection}/>
    </div>
  )
}

export default App
