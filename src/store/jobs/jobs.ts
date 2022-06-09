import { JobState, JobActions } from "./types";

export const actionTypes = {
  GET_JOBS: "[Jobs Api] Get Jobs",
  CREATE_JOB: "[Jobs Api] Create Job",
  DELETE_JOB: "[Jobs Api] Delete Job",
  UPDATE_JOB: "[Jobs Api] Update Job",
  RESET_JOBS: "[Jobs Api] Reset Jobs",
};

const initialState: JobState[] = [];

export const reducer = (state = initialState, action: JobActions | any) => {
  switch (action.type) {
    case actionTypes.GET_JOBS:
      const items = localStorage.getItem("jobs") || "[]";
      return JSON.parse(items);

    case actionTypes.CREATE_JOB:
      const payload = state.concat(action.payload);
      localStorage.setItem("jobs", JSON.stringify(payload));
      return payload;

    case actionTypes.DELETE_JOB:
      const newState = state.filter((d) => d.id !== action.payload);
      localStorage.setItem("jobs", JSON.stringify(newState));
      return newState;

    case actionTypes.UPDATE_JOB:
      return action.payload;

    case "RESET_STORE":
    case actionTypes.RESET_JOBS:
      return initialState;

    default:
      return state;
  }
};

export const actions = {
  getJobs: () => ({
    type: actionTypes.GET_JOBS,
  }),
  createJob: (payload: JobState[]) => ({
    type: actionTypes.CREATE_JOB,
    payload,
  }),
  deleteJob: (payload: string) => ({
    type: actionTypes.DELETE_JOB,
    payload,
  }),
  updateJob: (payload: JobState[]) => ({
    type: actionTypes.DELETE_JOB,
    payload,
  }),
  resetJobs: () => ({
    type: actionTypes.RESET_JOBS,
  }),
};
