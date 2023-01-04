import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { THEME } from "../theme/theme";

export default function MyDocument() {
   return (
      <Html lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin=""
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <ColorModeScript initialColorMode={THEME.config.initialColorMode} />
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
