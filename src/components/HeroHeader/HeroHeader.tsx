import { memo } from "react";
import { Flex, Image, chakra, Stack } from "@chakra-ui/react";

type HeroHeaderProps = {
   title: string;
   label: string;
};

function HeroHeader(props: HeroHeaderProps) {
   const { title, label } = props;

   return (
      <chakra.header
         bg={"brown.100"}
         borderColor={"red.300"}
         borderBottomWidth={"0.2rem"}
         w={"full"}
         px={{
            base: 2,
            sm: 4,
         }}
         py={4}
      >
         <Flex alignItems={"center"} justifyContent={"center"} h={"10vh"}>
            <Stack
               direction={"column"}
               spacing={1}
               alignItems={"center"}
               justify={"center"}
            >
               <Image
                  boxSize={"4rem"}
                  alt={"Logo RosesGourmet"}
                  src={"/images/logo.png"}
               />
               <chakra.h1
                  color={"brown.600"}
                  fontSize={"1.8rem"}
                  fontWeight={"extrabold"}
               >
                  {title}
                  <chakra.span color={"red.200"}>{label}</chakra.span>
               </chakra.h1>
            </Stack>
         </Flex>
      </chakra.header>
   );
}

export default memo(HeroHeader);
