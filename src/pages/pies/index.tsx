import PageHead from "../Head";
import { NavBar } from "../../components/NavBar";

import PagePies from "./Pies";

export default function Pies() {
   return (
      <>
         <PageHead title="Tortas" description="Pagina Principal" />

         <nav>
            <NavBar />
         </nav>

         <PagePies />
      </>
   );
}
