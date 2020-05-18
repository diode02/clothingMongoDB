import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleWare from "redux-saga";

import rootSaga from "./root.saga";

import rootReducer from "./root.reducer";

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [sagaMiddleWare, logger];

// if (process.env.NODE_ENV === "developemnt") middleWares.push();

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(rootSaga);

export default store;
