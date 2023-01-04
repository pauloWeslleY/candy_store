import { extendTheme, type ThemeConfig, ChakraTheme } from "@chakra-ui/react";

//? Include custom option in here... colors, fonts, etc!!
const config: ThemeConfig = {
   initialColorMode: "light",
   useSystemColorMode: false,
};

const customTheme: Partial<ChakraTheme> = {
   config: {
      initialColorMode: "light",
   },
}

export const THEME = extendTheme({
   config,
   customTheme,
   styles: {
      global: {
         "body": {
            bg: "background",
            color: "gray.800",
         },
      },
   },
   fonts: {
      heading: `'Dancing Script', cursive`,
      body: `'Dancing Script', cursive`,
   },
   colors: {
      background: "var(--background)",
   },

});

export default THEME;
