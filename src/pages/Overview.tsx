import QRIcon from "../assets/images/qr-code.png";
import SendIcon from "../assets/images/send.png";
import CreditCard from "../components/ui/overview/credit-card";
import Receivers from "../components/ui/overview/receivers";
import RightIcon from "../assets/images/next.png";
import Contacts from "../components/ui/overview/contacts";
import Payments from "../components/ui/overview/payments";
function Overview() {
  return (
    <div className="py-16 space-y-12 px-44">
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Welcome back, Octavia !</h3>
          <h5 className="text-[12px] text-slate-600">
            Here's your account overview today, take a moment to have a look fot
            this.
          </h5>
        </div>
        <div className="flex gap-3">
          <button className="border-[#0917EA] active:bg-[#D4D7FB]  hover:scale-105 duration-150 hover:bg-[#E2E4FC] border-2 rounded-2xl p-3">
            <img src={QRIcon} alt="qr" width={20} />
          </button>
          <button className="border-[#0917EA] active:bg-[#D4D7FB]  hover:scale-105 duration-150 hover:bg-[#E2E4FC]  border-2 px-7 rounded-2xl p-3">
            Receive
          </button>
          <button className="bg-[#0917EA] active:bg-[#0611a7] hover:scale-105 duration-150 flex gap-4 items-center text-white px-10 rounded-2xl p-3">
            Send
            <img src={SendIcon} alt="qr" width={15} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <CreditCard />
        <div className="row-span-2 border-2 space-y-7 p-7 rounded-3xl ">
          <div className="space-y-3">
            <p className="flex items-baseline justify-between">
              <h3 className="text-[18px] font-semibold">Send Again</h3>
              <a
                className="flex items-center text-sm font-semibold text-blue-500 gap-7 duration "
                href="/contacts"
              >
                See Contacts
                <img src={RightIcon} alt="go" width={8} />
              </a>
            </p>
            <Contacts />
          </div>
          <div>
            <p className="flex items-baseline justify-between">
              <h3 className="text-[18px] font-semibold">Recent Payments</h3>
              <a
                className="flex items-center text-sm font-semibold text-blue-500 gap-7 duration "
                href="/payments"
              >
                See Payments
                <img src={RightIcon} alt="go" width={8} />
              </a>
            </p>
            <Payments />
          </div>
        </div>
      </div>
      <Receivers />
    </div>
  );
}

export default Overview;
