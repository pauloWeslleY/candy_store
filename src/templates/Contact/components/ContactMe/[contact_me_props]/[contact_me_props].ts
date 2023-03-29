import { IconType } from 'react-icons';
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall  } from "react-icons/fi";

export interface ContactProps {
   id?: string;
   name: string;
   label: string;
   icon: IconType;
}

export const CONTACT_ME: Array<ContactProps> = [
   {
      id: crypto.randomUUID(),
      name: "Email",
      label: "candyscakes@gmail.com",
      icon: HiOutlineMail
   },
   {
      id: crypto.randomUUID(),
      name: "Address",
      label: "R. Amauri Souza, 346",
      icon: HiOutlineLocationMarker
   },
   {
      id: crypto.randomUUID(),
      name: "Telephone",
      label: "(11) 99845-6754",
      icon: FiPhoneCall
   },
]