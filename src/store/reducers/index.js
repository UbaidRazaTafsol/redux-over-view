import { combineReducers } from "redux";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";

// Combine all reducers in root reducer
const rootReducer = combineReducers({
    authReducer,
    counterReducer
})

export default rootReducer;