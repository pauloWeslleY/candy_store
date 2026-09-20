import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

//? Include custom option in here... colors, fonts, etc!!
const config: ThemeConfig = {
   initialColorMode: "light",
   useSystemColorMode: false,
};

export const THEME = extendTheme({
   config,
   styles: {
      global: (props: Record<string, any> | StyleFunctionProps) => ({
         body: {
            bg: mode("background2", "background2")(props),
            color: "brown.700",
         },
      }),
   },
   fonts: {
      heading: `'Dancing Script', cursive`,
      body: `'Lexend', sans-serif`,
   },
   colors: {
      background: "var(--background)",
      background2: "var(--background-200)",
      brown: {
         100: "var(--brown-100)",
         200: "var(--brown-200)",
         300: "var(--brown-300)",
         400: "var(--brown-400)",
         500: "var(--brown-500)",
         600: "var(--brown-600)",
         700: "var(--brown-700)",
      },
      green: {
         100: "var(--green-100)",
         300: "var(--green-300)",
      },
      red: {
         200: "var(--red-200)",
         300: "var(--red-300)",
      },
      gray: {
         100: "var(--gray-100)",
         200: "var(--gray-200)",
         400: "var(--gray-300)",
         500: "var(--gray-500)",
      },
   },
});

export default THEME;
