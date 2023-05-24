import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addCounter,
    decrementCounter,
    resetCounter
} from "./actions/counterActions";

const Counter = () => {
    const { amount } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCounter());
    };

    const handleMinus = () => {
        dispatch(decrementCounter());
        // alert("CREATE MINUS ACTION")
    };

    const handleReset = () => {
        dispatch(resetCounter());
    };

    return (
        <div>
            <h4>{amount}</h4>
            <button onClick={handleAdd}> ADD </button>
            <button onClick={handleMinus}> MINUS </button>
            <button onClick={handleReset}> RESET </button>
        </div>
    );
};

export default Counter;
