import PageHead from "../Head";
import { NavBar } from "../../components/NavBar";

import PagePies from "../../templates/Pies/Pies";

export default function Pies() {
   return (
      <>
         <PageHead title="Tortas" description="Pagina das Tortas" />

         <nav>
            <NavBar />
         </nav>

         <PagePies />
      </>
   );
}
