// Create an input field component that allows a user to type in text and displays the text in real-time.
// Every time the user types something in the input field, the text should update in the text element
// You should use the useState hook to keep track of the text state

import { useState } from 'react';

const Exercise1 = () => {
    const [myValue, setMyValue] = useState("Josh Nolan");

    const handleChange = (event) => {
        setMyValue(event.target.value);
    }

    return (
        <div>
            <h1>Controlled Input Field</h1>
            <h4> Hello, {myValue}</h4>
            <input type="text" onChange={handleChange} />

            {/* 
            - create a button to reset the state value back to its initial myValue
            - button should also set the value of input to initial state value 
            */}

        </div>
    )
}

export default Exercise1