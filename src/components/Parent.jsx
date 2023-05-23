import Child from "./Child";
import { useState } from "react";

const Parent = () => {
    const [parentState, setParentState] = useState("I am Parent");

    const parentCallback = (childData) => {
        setParentState(childData);
    }

    return (
        <div>
            <h4>Parent</h4>

            <h1>{parentState}</h1>

            <button onClick={() => parentCallback("new data")} >CLick</button>

            <Child callProp={parentCallback} />
        </div>
    )
}

export default Parent