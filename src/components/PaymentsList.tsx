import { useEffect } from "react";
import { IPayment } from "../interfaces/IPayment";
import Database from "../logic/database";
import "./styles.scss";

const PaymentsList = ({
  payments,
  setPayments,
}: {
  payments: IPayment[];
  setPayments: React.Dispatch<React.SetStateAction<IPayment[]>>;
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setPayments(await Database.getPayments());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="table-responsive mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Item</th>
            <th>Type</th>
            <th>Count</th>
            <th>TotalPrice</th>
          </tr>
        </thead>
        <tbody>
          {payments.length ? (
            payments.map((payment, index) => (
              <tr key={"payment" + index}>
                <td>{new Date(payment.date).getDate()}</td>
                <td>
                  {payment.items.map((item) => (
                    <span className="badge bg-success">{item.label}</span>
                  ))}
                </td>
                <td>{payment.type[0].label}</td>
                <td>{payment.count}</td>
                <td>{payment.count * payment.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}> Don't use me and save your money xD</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsList;
