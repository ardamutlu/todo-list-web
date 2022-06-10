import { uid } from "../../utils/helpers";

export type FormValues = {
  id: string;
  name: string;
  priority: string;
};

export const DEFAULT_VALUES = {
  id: uid(),
  name: "",
  priority: "",
};
