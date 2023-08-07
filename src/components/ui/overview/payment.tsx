import { Payment } from "@/types/payment";
import React from "react";
import NextIcon from "./../../../assets/images/next.png";

function Payment(payment: Payment) {
  const { company, date, amount, exchange, companyLogo } = payment;
  return (
    <div className="flex items-center justify-between px-3 py-5 duration-150 shadow-md hover:scale-105 rounded-3xl">
      <div className="flex gap-3 text-center">
        <div className="flex items-center justify-center w-10 p-2 rounded-full bg-zinc-200">
          <img src={companyLogo} alt="payment" width={25} height={25} />
        </div>
        <p className="text-left ">
          <h4 className="font-semibold">{company}</h4>
          <h5 className="text-[12px] text-slate-600">{date}</h5>
        </p>
      </div>
      <div className="flex items-baseline gap-10">
        <p className="flex items-baseline gap-1.5">
          <h3 className="font-semibold">-{amount}</h3>
          <h5 className="text-[11px] text-slate-600">{exchange}</h5>
        </p>
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
  );
}

export default Payment;
