import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { THEME } from "../theme/theme";
import "../scss/global.scss";
import "../scss/slider.scss";

import { HeroHeader } from "../components/HeroHeader";
import { Footer } from "../components/Footer";
import { BackToTopButton } from "../components/BackToTopButton";

function App({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={THEME}>
         <HeroHeader title="Rose" label="Gourmet" />

         <Component {...pageProps} />

         <Footer />
         <BackToTopButton />
      </ChakraProvider>
   );
}

export default App;
