import { memo } from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";

export function PiesProductsCards() {
   return (
      <Flex
         flexBasis={"20rem"}
         flexGrow={1}
         flexShrink={1}
         m={"1rem"}
         direction={"column"}
         justifyContent={"center"}
         alignItems={"center"}
      >
         <Box
            h={64}
            w={"100%"}
            maxW={"lg"}
            rounded={"lg"}
            shadow={"md"}
            bgSize={"cover"}
            bgPos={"center"}
            style={{
               backgroundImage: `url("/images/slide/slide3.jpg")`,
            }}
         />

         <Box
            w={{
               base: 56,
               md: 64,
            }}
            bg={"brown.100"}
            mt={-10}
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            cursor={"pointer"}
            transition={"all 0.8s ease-in-out"}
            _hover={{
               bg: "green.10",
               transform: "rotate(4deg)",
            }}
         >
            <chakra.h3
               py={2}
               textAlign={"center"}
               fontWeight={"bold"}
               textTransform={"uppercase"}
               letterSpacing={1}
            >
               {"Pies"}
            </chakra.h3>
         </Box>
      </Flex>
   );
}

export default memo(PiesProductsCards);
