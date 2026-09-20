import { NavItemProps } from '../../../types/NavItemProps'

// [] PagesLinks
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
            subLabel: "Venha Conhece Nossa Historia",
            href: "/history",
         },
         {
            label: "Contatos",
            subLabel: "Entre em contato conosco",
            href: "/contact",
         },
      ],
   },
   {
      label: "Bolos",
      children: [
         {
            label: "Bolos",
            subLabel: "Find your dream design job",
            href: "/cakes",
         },
         {
            label: "Bolos Confeitados",
            subLabel: "Find your dream design job",
            href: "/confectionerycakes",
         },
         {
            label: "Bolos Tradicionais",
            subLabel: "An exclusive list for contract work",
            href: "/traditionalcakes",
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
         {
            label: "Tortas",
            subLabel: "An exclusive list for contract work",
            href: "/pies",
         },
      ],
   },
   {
      label: "Blog",
      href: "/blog",
   },
];
