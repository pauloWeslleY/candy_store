import { Container } from "@chakra-ui/react";
import { CardsDetachPies } from "./components/CardsDetachPies";
import { PiesProducts } from "./components/PiesProducts";

export default function PagePies() {
   return (
      <main>
         <Container maxW={"6xl"}>
            <CardsDetachPies />

            <PiesProducts />
         </Container>
      </main>
   );
}
