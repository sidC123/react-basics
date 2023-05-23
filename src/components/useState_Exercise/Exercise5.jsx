// create a simple Color Switcher component that allows users to change the background color of a div by selecting a color from a dropdown list.
// Create a dropdown list with a few color options (e.g., red, blue, green, yellow)
// When a color is selected from the dropdown, the background color of the div should change to the selected color
// Use the useState hook to manage the background color state

import { useState } from 'react'

const Exercise5 = () => {
    const [bgColor, setBgColor] = useState('');

    const handleBg = (event) => {
        setBgColor(event.target.value);
    }

    return (
        <div>
            <h1>Color Switcher</h1>
            <select onChange={handleBg}>
                <option value="" >Select color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>

            <div style={{ backgroundColor: bgColor, width: '500px', height: '500px', margin: "auto", border: "2px solid black" }}></div>
        </div>
    )
}

export default Exercise5