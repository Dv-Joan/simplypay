import { IContact } from "@/types";

function ContactProfile(contact: IContact) {
  const { profileImage, name } = contact;
  return (
    <div className="w-12 text-center duration-150 cursor-pointer hover:scale-105">
      <img
        className="border-2 rounded-full border-slate-400"
        src={profileImage}
        alt="contact"
        width={50}
        title={name}
      />
      <h3 className="pt-1 text-[13px]">{name}</h3>
    </div>
  );
}

export default ContactProfile;
