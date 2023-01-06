import { memo } from "react";
import {
   Box,
   Flex,
   Text,
   IconButton,
   Stack,
   Collapse,
   Container,
   useBreakpointValue,
   useDisclosure,
   Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MenuNav, MobileNav } from "./index";

function NavBar() {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Box as={"nav"}>
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
                  direction={"row"}
                  spacing={6}
               ></Stack>
            </Flex>
         </Container>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav />
         </Collapse>
      </Box>
   );
}

export default memo(NavBar);
