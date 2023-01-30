import { memo } from "react";
import {
   Stack,
   Flex,
   Text,
   VStack,
   useBreakpointValue,
} from "@chakra-ui/react";
import { ButtonBanner } from "../../../../components/Buttons";
import { ImArrowRight2 } from "react-icons/im";

function BannerCakes() {
   return (
      <Flex
         w={"full"}
         h={"55vh"}
         my={8}
         backgroundImage={"url(/images/banner/banner01.jpg)"}
         backgroundSize={"cover"}
         backgroundPosition={"center center"}
      >
         <VStack
            w={"full"}
            pt={6}
            justify={"flex-start"}
            align={"flex-end"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
         >
            <Stack maxW={"2xl"} align={"flex-end"} spacing={6}>
               <Text
                  color={"whiteAlpha.900"}
                  textAlign={"right"}
                  lineHeight={1.2}
                  fontWeight={700}
                  fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                  fontFamily={"heading"}
               >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor
               </Text>
               <Stack direction={"row"}>
                  <ButtonBanner
                     name="Mais Sobre a Confeitaria"
                     icon={<ImArrowRight2 />}
                  />
                  <ButtonBanner
                     name="Faça sua Encomenda"
                     icon={<ImArrowRight2 />}
                  />
               </Stack>
            </Stack>
         </VStack>
      </Flex>
   );
}

export default memo(BannerCakes);
