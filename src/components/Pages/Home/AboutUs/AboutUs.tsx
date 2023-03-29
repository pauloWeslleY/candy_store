import { memo } from "react";
import {
   Container,
   Grid,
   GridProps,
   GridItem,
   Heading,
   Flex,
   Text,
   Image,
   Box,
} from "@chakra-ui/react";

interface AboutUsProps extends GridProps {
   title: string;
   description: string;
   image: string;
}

function AboutUs(AboutProps: AboutUsProps) {
   const { title, description, image, ...props } = AboutProps;

   return (
      <>
         <Box bg={"background"} py={9}>
            <Container maxW={"6xl"}>
               <Grid
                  {...props}
                  templateColumns={{
                     base: "repeat(1, 1fr)",
                     lg: "repeat(12, 1fr)",
                  }}
                  my={10}
                  gap={8}
               >
                  <GridItem colSpan={6} placeSelf={"center"}>
                     <Image
                        src={image}
                        alt={""}
                        fit={"cover"}
                        boxSize={"20rem"}
                        borderRadius={"3xl"}
                        border={"0.2rem solid"}
                        borderColor={"brown.200"}
                        transform={"rotate(3deg)"}
                     />
                  </GridItem>
                  <GridItem colSpan={6} placeSelf={"center"}>
                     <Flex
                        align={"center"}
                        justify={"center"}
                        flexDir={"column"}
                     >
                        <Heading as={"h3"} size={"2xl"} mb={9}>
                           {title}
                        </Heading>
                        <Text as={"p"} textAlign={"center"}>
                           {description}
                        </Text>
                     </Flex>
                  </GridItem>
               </Grid>
            </Container>
         </Box>
      </>
   );
}

export default memo(AboutUs);
