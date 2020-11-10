import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from './_reducers/index';
import thunk from "redux-thunk"
const a: any = window;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


