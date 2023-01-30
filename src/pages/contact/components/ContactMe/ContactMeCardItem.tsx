import { memo } from "react";
import { Box, chakra, Flex, Heading, Icon } from "@chakra-ui/react";
import { ContactProps } from "./index";

interface ContactMeCardItemProps {
   contactMe: ContactProps;
}

function ContactMeCardItem({ contactMe }: ContactMeCardItemProps) {
   const { name, label, icon } = contactMe;

   return (
      <Flex
         flexDir={"column"}
         flexBasis={44}
         flexGrow={1}
         flexShrink={1}
         justify={"center"}
         align={"center"}
         shadow={"md"}
         rounded={"lg"}
         py={8}
         m={2}
         transition={"all 0.6s ease-in"}
         _hover={{
            transform: "translateY(-5px)",
         }}
      >
         <Icon as={icon} w={70} h={70} color={"brown.400"} />
         <Box py={5} textAlign={"center"} color={"brown.400"}>
            <Heading size={"xl"} fontWeight={"bold"}>
               {name}
               <chakra.span
                  display={"block"}
                  fontSize={"xl"}
                  fontFamily={"body"}
               >
                  {label}
               </chakra.span>
            </Heading>
         </Box>
      </Flex>
   );
}

export default memo(ContactMeCardItem);
