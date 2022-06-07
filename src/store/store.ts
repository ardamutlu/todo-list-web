import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import logger from "redux-logger";
import { rootReducer, rootSaga } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  compose(composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))
);

sagaMiddleware.run(rootSaga);

export default { store };
