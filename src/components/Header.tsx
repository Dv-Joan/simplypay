import React from "react";

const NavLinks = [
  {
    name: "Overview",
    value: "overview",
    href: "/overview",
  },
  {
    name: "Activity",
    value: "activity",
    href: "/activity",
  },
  {
    name: "Payment",
    value: "payment",
    href: "/payment",
  },
  {
    name: "Help Center",
    value: "help",
    href: "/help",
  },
];

function Header() {
  return (
    <div className="flex justify-between px-16 py-5 bg-white">
      <a href="/" className="flex items-center cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10452/10452806.png"
          alt="logo"
          className="w-10 h-10"
        />
        <p className="ml-2 text-2xl font-bold">
          simply
          <span className="text-[#0917EA]">pay</span>
        </p>
      </a>
      <ul className="flex items-center text-[13px] text-slate-500">
        {NavLinks.map((NavLink) => (
          <li key={NavLink.value} className="w-20 ">
            <a
              className="hover:text-[#0917EA] hover:font-semibold duration-300  "
              href={NavLink.href}
            >
              {NavLink.name}
            </a>
          </li>
        ))}
      </ul>
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
