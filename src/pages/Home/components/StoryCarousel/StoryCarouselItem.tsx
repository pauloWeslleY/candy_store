import { memo } from "react";
import { Image } from "@chakra-ui/react";
import { CarouselProps } from "./index";

interface StoryCarouselItemProps {
   carouselItem: CarouselProps;
}

function StoryCarouselItem({ carouselItem }: StoryCarouselItemProps) {
   const { image, altDescription } = carouselItem;

   return (
      <Image
         src={image}
         alt={altDescription}
         rounded={"xl"}
         border={"0.2rem solid"}
         borderColor={"brown.500"}
         fit={"cover"}
         maxW={"100%"}
         w={"2xl"}
         h={56}
      />
   );
}

export default memo(StoryCarouselItem);
