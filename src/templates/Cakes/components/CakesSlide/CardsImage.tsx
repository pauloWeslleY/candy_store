import { memo } from "react";
import { Box, Image } from "@chakra-ui/react";
import { HomeCardsProps } from "./index";

interface CardsImageProps {
   cards: HomeCardsProps;
}

function CardsImage({ cards }: CardsImageProps) {
   const { image, description } = cards;

   return (
      <Box border={"2px solid"} borderColor={"whiteAlpha.700"} borderRadius={4}>
         <Image
            src={image}
            alt={description}
            borderRadius={4}
            boxSize={"20rem"}
         />
      </Box>
   );
}

export default memo(CardsImage);
