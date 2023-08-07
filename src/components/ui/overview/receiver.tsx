import NextIcon from "./../../../assets/images/next.png";
import { IContact, IPayment } from "@/types";

export function Receiver({
  contact,
  payment,
}: {
  contact: IContact;
  payment: IPayment;
}) {
  const { profileImage, name } = contact;
  const { date, amount, exchange, message, type } = payment;
  return (
    <div className="items-center w-40 h-56 p-4 space-y-3 duration-150 duration-200 hover:bg-slate-100 hover:shadow-md border-1 rounded-3xl">
      <div className="gap-3 text-center ">
        <div className="flex items-start justify-between">
          <img
            src={profileImage}
            className="rounded-full "
            alt="payment"
            width={50}
            height={50}
          />
          <button>
            <img
              src={NextIcon}
              alt="go"
              width={13}
              height={13}
              title="See Details"
            />
          </button>
        </div>
      </div>
      <div className="gap-10 space-y-3 ">
        <h4 className="text-sm">
          {type === "income" ? (
            <span>
              {" "}
              <strong className="text-blue-900">{name}</strong> sent you
            </span>
          ) : (
            <span>
              You send to <strong className="text-blue-900">{name}</strong>{" "}
            </span>
          )}
        </h4>
        <p className="flex items-baseline gap-4">
          <h3 className="font-semibold text-blue-500">{amount}</h3>
          <h5 className="text-[11px] text-slate-600">{exchange}</h5>
        </p>
        <p className="space-y-3 text-left ">
          <h5 className="text-[11px] text-slate-600">{message}</h5>

          <h5 className="text-[10px] text-slate-600">{date}</h5>
        </p>
      </div>
    </div>
  );
}

export default Receiver;
