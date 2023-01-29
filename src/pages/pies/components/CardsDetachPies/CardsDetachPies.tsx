import { memo } from "react";
import { Container, Grid, GridItem, Image, Box, Flex } from "@chakra-ui/react";
import { HeroTitle } from "./index";

export function CardsDetachPies() {
   const CARDS = [1, 2, 3];

   return (
      <Box my={8} py={"2rem"}>
         <Container maxW={"7xl"}>
            <Grid
               templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                  lg: "repeat(5, 1fr)",
               }}
               gap={6}
            >
               <GridItem
                  w={"full"}
                  colSpan={{ base: 1, sm: 2, md: 2 }}
                  pt={"4rem"}
               >
                  <Flex alignSelf={"flex-start"}>
                     <HeroTitle title="Daily Menu" subtitle="Tortas Detach" />
                  </Flex>
               </GridItem>
               {CARDS.map((item) => (
                  <GridItem key={item} w={"full"}>
                     <Image
                        borderRadius={"5rem"}
                        objectFit={"cover"}
                        h={"17rem"}
                        alt={""}
                        src={"/images/slide/slide1.jpg"}
                        cursor={"pointer"}
                        transition={"all 0.5s ease-in"}
                        _hover={{
                           transform: "translateY(-3px) rotate(8deg)",
                           boxShadow: "10px 5px 5px var(--brown-40)",
                        }}
                     />
                  </GridItem>
               ))}
            </Grid>
         </Container>
      </Box>
   );
}

export default memo(CardsDetachPies);
