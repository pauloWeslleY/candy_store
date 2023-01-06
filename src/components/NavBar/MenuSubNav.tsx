import { memo } from "react";
import Link from "next/link";
import {
   Box,
   Flex,
   // Link,
   Stack,
   Text,
   Icon,
   Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavItemProps } from "./index";

interface MenuSubNavProps {
   menu: NavItemProps;
}

function MenuSubNav({ menu }: MenuSubNavProps) {
   const { href, label, subLabel } = menu;

   return (
      <Link href={href}>
         <Box
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: "brown.200" }}
         >
            <Stack direction={"row"} align={"center"}>
               <Box>
                  <Text
                     transition={"all .3s ease"}
                     _groupHover={{ color: "green.300" }}
                     fontWeight={500}
                     fontFamily={"heading"}
                     fontSize={"xl"}
                  >
                     {label}
                  </Text>
                  <Text fontSize={"sm"}>{subLabel}</Text>
               </Box>
               <Flex
                  transition={"all .3s ease"}
                  transform={"translateX(-10px)"}
                  opacity={0}
                  _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                  justify={"flex-end"}
                  align={"center"}
                  flex={1}
               >
                  <Icon color={"green.300"} w={5} h={5} as={ChevronRightIcon} />
               </Flex>
            </Stack>
         </Box>
      </Link>
   );
}

export default memo(MenuSubNav);
