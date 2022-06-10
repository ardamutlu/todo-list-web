import { uid } from "../../utils/helpers";
import { JobState } from "./types";

export const mockState: JobState[] = [
  {
    id: uid(),
    name: "Lorem ipsum",
    priority: "Urgent",
  },
];
