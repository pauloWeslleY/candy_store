import { memo } from "react";
import { Flex, FlexProps, Heading, Text } from "@chakra-ui/react";

interface HeroTitleProps extends FlexProps {
   title: string;
   subtitle?: string;
   alignPlace?: string;
}

function HeroTitle(TitleProps: HeroTitleProps) {
   const { title, subtitle, alignPlace, ...props } = TitleProps;

   return (
      <Flex {...props} flexDir={"column"} align={"center"}>
         <Heading as={"h2"} size={"2xl"}>
            {title}
         </Heading>

         <Text as={"h3"} fontSize={"4xl"} letterSpacing={"widest"}>
            {subtitle}
         </Text>
      </Flex>
   );
}

export default memo(HeroTitle);
