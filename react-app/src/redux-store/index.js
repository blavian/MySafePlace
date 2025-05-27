import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from 'redux-thunk';

import session from "./session";
import notebook from "./notebook";
import affirmation from "./affirmation";

const rootReducer = combineReducers({
  session,
  notebook,
  affirmation
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

