import { memo } from "react";
import {
   Stack,
   Flex,
   Text,
   VStack,
   useBreakpointValue,
} from "@chakra-ui/react";
import { CarouselProps } from "./index";

interface CarouselCoverFlowProps {
   carouselInner: CarouselProps;
}

function BannerCarouselCoverFlowItem({
   carouselInner,
}: CarouselCoverFlowProps) {
   const { title, image } = carouselInner;

   const font = useBreakpointValue({ base: "3xl", md: "3xl" });
   const padding = useBreakpointValue({ base: 4, md: 8 });

   return (
      <Flex
         w={"full"}
         h={"45vh"}
         border={"1px solid"}
         borderColor={"gray.200"}
         borderRadius={32}
         backgroundImage={`url(${image})`}
         backgroundSize={"cover"}
         backgroundPosition={"center center"}
      >
         <VStack
            w={"full"}
            justify={"flex-end"}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            borderRadius={32}
            pb={8}
            px={padding}
         >
            <Stack maxW={"xl"} align={"flex-start"} spacing={6}>
               <Text
                  color={"gray.100"}
                  fontWeight={700}
                  fontSize={font}
                  fontFamily={"heading"}
                  lineHeight={1.2}
               >
                  {title}
               </Text>
            </Stack>
         </VStack>
      </Flex>
   );
}

export default memo(BannerCarouselCoverFlowItem);
