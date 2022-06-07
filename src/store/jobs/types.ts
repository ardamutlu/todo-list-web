import { actionTypes } from "./jobs";

export interface JobState {
  id: string;
  name: string;
  priority: string;
}

export interface GetJobs {
  type: typeof actionTypes.GET_JOBS;
}

export type CreateJob = {
  type: typeof actionTypes.CREATE_JOB;
  payload: JobState[];
};

export type DeleteJob = {
  type: typeof actionTypes.DELETE_JOB;
  payload: string;
};

export type UpdateJob = {
  type: typeof actionTypes.UPDATE_JOB;
  payload: string;
};

export type ResetJobs = {
  type: typeof actionTypes.RESET_JOBS;
};

export type JobActions =
  | GetJobs
  | CreateJob
  | DeleteJob
  | UpdateJob
  | ResetJobs;
