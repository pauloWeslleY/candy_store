import { NavItemProps } from '../../../types/NavItemProps'

export const NAV_ITEMS: Array<NavItemProps> = [
   {
      label: "Home",
      href: "/",
   },
   {
      label: "A Confeitaria",
      children: [
         {
            label: "Nossa Historia",
            subLabel: "Trending Design to inspire you",
            href: "/history",
         },
         {
            label: "Contatos",
            subLabel: "Up-and-coming Designers",
            href: "#",
         },
      ],
   },
   {
      label: "Bolos",
      children: [
         {
            label: "Bolos Confeitados",
            subLabel: "Find your dream design job",
            href: "#",
         },
         {
            label: "Bolos Tradicionais",
            subLabel: "An exclusive list for contract work",
            href: "#",
         },
      ],
   },
   {
      label: "Sobremesas",
      children: [
         {
            label: "Pudins",
            subLabel: "Find your dream design job",
            href: "#",
         },
         {
            label: "Rocambole",
            subLabel: "An exclusive list for contract work",
            href: "#",
         },
      ],
   },
   {
      label: "Tortas",
      href: "/pies",
   },
];
