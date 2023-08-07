import { Contact } from "@/types";
interface ContactItemProps extends Contact {}

function ContactProfile(contact: ContactItemProps) {
  const { profileImage, name } = contact;
  return (
    <div className="w-12 text-center ">
      <img
        className="rounded-full"
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
