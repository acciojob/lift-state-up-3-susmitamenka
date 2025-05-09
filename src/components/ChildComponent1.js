import React from "react";

const ChildComponent1=({onSelect})=>{
    return(
        <div className="child">
      <button onClick={()=>onSelect("Option 1")}>select option 1</button>
        </div>
    )
}
export default ChildComponent1