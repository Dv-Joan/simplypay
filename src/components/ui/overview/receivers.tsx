import { contacts, payments } from "../../../data";
import Receiver from "./receiver";
import { IContact, IPayment } from "@/types";

function Receivers() {
  return (
    <div className="flex gap-2">
      {contacts.slice(1, 4).map((contact: IContact) => {
        const payment = payments.find((p: IPayment) => p.id === contact.id);

        if (payment) {
          return <Receiver contact={contact} payment={payment} />;
        }
      })}
    </div>
  );
}

export default Receivers;
