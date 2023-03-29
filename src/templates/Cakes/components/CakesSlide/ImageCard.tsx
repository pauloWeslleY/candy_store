import { memo } from "react";
import { Box, Image } from "@chakra-ui/react";

function ImageCard() {
   return (
      <Box border={"2px solid"} borderColor={"whiteAlpha.700"} borderRadius={4}>
         <Image
            src={"/images/slide/slide8.jpg"}
            alt={"Description"}
            borderRadius={4}
         />
      </Box>
   );
}

export default memo(ImageCard);
