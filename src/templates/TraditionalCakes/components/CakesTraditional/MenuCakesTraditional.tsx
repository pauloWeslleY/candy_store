import { memo } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { MenuCakesTraditionalItem } from "./index";

function MenuCakesTraditional() {
   const CAKES = [1, 2, 3, 4, 5, 6];

   return (
      <>
         <Container maxW={"6xl"}>
            <Flex flexWrap={"wrap"} gap={6} my={14}>
               {CAKES.map((_, index) => (
                  <MenuCakesTraditionalItem key={index} />
               ))}
            </Flex>
         </Container>
      </>
   );
}

export default memo(MenuCakesTraditional);
