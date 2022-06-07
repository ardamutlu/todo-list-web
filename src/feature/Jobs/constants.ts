import { uid } from "@utils/helpers/uid.helpers";
import * as yup from "yup";

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

export const ValidateSchema = yup.object().shape({
  name: yup.string().required("Bu alan zorunludur"),
  priority: yup.string().required("Bu alan zorunludur"),
});
