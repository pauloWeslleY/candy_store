import { Box, Container, Heading } from "@chakra-ui/react";
import {
   BannerCarouselCoverFlow,
   BANNER_CAROUSEL_ITEM,
} from "./components/BannerCarousel/index";

export default function ConfectioneryCakesPage() {
   return (
      <main>
         <header>
            <Box my={6}>
               <Container maxW={"8xl"}>
                  {BANNER_CAROUSEL_ITEM && (
                     <BannerCarouselCoverFlow carousel={BANNER_CAROUSEL_ITEM} />
                  )}
               </Container>
            </Box>
         </header>
      </main>
   );
}
