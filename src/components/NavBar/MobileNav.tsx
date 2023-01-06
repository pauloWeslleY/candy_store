import { memo } from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import { MobileNavItem, NAV_ITEMS } from "./index";

const MobileNav = () => (
   <Stack bg={"green.100"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
         <MobileNavItem key={navItem.label} {...navItem} />
      ))}
   </Stack>
);

export default memo(MobileNav);
