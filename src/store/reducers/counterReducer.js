import {
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from "../actions/actionType";

// Initial state
const initialState = {
    counter: 0
};
console.log('initialState',initialState);
// Reducers (Modifies The State And Returns A New State)
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        // Increase reducer
        case INCREASE_COUNTER: {
            return {
                // state
                // ...state,
                // Redux Store
                counter: state.counter + 1
            }
        }
        // Decrease reducer
        case DECREASE_COUNTER: {
            return {
                // state
                // ...state,
                // Redux Store
                counter: state.counter - 1
            }
        }
        default: {
            return state;
        }

    }
}

export default counterReducer;