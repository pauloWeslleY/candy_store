import { memo } from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { HomeCardItem, HasButton, HOME_CARDS } from "./index";

type HomeCardsProps = {
   title: string;
   subtitle: string;
   id: string;
};

function HomeCards(props: HomeCardsProps) {
   const { title, subtitle, id } = props;

   return (
      <>
         <Box id={id} as={"section"} mt={5} mb={10} p={6}>
            <Container maxW={"6xl"}>
               <Flex
                  flexDir={"column"}
                  align={"center"}
                  justify={"center"}
                  mt={10}
                  mb={8}
               >
                  <Heading as={"h2"} size={"2xl"}>
                     {title}
                  </Heading>
                  <Text as={"h3"} fontSize={"4xl"} letterSpacing={"widest"}>
                     {subtitle}
                  </Text>
               </Flex>

               <Flex gap={4} flexWrap={"wrap"} justify={"center"} mb={14}>
                  {HOME_CARDS.map((card, index) => (
                     <HomeCardItem key={index} homeCards={card} />
                  ))}
                  <HasButton name="Todos os Produtos" icon={<AddIcon />} />
               </Flex>
            </Container>
         </Box>
      </>
   );
}

export default memo(HomeCards);
