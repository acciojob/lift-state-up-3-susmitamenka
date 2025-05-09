import React from "react";

const Child=({setName})=>{
    return(
        <div className="child">
       <h1>Child Component</h1>
       <form>
        <input type="text"
        onChange={(e)=>setName(e.target.value)}/>
       </form>
        </div>
    )
}
export default Child