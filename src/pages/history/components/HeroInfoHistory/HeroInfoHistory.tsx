import { memo } from "react";
import { Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { HeroHistoryImage, HeroTitle } from "./index";

function HeroInfoHistory() {
   return (
      <>
         <Container maxW={"6xl"}>
            <Grid
               templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(12, 1fr)",
               }}
               columnGap={8}
               mt={20}
               mb={5}
            >
               <GridItem colSpan={6} placeSelf={"center"}>
                  <Flex flexDir={"column"} align={"center"}>
                     <HeroTitle title="History" subtitle="The Confectionery" />

                     <Text as={"p"} textAlign={"center"}>
                        {`
                           Et sit magna dolore kasd sed dolore invidunt
                           invidunt no aliquyam. Dolor gubergren ipsum nonumy
                           ea, aliquyam dolores lorem invidunt takimata duo
                           lorem sea diam. Diam et eos justo dolore duo et
                           rebum. Rebum diam rebum diam accusam. Dolore
                           invidunt sed amet amet sed erat.
                        `}
                     </Text>
                  </Flex>
               </GridItem>
               <GridItem colSpan={6}>
                  <HeroHistoryImage />
               </GridItem>
            </Grid>
         </Container>
      </>
   );
}

export default memo(HeroInfoHistory);
