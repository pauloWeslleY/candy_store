import PageHead from "../Head";
import TraditionalCakesPages from "../../templates/TraditionalCakes/TraditionalCakes";

import { NavBar } from "../../components/NavBar";

export default function TraditionalCakes() {
   return (
      <>
         <PageHead
            title="Bolos Tradicionais"
            description="Pagina dos Bolos Tradicionais"
         />
         <nav>
            <NavBar />
         </nav>

         <TraditionalCakesPages />
      </>
   );
}
