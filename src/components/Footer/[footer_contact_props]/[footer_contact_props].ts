import { IconType } from "react-icons";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

interface FooterItemProps {
   label: string;
   icon?: IconType;
}

export const FOOTER_ITEM: Array<FooterItemProps> = [
   {
      label: "São Paulo, Brasil.",
      icon: MdOutlineLocationOn,
   },
   {
      label: "rosegourmet@outlook.com",
      icon: MdOutlineEmail,
   },
   {
      label: "(+55) 11 94512-5687",
      icon: FiPhoneCall,
   },
];
