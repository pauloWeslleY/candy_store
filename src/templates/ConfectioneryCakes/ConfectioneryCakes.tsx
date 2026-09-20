import { Box, Container } from "@chakra-ui/react";
import { HeroTitle } from "../../components/HeroTitle";
import {
   BannerCarouselCreative,
   BANNER_CAROUSEL_ITEM,
} from "./components/BannerCarousel/index";
import { MenuCakesConfectionery } from "./components/MenuCakesConfectionery";

export default function ConfectioneryCakesPage() {
   return (
      <main>
         <header>
            <Box my={6}>
               <Container maxW={"8xl"}>
                  {BANNER_CAROUSEL_ITEM && (
                     <BannerCarouselCreative carousel={BANNER_CAROUSEL_ITEM} />
                  )}
               </Container>
            </Box>
         </header>

         <section>
            <Box mt={12}>
               <HeroTitle title="Daily Menu" subtitle="Bolos Confeitados" />
            </Box>

            <Box>
               <MenuCakesConfectionery />
            </Box>
         </section>
      </main>
   );
}
