import AsyncStorage from "@react-native-community/async-storage"; // async-storage??
import {
    createStore,
    applyMiddleware
} from "redux";
import ReduxThunk from "redux-thunk"; //use of redux thunk??
import {
    persistStore,
    persistReducer
} from "redux-persist";
import rootReducer from "./reducers/index";
// import authReducer from "./reducers/authReducer";
import {
    createLogger
} from 'redux-logger';

// Middleware: Redux Persist Config
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['counterReducer','authReducer'],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],
}

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer, //create store using this reducer to save it in persist storage
    {}, //purpose of passing??
    applyMiddleware(ReduxThunk)
);

let persistor = persistStore(store);

export {
    store,
    persistor
}