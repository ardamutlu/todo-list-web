import { JobState } from "./jobs/types";

interface Priorities {
  [key: string]: string;
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
