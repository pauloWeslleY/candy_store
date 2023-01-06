import { memo } from "react";
import {
   Container,
   Grid,
   GridProps,
   GridItem,
   Flex,
   Text,
   Image,
} from "@chakra-ui/react";

interface HeroHomeProps extends GridProps {
   contentOne: {
      title: string;
      subtitle: string;
      image: string;
   };
   contentTwo: {
      title: string;
      subtitle: string;
      image: string;
   };
}

function HeroHome(HeroHomeProps: HeroHomeProps) {
   const { contentOne, contentTwo, ...props } = HeroHomeProps;

   return (
      <>
         <Container maxW={"6xl"}>
            <Grid
               {...props}
               templateColumns={"repeat(2, 1fr)"}
               p={5}
               gap={14}
               my={24}
            >
               <GridItem>
                  <Flex flexDir={"column"} gap={5}>
                     <Text as={"h3"} fontSize={"2xl"}>
                        {contentOne.title}
                     </Text>
                     <Text as={"p"} fontSize={"lg"} fontWeight={"light"}>
                        {contentOne.subtitle}
                     </Text>

                     <Image
                        src={contentOne.image}
                        alt={""}
                        fit={"cover"}
                        boxSize={"45rem"}
                     />
                  </Flex>
               </GridItem>
               <GridItem>
                  <Flex flexDir={"column"} gap={5}>
                     <Image
                        src={contentTwo.image}
                        alt={""}
                        fit={"cover"}
                        boxSize={"45rem"}
                     />

                     <Text as={"h3"} fontSize={"2xl"}>
                        {contentTwo.title}
                     </Text>
                     <Text as={"p"} fontSize={"lg"} fontWeight={"light"}>
                        {contentTwo.subtitle}
                     </Text>
                  </Flex>
               </GridItem>
            </Grid>
         </Container>
      </>
   );
}

export default memo(HeroHome);
