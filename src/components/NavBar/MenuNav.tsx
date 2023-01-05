import { memo } from "react";
import {
   Stack,
   Box,
   Link,
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@chakra-ui/react";
import { MenuSubNav, NAV_ITEMS } from "./index";

function MenuNav() {
   return (
      <Stack direction={"row"} spacing={4}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                     <Link
                        p={2}
                        href={navItem.href ?? "#"}
                        fontSize={"lg"}
                        fontWeight={500}
                        color={"brown.700"}
                        transition={"all 0.5s ease-out"}
                        _hover={{
                           textDecoration: "none",
                           color: "green.100",
                        }}
                     >
                        {navItem.label}
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
