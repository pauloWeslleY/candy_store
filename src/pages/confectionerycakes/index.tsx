import PageHead from "../Head";
import ConfectioneryCakesPage from "../../templates/ConfectioneryCakes/ConfectioneryCakes";

import { NavBar } from "../../components/NavBar";

export default function ConfectioneryCakes() {
   return (
      <>
         <PageHead
            title="Bolos Confeitados"
            description="Pagina dos Bolos Confeitados"
         />
         <nav>
            <NavBar />
         </nav>

         <ConfectioneryCakesPage />
      </>
   );
}
