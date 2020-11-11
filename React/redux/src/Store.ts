import { applyMiddleware, compose, createStore, Store } from "redux";
import { IRootState, rootReducer } from './_reducers/index';
import thunk from "redux-thunk"
const a: any = window;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store:Store<IRootState> = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


