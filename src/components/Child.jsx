const Child = ({ callProp }) => {

    const sendData = () => {
        callProp("data from child");
    }

    return (
        <div>
            <h4>Child</h4>

            <button onClick={sendData} >change state</button>
        </div>
    )
}

export default Child