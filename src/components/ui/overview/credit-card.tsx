import RightIcon from "./../../../assets/icons/next-white.png";
import CreditCardIcon from "./../../../assets/images/credit-card.png";
import Graph from "./graph";

function CreditCard() {
  return (
    <div className=" h-64 bg-gradient-to-tl from-gray-800 via-gray-400 to-black hover:bg-blue-600 duration-700 w-[500px] text-white rounded-3xl grid grid-cols-2 justify-between p-7">
      <div className="space-y-3">
        <h3 className="text-sm">Balance</h3>
        <p className="flex items-center gap-3">
          <img src={CreditCardIcon} alt="logo" width={30} />
          <h3 className="text-3xl font-semibold ">240.15</h3>
          <span className="px-2 text-sm rounded-full bg-slate-400 opacity-80">
            USD
          </span>
        </p>
      </div>
      <div className="">
        <a
          className="flex items-center justify-end text-[11px]  hover:text-blue-500 gap-5  duration-300 "
          href="/payments"
        >
          See my statistic
          <img src={RightIcon} alt="go" width={8} />
        </a>
      </div>
      <div className="flex flex-col col-span-2 ">
        <h3 className="text-[11px] ">This Month</h3>
        <div className="flex justify-between">
          <Graph />
          <div className="space-y-5">
            <p className="space-y-1">
              <h3 className="text-[11px]">Income</h3>
              <p className="flex items-center gap-2">
                <span className="p-1 bg-green-300 rounded-full" />
                <h3 className="">20.15 </h3>
                <span className="px-2 text-[10px] ">USD</span>
              </p>
            </p>
            <p className="space-y-1">
              <h3 className="text-[11px]">Expenses</h3>
              <p className="flex items-center gap-2">
                <span className="p-1 bg-red-200 rounded-full" />
                <h3 className="">20.15 </h3>
                <span className="px-2 text-[10px] ">USD</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
