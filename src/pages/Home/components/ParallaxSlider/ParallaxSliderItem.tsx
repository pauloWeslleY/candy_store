import { memo } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { SectionProps } from "./index";

interface ParallaxSliderItemProps {
   item: SectionProps;
}

function ParallaxSliderItem({ item }: ParallaxSliderItemProps) {
   const { title, subtitle, description } = item;

   return (
      <Flex
         p={20}
         as={"section"}
         flexDir={"column"}
         textAlign={"center"}
         maxW={"2xl"}
         color={"brown.700"}
         textShadow={"var(--green-100) 1px 0 10px"}
      >
         <Heading as={"h4"} data-swiper-parallax="-300">
            {title}
         </Heading>
         <Text as={"span"} data-swiper-parallax="-200">
            {subtitle}
         </Text>
         <Text as={"p"} data-swiper-parallax="-100">
            {description}
         </Text>
      </Flex>
   );
}

export default memo(ParallaxSliderItem);
