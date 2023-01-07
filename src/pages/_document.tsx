import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { THEME } from "../theme/theme";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin=""
            />

            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="favicon.png" type="image/png" />

            <link
               href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;600&display=swap"
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
