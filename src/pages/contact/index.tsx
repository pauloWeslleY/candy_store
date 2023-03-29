import PageHead from "../Head";
import { NavBar } from "../../components/NavBar";
import Contact from "../../templates/Contact/Contact";

export default function ContactMe() {
   return (
      <>
         <PageHead title="Contatos" description="Pagina de Contatos" />
         <nav>
            <NavBar />
         </nav>

         <Contact />
      </>
   );
}
