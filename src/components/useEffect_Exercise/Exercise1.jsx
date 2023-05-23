// constructor	Initializes the component and sets up the initial state.
// componentDidMount	Called after the component has been rendered and is ready to be shown on the screen.
// componentDidUpdate	Called when the component updates, either due to state or prop changes.
// componentWillUnmount	Called right before the component is removed from the screen.

import { useState, useEffect } from "react"

const Exercise1 = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count <= 0) {
            return;
        }

        // Decrease count by 1 every second
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <div>
            <h1>Countdown Timer</h1>

            <h4>{count} </h4>

            {count === 0 && <h5>Time is Up!</h5>}
        </div>
    )
}

export default Exercise1