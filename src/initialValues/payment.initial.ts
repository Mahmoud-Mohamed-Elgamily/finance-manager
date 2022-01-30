export const paymentInitialValues = {
  date: new Date().toISOString().slice(0, 10).replace("/", "-"),
  type: [],
  item: [],
  count: 1,
  price: 1,
};
