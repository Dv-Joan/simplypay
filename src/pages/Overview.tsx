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
          <h3 className="text-xl font-bold">Welcome back, William !</h3>
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
      <div className="flex justify-between">
        <div>
          <CreditCard />
          <p className="flex items-baseline justify-between mt-10 mb-4">
            <h3 className="font-semibold ">Recent Money Transfer</h3>
            <a
              className="flex items-center  font-semibold text-blue-500 text-[12px] gap-7 duration "
              href="/payments"
            >
              See my activity
              <img src={RightIcon} alt="go" width={8} />
            </a>
          </p>
          <Receivers />
        </div>

        <div className="border-2 p-7 rounded-3xl w-[430px] ">
          <p className="flex items-baseline justify-between mb-4">
            <h3 className="font-semibold ">Send Again</h3>
            <a
              className="flex items-center text-[12px] font-semibold text-blue-500 gap-7 duration "
              href="/contacts"
            >
              See Contacts
              <img src={RightIcon} alt="go" width={8} />
            </a>
          </p>
          <Contacts />

          <div>
            <p className="flex items-baseline justify-between mt-10 mb-4">
              <h3 className="font-semibold ">Recent Payments</h3>
              <a
                className="flex items-center text-[12px] font-semibold text-blue-500 gap-7 duration "
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
      <footer className="flex justify-between text-sm text-slate-500">
        <h3>@ 2023 joanpaucar</h3>
        <div className="flex gap-3">
          <a href="/privacy">Privacy</a>

          <a href="/legal">Legal</a>
        </div>
      </footer>
    </div>
  );
}

export default Overview;
