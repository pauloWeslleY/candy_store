import { memo } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { BiArrowToRight } from "react-icons/bi";

import { HomeCardItem, HasButton, HOME_CARDS, HeroTitle } from "./index";

type HomeCardsProps = {
   title: string;
   subtitle: string;
   id: string;
};

function HomeCards(props: HomeCardsProps) {
   const { title, subtitle, id } = props;

   return (
      <Box id={id} as={"section"} mt={5} mb={10} p={6}>
         <Container maxW={"6xl"}>
            <Flex
               flexDir={"column"}
               align={"center"}
               justify={"center"}
               mt={10}
               mb={8}
            >
               <HeroTitle title={title} subtitle={subtitle} />
            </Flex>

            <Flex gap={4} flexWrap={"wrap"} justify={"center"} mb={14}>
               {HOME_CARDS.map((card, index) => (
                  <HomeCardItem key={index} homeCards={card} />
               ))}
               <HasButton
                  name="Conheça Nossos Produtos"
                  icon={<BiArrowToRight />}
               />
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(HomeCards);
