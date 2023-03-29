import { memo } from "react";
import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function MenuCakesTraditionalItem() {
   return (
      <Flex flexDir={"column"} basis={"19rem"} shrink={1} grow={1}>
         <Box border={"1px solid"} borderColor={"brown.200"} p={2}>
            <Image
               src={"/images/slide/slide3.jpg"}
               alt={""}
               fit={"cover"}
               w={"35rem"}
               h={"auto"}
            />
         </Box>
         <Flex flexDir={"column"} align={"center"} mt={3}>
            <Heading
               as={"h3"}
               size={"md"}
               fontWeight={500}
               textAlign={"center"}
            >
               Cakes / Candy
               <Text
                  as={"small"}
                  display={"block"}
                  fontFamily={"body"}
                  color={"brown.400"}
               >
                  Cakes/Cakes/Cakes
               </Text>
            </Heading>

            <Text as={"span"} mt={4}>
               <Badge variant={"subtle"} colorScheme={"white"} fontSize={"lg"}>
                  $15
               </Badge>
            </Text>
         </Flex>
      </Flex>
   );
}

export default memo(MenuCakesTraditionalItem);
