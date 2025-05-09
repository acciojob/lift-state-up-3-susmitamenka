import React from "react";

const ChildComponent2=({onSelect})=>{
    return(
        <div>
            <button onClick={()=>onSelect('Option 2')}>select option 2</button>
        </div>
    )
}
export default ChildComponent2