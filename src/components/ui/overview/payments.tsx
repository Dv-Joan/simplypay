import Payment from "./payment";
import { payments } from "./../../../data";
import { IPayment } from "@/types";

function Payments() {
  return (
    <div>
      {payments.map((payment: IPayment) => (
        <Payment
          key={payment.id}
          companyLogo={payment.companyLogo}
          company={payment.company}
          exchange={payment.exchange}
          amount={payment.amount}
          date={payment.date}
          type={payment.type}
        />
      ))}
    </div>
  );
}

export default Payments;
