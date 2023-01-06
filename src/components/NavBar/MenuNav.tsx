import { memo } from "react";
import Link from "next/link";
import {
   Stack,
   Box,
   // Link,
   Popover,
   PopoverContent,
   PopoverTrigger,
   Button,
} from "@chakra-ui/react";
import { MenuSubNav, NAV_ITEMS } from "./index";

function MenuNav() {
   return (
      <Stack direction={"row"} spacing={4}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                     <Link href={navItem.href ?? "#"}>
                        <Button
                           p={2}
                           fontSize={"xl"}
                           fontWeight={500}
                           fontFamily={"heading"}
                           bg={"none"}
                           color={"brown.700"}
                           transition={"all 0.5s ease-out"}
                           _hover={{
                              textDecoration: "none",
                              color: "green.100",
                              transform: "translateY(-2px)",
                           }}
                        >
                           {navItem.label}
                        </Button>
                     </Link>
                  </PopoverTrigger>

                  {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={"xl"}
                        bg={"brown.100"}
                        p={4}
                        rounded={"xl"}
                        minW={"sm"}
                     >
                        <Stack>
                           {navItem.children.map((child) => (
                              <MenuSubNav key={child.label} menu={child} />
                           ))}
                        </Stack>
                     </PopoverContent>
                  )}
               </Popover>
            </Box>
         ))}
      </Stack>
   );
}

export default memo(MenuNav);
