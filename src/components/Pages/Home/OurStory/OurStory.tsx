import { memo } from "react";
import {
   Container,
   Grid,
   GridItem,
   Flex,
   Heading,
   Text,
} from "@chakra-ui/react";
import { CAROUSEL_ITEM, SectionProps, StoryCarousel, HeroTitle } from "./index";

function OurStory(OurStoryProps: SectionProps) {
   const { title, subtitle, description } = OurStoryProps;

   return (
      <>
         <Container maxW={"6xl"}>
            <Grid
               as={"section"}
               templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(12, 1fr)",
               }}
               my={14}
               py={6}
            >
               <GridItem colSpan={7} placeSelf={"center"}>
                  <Flex flexDir={"column"} align={"center"}>
                     <HeroTitle title={title} subtitle={subtitle} />

                     <Text as={"p"} textAlign={"center"}>
                        {description}
                     </Text>
                  </Flex>
               </GridItem>
               <GridItem colSpan={{ base: 7, lg: 5 }}>
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
