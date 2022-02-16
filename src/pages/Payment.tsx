import { useState } from "react";
import NewPayment from "../components/NewPayment";
import PaymentsList from "../components/PaymentsList";
import { IPayment } from "../interfaces/IPayment";

const Payment = () => {
  const [payments, setPayments] = useState<IPayment[]>([]);
  return (
    <>
      <NewPayment payments={payments} setPayments={setPayments}/>
      <PaymentsList payments={payments} setPayments={setPayments}/>
    </>
  );
};

export default Payment;
