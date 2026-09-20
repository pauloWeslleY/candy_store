import { memo } from "react";
import { Box, Center, Container, Flex } from "@chakra-ui/react";
import { ContactMeCardItem, HeroTitle, CONTACT_ME } from "./index";

function ContactMe() {
   return (
      <Box py={20}>
         <Container maxW={"7xl"}>
            <Center py={4}>
               <HeroTitle title={"Contatos"} subtitle={"Fale Conosco"} />
            </Center>

            <Flex flexWrap={"wrap"}>
               {CONTACT_ME.map((item) => (
                  <ContactMeCardItem key={item.id} contactMe={item} />
               ))}
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(ContactMe);
