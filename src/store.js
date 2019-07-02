import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reduser/remote";

export const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(state => console.log("state", state));
