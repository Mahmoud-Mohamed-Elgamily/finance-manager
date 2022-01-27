import * as Yup from "yup";

export const validationSchema = Yup.object({
  date: Yup.date().required("Required"),
  type: Yup.string().required("Required"),
  item: Yup.string().required("Required"),
  count: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
});
