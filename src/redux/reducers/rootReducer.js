import { combineReducers } from "redux";
import LoginReducer from "./colorReducer";
const rootReducer = combineReducers({
    login:LoginReducer,   
})

export default rootReducer;