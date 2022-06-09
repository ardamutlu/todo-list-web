import { JobState } from "./jobs/types";

export interface Priorities {
  name: string;
  value: string;
}

export interface InitialState<T> {
  entity: T[];
  loading: boolean;
  error: Error | null;
}

export interface StoreState {
  jobs: JobState[];
  priorities: InitialState<Priorities>;
}
