import PageHead from "../Head";
import TraditionalCakesPages from "./TraditionalCakes";

import { NavBar } from "../../components/NavBar";

export default function TraditionalCakes() {
   return (
      <>
         <PageHead title="Bolos Tradicionais" description="Pagina Principal" />
         <nav>
            <NavBar />
         </nav>

         <TraditionalCakesPages />
      </>
   );
}
