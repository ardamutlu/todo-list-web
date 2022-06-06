import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createBrowserHistory } from "history";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

export const history: any = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  compose(composeWithDevTools(applyMiddleware(sagaMiddleware)))
);

sagaMiddleware.run(rootSaga);

export default { store };
