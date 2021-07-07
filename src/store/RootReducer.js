
import {combineReducers} from "redux";
import jobAdvertReducer from "./reducers/JobAdvertReducer";

const rootReducer = combineReducers({
    jobAdvertReducer:jobAdvertReducer
})

export default rootReducer;
