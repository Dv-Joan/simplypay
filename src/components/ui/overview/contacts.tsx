import ContactProfile from "./contact";
import AddContactIcon from "./../../../assets/icons/plus.png";
import { contacts } from "../../../data";
import { IContact } from "@/types";

function Contacts() {
  return (
    <div className="grid grid-cols-5 text-center">
      <div className="flex flex-col items-center w-16 text-center">
        <button className="border-1 w-12 h-12 flex items-center justify-center  border-[#0917EA]  active:bg-[#D4D7FB]  hover:scale-105 duration-150 hover:bg-[#E2E4FC] rounded-full p-3">
          <img src={AddContactIcon} alt="add" title="add contact" />
        </button>
        <h3 className="pt-1 text-[13px]">Add New</h3>
      </div>
      {contacts.slice(1, 5).map((contact: IContact) => (
        <ContactProfile
          id={contact.id}
          profileImage={contact.profileImage}
          name={contact.name}
        />
      ))}
    </div>
  );
}

export default Contacts;
