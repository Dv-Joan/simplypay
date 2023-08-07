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
        <p className="ml-2 text-2xl font-bold">
          simply
          <span className="text-[#0917EA]">pay</span>
        </p>
      </div>
      <nav className="flex justify-center gap-4">
        <ul className="flex items-center text-sm text-slate-500">
          <li className="mr-6">
            <a className="hover:text-[#0917EA] " href="/">
              Overview
            </a>
          </li>
          <li className="mr-6">
            <a className=" hover:text-[#0917EA]  " href="/">
              Activity
            </a>
          </li>
          <li className="mr-6">
            <a className=" hover:text-[#0917EA]  " href="/">
              Payment{" "}
            </a>
          </li>
          <li className="mr-6">
            <a className=" hover:text-[#0917EA]  " href="/">
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
