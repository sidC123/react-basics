// Create a simple Character Counter component that allows users to type in text and displays the number of characters in real-time.
// Create a textarea element for users to type in text
// Display the character count below the textarea in real-time
// Use the useState hook to manage the text state

import { useState } from "react"

const Exercise3 = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <h1>Character Counter</h1>

            <textarea type="text" value={text} onChange={handleChange} />

            <p>Character count: {text.length}</p>
        </div>
    )
}

export default Exercise3