import { memo } from "react";
import { Flex, Image } from "@chakra-ui/react";

function HeroHistoryImage() {
   const BOX_IMAGE: Array<string> = [
      "/images/slide/slide1.jpg",
      "/images/slide/slide2.jpg",
      "/images/slide/slide3.jpg",
      "/images/slide/slide4.jpg",
      "/images/slide/slide5.jpg",
      "/images/slide/slide6.jpg",
   ];

   return (
      <>
         <Flex flexWrap={"wrap"} gap={2}>
            {BOX_IMAGE.map((props, index) => (
               <Flex key={index} flexBasis={36} grow={1} shrink={1}>
                  <Image src={props} alt="" fit={"cover"} boxSize={"10rem"} />
               </Flex>
            ))}
         </Flex>
      </>
   );
}

export default memo(HeroHistoryImage);
