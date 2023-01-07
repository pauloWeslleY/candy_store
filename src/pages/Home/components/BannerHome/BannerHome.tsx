import { memo } from "react";
import { Text, chakra, Container, Stack, Flex } from "@chakra-ui/react";
import { ArrowIconButton } from "../ArrowIconButton";
import { Link } from "react-scroll";

type BannerHomeProps = {
   title: string;
   label: string;
   subLabel: string;
   subtitle: string;
   id: string;
};

function BannerHome(BannerProps: BannerHomeProps) {
   const { title, subtitle, label, subLabel, id } = BannerProps;

   return (
      <>
         <Container maxW={"6xl"}>
            <Stack
               justify={"center"}
               align={"center"}
               textAlign={"center"}
               fontFamily={"heading"}
               h={"80vh"}
            >
               <chakra.h1
                  mb={6}
                  fontWeight={"bold"}
                  fontSize={{
                     base: "4xl",
                     md: "6xl",
                  }}
                  lineHeight={"none"}
                  letterSpacing={{
                     base: "normal",
                     md: "tight",
                  }}
               >
                  {title}{" "}
                  <Text
                     display={{
                        base: "block",
                        lg: "inline",
                     }}
                     w={"full"}
                     bgClip={"text"}
                     bgGradient={"linear(to-r, red.300,red.200)"}
                     fontWeight={"extrabold"}
                  >
                     {subLabel}
                  </Text>{" "}
                  {label}
               </chakra.h1>
               <chakra.p
                  px={{
                     base: 0,
                     lg: 24,
                  }}
                  mb={6}
                  fontSize={{
                     base: "lg",
                     md: "xl",
                  }}
                  color={"brown.500"}
               >
                  {subtitle}
               </chakra.p>
               <Flex justify={"center"}>
                  <Link
                     to={id}
                     smooth={true}
                     offset={-30}
                     duration={500}
                     delay={1000}
                  >
                     <ArrowIconButton />
                  </Link>
               </Flex>
            </Stack>
         </Container>
      </>
   );
}

export default memo(BannerHome);
