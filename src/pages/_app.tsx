import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { THEME } from "../theme/theme";
import "../scss/global.scss";
import "../scss/slider.scss";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={THEME}>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}

export default MyApp;
