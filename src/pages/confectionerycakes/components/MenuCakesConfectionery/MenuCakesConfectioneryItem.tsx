import { memo } from "react";
import { Box, Flex, chakra, Image } from "@chakra-ui/react";
import { MenuCakesProps } from "./index";

interface MenuCakesItemProps {
   cakes: MenuCakesProps;
}

function MenuCakesConfectioneryItem({ cakes }: MenuCakesItemProps) {
   const { title, description, price, image } = cakes;

   return (
      <Flex
         as={"article"}
         basis={"24rem"}
         flexGrow={1}
         flexShrink={1}
         align={"center"}
         p={2}
      >
         <Box>
            <Image
               src={image}
               alt={""}
               fit={"cover"}
               borderRadius={"50%"}
               border={"0.2rem solid"}
               borderColor={"green.100"}
               w={"32rem"}
               h={"11rem"}
            />
         </Box>

         <Box py={12} px={6}>
            <Flex justify={"space-between"} align={"center"}>
               <chakra.h2
                  fontWeight={"bold"}
                  fontSize={{
                     base: "xl",
                     md: "2xl",
                  }}
                  color={"gray.500"}
               >
                  {title}
               </chakra.h2>
               <chakra.span
                  fontSize={{
                     base: "2xl",
                     md: "xl",
                  }}
                  color={"brown.300"}
               >
                  .......${price}
               </chakra.span>
            </Flex>
            <chakra.p mt={4} color={"gray.400"}>
               {description}
            </chakra.p>
         </Box>
      </Flex>
   );
}

export default memo(MenuCakesConfectioneryItem);
