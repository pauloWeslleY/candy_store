import { memo } from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { HomeCardItem, HOME_CARDS } from "./index";
import { HasButton } from "../../../../components/Buttons";

type HomeCardsProps = {
   title: string;
};

function HomeCards(props: HomeCardsProps) {
   const { title } = props;

   return (
      <>
         <Box as={"section"} mt={5} mb={10} p={6}>
            <Container maxW={"6xl"}>
               <Flex justify={"center"} mt={10} mb={4}>
                  <Heading size={"2xl"}>{title}</Heading>
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
