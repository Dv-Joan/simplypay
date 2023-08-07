import React from "react";
import ContactProfile from "./contact";
import PlusIcon from "@/assets/icons/plus.png";

function Contacts() {
  return (
    <div className="grid items-center justify-between grid-cols-5 mx-2 text-center">
      <button className="border-1 w-20 border-[#0917EA] rounded-full p-2">
        <img
          className="p-0.5 rounded-full w-5 bg-[#0917EA]"
          src={PlusIcon}
          alt="add"
          title="add contact"
        />
      </button>
      <ContactProfile
        profileImage="https://randomuser.me/api/portraits/women/44.jpg"
        name="Kinan"
      />
      <ContactProfile
        profileImage="https://randomuser.me/api/portraits/women/44.jpg"
        name="Kinan"
      />
      <ContactProfile
        profileImage="https://randomuser.me/api/portraits/women/44.jpg"
        name="Kinan"
      />
      <ContactProfile
        profileImage="https://randomuser.me/api/portraits/women/44.jpg"
        name="Kinan"
      />
    </div>
  );
}

export default Contacts;
