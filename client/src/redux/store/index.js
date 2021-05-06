import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSIONCOMPOSE || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
