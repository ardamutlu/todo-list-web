import axios from "axios";
import { takeLeading, put, call, delay } from "redux-saga/effects";
import { InitialState, Priorities } from "../constants";
import {
  GetPrioritiesFailurePayload,
  GetPrioritiesSuccessPayload,
  PrioritiesActions,
} from "./types";

export const actionTypes = {
  GET_PRIORITIES_REQUEST: "[Priorities Api] Get Priorities Request",
  GET_PRIORITIES_SUCCESS: "[Priorities Api] Get Priorities Success",
  GET_PRIORITIES_FAILURE: "[Priorities Api] Get Priorities Failure",
  GET_PRIORITIES_RESET: "[Priorities Api] Get Priorities Reset",
};

const initialState: InitialState<Priorities> = {
  entity: [],
  loading: false,
  error: null,
};

export const reducer = (
  state = initialState,
  action: PrioritiesActions | any
) => {
  switch (action.type) {
    case actionTypes.GET_PRIORITIES_REQUEST:
      return { ...initialState, entity: null, loading: true, error: null };

    case actionTypes.GET_PRIORITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        entity: action.payload,
        error: null,
      };

    case actionTypes.GET_PRIORITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "RESET_STORE":
    case actionTypes.GET_PRIORITIES_RESET:
      return initialState;

    default:
      return state;
  }
};

export const actions = {
  getPrioritiesRequest: () => ({
    type: actionTypes.GET_PRIORITIES_REQUEST,
  }),
  getPrioritiesSuccess: (payload: GetPrioritiesSuccessPayload) => ({
    type: actionTypes.GET_PRIORITIES_SUCCESS,
    payload,
  }),
  getPrioritiesFailure: (payload: GetPrioritiesFailurePayload) => ({
    type: actionTypes.GET_PRIORITIES_FAILURE,
    payload,
  }),
  getPrioritiesReset: () => ({
    type: actionTypes.GET_PRIORITIES_RESET,
  }),
};

export function* saga() {
  yield takeLeading(
    actionTypes.GET_PRIORITIES_REQUEST,
    function* GetPrioritiesSaga() {
      try {
        const { response, error } = yield call(
          axios.get,
          "http://localhost:3000/priorities"
        );

        // yield delay(5000);

        if (error) {
          console.log("error:", error);
          yield put(actions.getPrioritiesFailure(error));
          return;
        }

        yield put(actions.getPrioritiesSuccess(response.data));
      } catch (e) {
        yield put(actions.getPrioritiesFailure({ error: e }));
      }
    }
  );
}
