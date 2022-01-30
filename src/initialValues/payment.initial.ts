export const paymentInitialValues = {
  date: new Date().toISOString().slice(0, 10).replace("/", "-"),
  type: [],
  items: [],
  count: 0,
  price: 0,
};
