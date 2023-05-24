import { ADD_COUNTER, MINUS_COUNTER, RESET_COUNTER } from "../actions/action.types";

const initalState = {
    amount: 0,
};

const counter = (state = initalState, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                amount: action.count
            };
        case MINUS_COUNTER:
            return {
                ...state,
                amount: action.count
            };
        case RESET_COUNTER:
            return {
                ...state,
                amount: action.count
            };
        default:
            return state;
    }
};

export default counter;
