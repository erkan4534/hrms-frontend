import {createStore} from "redux";
import rootReducer from "./RootReducer";
import {devToolsEnhancer} from "redux-devtools-extension";

export function configureStore(){
    return createStore(rootReducer,devToolsEnhancer());
}
