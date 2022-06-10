import { StoreState } from "./constants";
import { mockState as prioritiesMockState } from "./priorities/priorities.mock";
import { mockState as jobsMockState } from "./jobs/jobs.mock";

export const initialState: StoreState = {
  jobs: jobsMockState,
  priorities: prioritiesMockState,
};
