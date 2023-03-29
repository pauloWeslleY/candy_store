import { memo } from "react";
import {
   Flex,
   chakra,
   Box,
   SimpleGrid,
   Container,
   Heading,
} from "@chakra-ui/react";
import { HeroHistoryStaticList } from "./index";

interface StaticProps {
   title: string;
   text: string;
}

function HeroHistoryStatic({ title, text }: StaticProps) {
   return (
      <Box>
         <Container maxW={"6xl"}>
            <Flex
               p={15}
               w={"auto"}
               justifyContent={"center"}
               alignItems={"center"}
            >
               <Box
                  rounded={"xl"}
                  shadow={"md"}
                  bg={"brown.500"}
                  px={8}
                  py={20}
               >
                  <SimpleGrid
                     alignItems={"center"}
                     columns={{
                        base: 1,
                        lg: 2,
                     }}
                     spacingY={{
                        base: 10,
                        lg: 32,
                     }}
                     spacingX={{
                        base: 10,
                        lg: 24,
                     }}
                  >
                     <Box>
                        <Heading
                           mb={3}
                           fontSize={{
                              base: "3xl",
                              md: "4xl",
                           }}
                           fontWeight={"extrabold"}
                           textAlign={{
                              base: "center",
                              sm: "left",
                           }}
                           lineHeight={"shorter"}
                           letterSpacing={"tight"}
                           color={"green.300"}
                        >
                           {title}
                        </Heading>
                        <chakra.p
                           mb={6}
                           fontSize={{
                              base: "lg",
                              md: "md",
                           }}
                           textAlign={{
                              base: "center",
                              sm: "left",
                           }}
                           color={"brown.100"}
                        >
                           {text}
                        </chakra.p>
                     </Box>
                     <HeroHistoryStaticList />
                  </SimpleGrid>
               </Box>
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(HeroHistoryStatic);
