import { memo } from "react";
import {
   Container,
   Flex,
   Grid,
   GridItem,
   Heading,
   Text,
} from "@chakra-ui/react";
import { HeroHistoryImage } from "./index";

interface Props {}

function HeroInfoHistory(props: Props) {
   const {} = props;

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
                     <Heading as={"h2"} size={"2xl"}>
                        {"title"}
                     </Heading>

                     <Text as={"h3"} fontSize={"4xl"} letterSpacing={"widest"}>
                        {"subtitle"}
                     </Text>

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
