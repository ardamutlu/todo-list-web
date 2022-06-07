import { actionTypes } from "./get.priorities";

export interface GetPrioritiesSuccessPayload {
  entity: any;
}

export interface GetPrioritiesFailurePayload {
  error: any;
}

export interface GetPrioritiesRequest {
  type: typeof actionTypes.GET_PRIORITIES_REQUEST;
}

export type GetPrioritiesSuccess = {
  type: typeof actionTypes.GET_PRIORITIES_SUCCESS;
  payload: GetPrioritiesSuccessPayload;
};

export type GetPrioritiesFailure = {
  type: typeof actionTypes.GET_PRIORITIES_FAILURE;
  payload: GetPrioritiesFailurePayload;
};
export type GetPrioritiesReset = {
  type: typeof actionTypes.GET_PRIORITIES_RESET;
};

export type PrioritiesActions =
  | GetPrioritiesRequest
  | GetPrioritiesSuccess
  | GetPrioritiesFailure
  | GetPrioritiesReset;
