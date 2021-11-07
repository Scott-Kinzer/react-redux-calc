import {combineReducers ,createStore} from "redux";
import calcReducer from "../reducers/calcReducer";


let rootReducer = combineReducers(
    {
        calcReducer
    }
)

export const store = createStore(rootReducer)
