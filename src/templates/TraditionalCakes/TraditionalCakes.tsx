import { Box, Container } from "@chakra-ui/react";
import { HeroTitle } from "../../components/HeroTitle";
import { MenuCakesTraditional } from "./components/CakesTraditional";
import { ParallaxSlider, PARALLAX_ITEM } from "./components/ParallaxSlider";

export default function TraditionalCakesPages() {
   return (
      <main>
         <header>
            <Box as={"section"} mt={14} mb={10}>
               <Container maxW={"7xl"}>
                  {PARALLAX_ITEM && <ParallaxSlider parallax={PARALLAX_ITEM} />}
               </Container>
            </Box>
         </header>

         <section>
            <HeroTitle title="Daily Menu" subtitle="Bolos Tradicionais" />

            <MenuCakesTraditional />
         </section>
      </main>
   );
}
