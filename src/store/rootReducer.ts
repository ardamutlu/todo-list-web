import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import * as get_priorities from "./priorities/get.priorities";
import * as jobs from "./jobs/jobs";
import { StoreState } from "./constants";

export const rootReducer = combineReducers({
  jobs: jobs.reducer,
  priorities: get_priorities.reducer,
});

export function* rootSaga() {
  yield all([fork(get_priorities.saga)]);
}
