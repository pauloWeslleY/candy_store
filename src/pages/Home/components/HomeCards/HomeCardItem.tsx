import { memo } from "react";
import { Flex, Image, Stack, chakra } from "@chakra-ui/react";
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
         flexDir={"column"}
         basis={"15rem"}
         shadow={"lg"}
         rounded={"lg"}
         align={"center"}
         p={2}
         border={"0.215rem solid"}
         borderColor={"brown.100"}
         transition={"all 0.4s ease-out"}
         _hover={{
            transform: "translateY(-3px)",
         }}
      >
         <Image src={image} alt={""} fit={"cover"} boxSize={40} />

         <Stack py={5} textAlign="center">
            <chakra.span fontSize={"3xl"} color={"gray.700"}>
               {description}
            </chakra.span>
         </Stack>
      </Flex>
   );
}

export default memo(HomeCardItem);
