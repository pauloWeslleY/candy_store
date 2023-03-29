import { Box, Container, Heading, Stack, Text, Icon } from "@chakra-ui/react";
import { BannerCakes } from "./components/BannerCakes";
import { CakeSlide } from "./components/CakesSlide";
import { GiCakeSlice } from "react-icons/gi";

import { HOME_CARDS } from "../../components/Pages/Home/HomeCards";

export default function PageCakes() {
   return (
      <main>
         <Container maxW={"6xl"}>
            <BannerCakes />

            <Stack as={"section"} align={"center"} justify={"center"}>
               <Box maxW={"2xl"} textAlign={"center"}>
                  <Heading as={"h2"} size={"2xl"}>
                     Nossos Produtos
                  </Heading>
                  <Text as={"span"}>
                     A Rose Gourmet Confeitaria traz uma linha de produtos
                     deliciosos, produzidos artesanalmente com ingredientes de
                     alta qualidade, trazendo um sabor incomparável e garantindo
                     uma experiência gastronômica única.
                  </Text>
               </Box>
            </Stack>

            <section>{HOME_CARDS && <CakeSlide cards={HOME_CARDS} />}</section>

            <Stack align={"center"} mt={6}>
               <Icon as={GiCakeSlice} w={12} h={12} />
               <Text as={"h3"} fontSize={"3xl"}>
                  Destaques
               </Text>
            </Stack>

            <section>{HOME_CARDS && <CakeSlide cards={HOME_CARDS} />}</section>
         </Container>
      </main>
   );
}
