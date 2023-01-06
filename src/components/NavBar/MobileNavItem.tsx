import { memo } from "react";
import Link from "next/link";
import {
   Collapse,
   Stack,
   Flex,
   Box,
   Text,
   Icon,
   useColorModeValue,
   useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavItemProps } from "./index";

function MobileNavItem({ label, children, href }: NavItemProps) {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Stack spacing={4} onClick={children && onToggle}>
         <Flex
            py={2}
            as={Link}
            href={href ?? "#"}
            justify={"space-between"}
            align={"center"}
            _hover={{
               textDecoration: "none",
            }}
         >
            <Text fontWeight={600}>{label}</Text>
            {children && (
               <Icon
                  as={ChevronDownIcon}
                  transition={"all .25s ease-in-out"}
                  transform={isOpen ? "rotate(180deg)" : ""}
                  w={6}
                  h={6}
               />
            )}
         </Flex>

         <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: "0!important" }}
         >
            <Stack
               mt={2}
               pl={4}
               borderLeft={1}
               borderStyle={"solid"}
               borderColor={useColorModeValue("gray.200", "gray.700")}
               align={"start"}
            >
               {children &&
                  children.map((child) => (
                     <Link key={child.label} href={child.href}>
                        <Box py={2}>{child.label}</Box>
                     </Link>
                  ))}
            </Stack>
         </Collapse>
      </Stack>
   );
}

export default memo(MobileNavItem);
