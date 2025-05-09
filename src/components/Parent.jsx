import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    const[name,setName]=useState("")
    return(
        <div className="parent">
          <h1>Parent Component</h1>
          <p>{name}</p>

          <Child setName={setName}/>
        </div>
    )
}
export default Parent