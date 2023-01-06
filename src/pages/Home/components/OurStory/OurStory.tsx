import { memo } from "react";
import {
   Container,
   Grid,
   GridItem,
   Flex,
   Heading,
   Text,
} from "@chakra-ui/react";

import { StoryCarousel } from "../StoryCarousel";
import { CAROUSEL_ITEM, SectionProps } from "./index";

function OurStory(OurStoryProps: SectionProps) {
   const { title, subtitle, description } = OurStoryProps;

   return (
      <>
         <Container maxW={"6xl"}>
            <Grid
               as={"section"}
               templateColumns={"repeat(12, 1fr)"}
               my={14}
               py={6}
            >
               <GridItem colSpan={7} placeSelf={"center"}>
                  <Flex flexDir={"column"} align={"center"}>
                     <Heading as={"h2"} size={"2xl"}>
                        {title}
                     </Heading>

                     <Text as={"h3"} fontSize={"4xl"} letterSpacing={"widest"}>
                        {subtitle}
                     </Text>

                     <Text as={"p"} textAlign={"center"}>
                        {description}
                     </Text>
                  </Flex>
               </GridItem>
               <GridItem colSpan={5}>
                  <Flex
                     align={"center"}
                     p={5}
                     justify={"center"}
                     transform={"rotate(-3deg)"}
                  >
                     {CAROUSEL_ITEM && <StoryCarousel slide={CAROUSEL_ITEM} />}
                  </Flex>
               </GridItem>
            </Grid>
         </Container>
      </>
   );
}

export default memo(OurStory);
