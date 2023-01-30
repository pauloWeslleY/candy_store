import PageHead from "../Head";
import { NavBar } from "../../components/NavBar";
import PageCakes from "./Cakes";

export default function Cakes() {
   return (
      <>
         <PageHead title="Bolos" description="Pagina Bolos" />
         <nav>
            <NavBar />
         </nav>

         <PageCakes />
      </>
   );
}
