import { memo } from "react";
import {
   Flex,
   IconButton,
   Stack,
   Collapse,
   Container,
   useDisclosure,
   Avatar,
   Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MenuNav, MobileNav, SocialButton } from "./index";
import ButtonOrder from "../Buttons/ButtonOrder";

function NavBar() {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <>
         <Container maxW={"6xl"}>
            <Flex
               color={"brown.600"}
               minH={"60px"}
               py={{ base: 2 }}
               px={{ base: 4 }}
               align={"center"}
            >
               <Flex
                  flex={{ base: 1, md: "auto" }}
                  ml={{ base: -2 }}
                  display={{ base: "flex", md: "none" }}
               >
                  <IconButton
                     onClick={onToggle}
                     icon={
                        isOpen ? (
                           <CloseIcon w={3} h={3} />
                        ) : (
                           <HamburgerIcon w={5} h={5} />
                        )
                     }
                     variant={"ghost"}
                     aria-label={"Toggle Navigation"}
                  />
               </Flex>
               <Flex
                  flex={{ base: 1 }}
                  justify={{ base: "center", md: "start" }}
                  align={"center"}
               >
                  <Avatar
                     src={"/images/logotipo.jpg"}
                     name={"Logotipo"}
                     size={"md"}
                  />

                  <Flex display={{ base: "none", md: "flex" }} ml={10}>
                     <MenuNav />
                  </Flex>
               </Flex>

               <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={"flex-end"}
                  align={"center"}
                  direction={"row"}
                  spacing={6}
               >
                  <ButtonOrder name="Pedir Agora" />
                  <Divider
                     orientation={"vertical"}
                     borderColor={"brown.700"}
                     borderWidth={"1px"}
                     h={"2rem"}
                  />

                  <SocialButton />
               </Stack>
            </Flex>
         </Container>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav />
         </Collapse>
      </>
   );
}

export default memo(NavBar);
