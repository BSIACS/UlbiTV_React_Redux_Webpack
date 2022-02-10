import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {reposReducer} from "./reposReducer.js";

const reducers = combineReducers({
    repos: reposReducer,
});


export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));