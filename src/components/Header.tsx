import React from "react";

function Header() {
  return (
    <div className="flex justify-between px-16 py-5 bg-white">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10452/10452806.png"
          alt="logo"
          className="w-10 h-10"
        />
        <h1 className="ml-2 text-2xl font-bold">Simplypay</h1>
      </div>
      <nav className="flex justify-center gap-4">
        <ul className="flex items-center">
          <li className="mr-6">
            <a
              className="text-slate-500 text-sm hover:text-[#1431ED] font-bold"
              href="/"
            >
              Overview
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-slate-500 text-sm hover:text-[#1431ED] font-bold"
              href="/"
            >
              Activity
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-slate-500 text-sm hover:text-[#1431ED] font-bold"
              href="/"
            >
              Payment{" "}
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-slate-500 text-sm hover:text-[#1431ED] font-bold"
              href="/"
            >
              Help Center
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <button>
          <img
            width={20}
            src="https://www.svgrepo.com/show/496445/notification.svg"
            alt="notification"
          />
        </button>
        <button>
          <img
            className="w-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/97.jpg"
            alt="profile"
          />
        </button>
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/32/32195.png"
            alt="icon"
            width={10}
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
