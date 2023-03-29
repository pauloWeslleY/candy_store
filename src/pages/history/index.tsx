import PageHead from "../Head";
import HistoryPage from "../../templates/History/History";

import { NavBar } from "../../components/NavBar";

export default function History() {
   return (
      <>
         <PageHead title="Nossa História" description="Pagina Nossa História" />
         <nav>
            <NavBar />
         </nav>

         <HistoryPage />
      </>
   );
}
