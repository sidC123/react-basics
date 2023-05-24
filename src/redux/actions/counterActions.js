import { ADD_COUNTER, MINUS_COUNTER, RESET_COUNTER } from "./action.types";

let count = 0;

export const addCounter = () => {
    return {
        type: ADD_COUNTER,
        count: ++count
    };
};

export const decrementCounter = () => {
    if (count > 0) {
        return {
            type: MINUS_COUNTER,
            count: --count
        };
    }
    else {
        return { type: "NO_OP" };
    }
};

export const resetCounter = () => {
    count = 0;
    return {
        type: RESET_COUNTER,
        count: 0
    };
};