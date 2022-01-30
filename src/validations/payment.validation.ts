import * as Yup from "yup";

export const validationSchema = Yup.object({
  date: Yup.date().required("Required"),
  type: Yup.array().length(1).required("Required"),
  item: Yup.array().length(1).required("Required"),
  count: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
});
