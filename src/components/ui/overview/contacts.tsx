import React from "react";
import ContactProfile from "./contact";
import AddContactIcon from "./../../../assets/icons/plus.png";

function Contacts() {
  return (
    <div className="grid grid-cols-5 text-center">
      <div className="flex flex-col items-center w-16 text-center">
        <button className="border-1 w-12 h-12 flex items-center justify-center  border-[#0917EA]  active:bg-[#D4D7FB]  hover:scale-105 duration-150 hover:bg-[#E2E4FC] rounded-full p-3">
          <img src={AddContactIcon} alt="add" title="add contact" />
        </button>
        <h3 className="pt-1 text-[13px]">Add New</h3>
      </div>
      <ContactProfile
        profileImage="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        name="Kinan"
      />
      <ContactProfile
        profileImage="https://randomuser.me/api/portraits/men/29.jpg"
        name="Ahmad"
      />
      <ContactProfile
        profileImage="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
        name="Lina"
      />
      <ContactProfile
        profileImage="https://randomuser.me/api/portraits/men/18.jpg"
        name="Robert"
      />
    </div>
  );
}

export default Contacts;
