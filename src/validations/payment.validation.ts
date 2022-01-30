import * as Yup from "yup";

export const validationSchema = Yup.object({
  date: Yup.date().required("Required"),
  type: Yup.array().length(1).required("Required"),
  items: Yup.array().min(1).required("Required"),
  count: Yup.number().moreThan(0).required("Required"),
  price: Yup.number().moreThan(0).required("Required"),
});
