import { memo } from "react";
import { Box, Center, Container, Flex } from "@chakra-ui/react";

import { PiesProductsCards, HeroTitle } from "./index";

export function PiesProducts() {
   const CAKES = [1, 2, 3, 4, 5, 6];

   return (
      <Box py={"2rem"}>
         <Container maxW={"7xl"}>
            <Center pb={"2rem"}>
               <HeroTitle title="Daily Menu" subtitle="Tortas Products" />
            </Center>

            <Flex wrap={"wrap"}>
               {CAKES.map((item) => (
                  <PiesProductsCards key={item} />
               ))}
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(PiesProducts);
