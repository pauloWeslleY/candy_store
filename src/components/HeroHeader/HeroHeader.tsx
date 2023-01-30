import { memo } from "react";
import { Flex, Image, chakra, Stack, Heading } from "@chakra-ui/react";

type HeroHeaderProps = {
   title: string;
   label: string;
};

function HeroHeader(props: HeroHeaderProps) {
   const { title, label } = props;

   return (
      <chakra.header
         bg={"brown.600"}
         borderColor={"red.300"}
         borderBottomWidth={"0.2rem"}
         w={"full"}
         px={{
            base: 2,
            sm: 4,
         }}
         py={4}
      >
         <Flex align={"center"} justify={"center"} maxH={"10vh"}>
            <Stack
               direction={"column"}
               spacing={1}
               align={"center"}
               justify={"center"}
            >
               <Image
                  boxSize={"4rem"}
                  alt={"Logo RosesGourmet"}
                  src={"/images/logo.png"}
               />
               <Heading as={"h1"} color={"brown.300"} fontWeight={"extrabold"}>
                  {title}
                  <chakra.span color={"red.200"}>{label}</chakra.span>
               </Heading>
            </Stack>
         </Flex>
      </chakra.header>
   );
}

export default memo(HeroHeader);
