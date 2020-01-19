import { createStore, applyMiddleware } from "redux";
import root from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
export default store;