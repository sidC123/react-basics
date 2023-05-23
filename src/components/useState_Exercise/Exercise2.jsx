// create a component that toggles the visibility of a piece of text when a button is clicked.
// Initially, the text should be hidden
// When the button is clicked, the text should become visible if it was hidden, and hidden if it was visible
// Use the useState hook to manage the visibility state

import { useState } from "react";

const Exercise2 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <h1>Toggle Visibility</h1>
            <button onClick={handleVisibility} >Show/Hide Text</button>
            {isVisible && <p>Toggle me!</p>}
        </div>
    );
}

export default Exercise2