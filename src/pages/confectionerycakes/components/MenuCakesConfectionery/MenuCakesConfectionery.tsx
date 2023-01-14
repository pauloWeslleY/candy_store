import { memo } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { MenuCakesConfectioneryItem, MENU_CAKES } from "./index";

function MenuCakesConfectionery() {
   return (
      <>
         <Container maxW={"6xl"}>
            <Flex as={"section"} flexWrap={"wrap"} gap={5} my={16}>
               {MENU_CAKES.map((item, index) => (
                  <MenuCakesConfectioneryItem key={index} cakes={item} />
               ))}
            </Flex>
         </Container>
      </>
   );
}

export default memo(MenuCakesConfectionery);
