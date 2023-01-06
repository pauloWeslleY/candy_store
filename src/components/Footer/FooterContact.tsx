import { memo } from "react";
import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { FOOTER_ITEM } from "./index";

interface Props {}

function FooterContact(props: Props) {
   const {} = props;

   return (
      <>
         <List spacing={6}>
            {FOOTER_ITEM.map((item, index) => (
               <ListItem key={index} color={"brown.700"}>
                  <Flex align={"center"} fontSize={{ base: "md", lg: "md" }}>
                     <ListIcon as={item.icon} />
                     {item.label}
                  </Flex>
               </ListItem>
            ))}
         </List>
      </>
   );
}

export default memo(FooterContact);
