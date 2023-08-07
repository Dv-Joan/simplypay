import QRIcon from "../assets/images/qr-code.png";
import SendIcon from "../assets/images/send.png";
function Overview() {
  return (
    <div className="py-16 px-44">
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
    </div>
  );
}

export default Overview;
