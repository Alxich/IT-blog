import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk)) // Used for chrome extension
);

window.store = store;

export default store;
