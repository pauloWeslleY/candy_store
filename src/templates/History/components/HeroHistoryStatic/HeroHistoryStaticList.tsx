import { memo } from "react";
import { Flex, Icon, VStack, chakra } from "@chakra-ui/react";

function HeroHistoryStaticList() {
   const StaticList = (props: any) => (
      <Flex>
         <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={"red.200"}
            viewBox={"0 0 20 20"}
            fill={"currentColor"}
         >
            <path
               fillRule="evenodd"
               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
               clipRule="evenodd"
            ></path>
         </Icon>
         <chakra.p fontSize={"lg"} color={"brown.100"} {...props} />
      </Flex>
   );

   const STATIC_LIST: Array<string> = [
      "Cardápio Diversificado",
      "Melhores ingredientes",
      "Atendimento de Qualidade",
      "Ingredientes Selecionados",
      "Melhores Preços",
   ];

   return (
      <VStack
         direction={"column"}
         flexGrow={1}
         spacing={5}
         alignItems={"start"}
      >
         {STATIC_LIST.map((item, index) => (
            <StaticList key={index}>{item}</StaticList>
         ))}
      </VStack>
   );
}

export default memo(HeroHistoryStaticList);
