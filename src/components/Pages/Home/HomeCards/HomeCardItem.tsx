import { memo } from "react";
import { Flex, Image, Stack, chakra, Box } from "@chakra-ui/react";
import { HomeCardsProps } from "./index";

interface HomeCardItemProps {
   homeCards: HomeCardsProps;
}

function HomeCardItem({ homeCards }: HomeCardItemProps) {
   const { image, description } = homeCards;

   return (
      <Flex
         as={"article"}
         bg={"whiteAlpha.400"}
         basis={52}
         flexGrow={1}
         flexShrink={1}
         flexDir={"column"}
         align={"center"}
         shadow={"lg"}
         rounded={"lg"}
         p={4}
         border={"2px solid"}
         borderColor={"brown.200"}
         transition={"all 0.4s ease-out"}
         _hover={{
            transform: "translateY(-3px)",
         }}
      >
         <Box>
            <Image src={image} alt={description} fit={"cover"} boxSize={36} />
         </Box>

         <Stack py={5} textAlign={"center"}>
            <chakra.span fontSize={"3xl"} color={"gray.700"}>
               {description}
            </chakra.span>
         </Stack>
      </Flex>
   );
}

export default memo(HomeCardItem);
