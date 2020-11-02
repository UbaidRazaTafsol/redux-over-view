import {
    LOGIN
} from "../actions/actionType";
// initial state
const initialState = {
    loggedIn: false,
}

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    console.log('action==========',action)
    switch (action.type) {
        case LOGIN: {
            return {
                // State
                ...state,
                // Redux Store
                loggedIn: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export default authReducer;