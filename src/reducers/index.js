import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import cartReducer from "../client/redux/cartRedux"


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    cart: cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))