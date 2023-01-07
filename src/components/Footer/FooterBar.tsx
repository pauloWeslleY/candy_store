import { memo } from "react";
import { Text, VStack, chakra, Divider } from "@chakra-ui/react";

function FooterBar() {
   return (
      <VStack py={3}>
         <Divider borderColor={"red.300"} maxW={"sm"} />
         <Text textAlign={"center"} fontSize={"sm"} color={"brown.600"}>
            {"Created by"}{" "}
            <chakra.a
               cursor={"pointer"}
               color={"brown.500"}
               onClick={() => window.open("https://weslleylima.vercel.app")}
               textDecoration={"none"}
               transition={"all 0.2s ease-in-out"}
               _hover={{
                  color: "red.200",
               }}
            >
               {"Weslley de Lima"}
            </chakra.a>
         </Text>
      </VStack>
   );
}

export default memo(FooterBar);
