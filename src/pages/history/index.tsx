import PageHead from "../Head";
import HistoryPage from "./History";

import { NavBar } from "../../components/NavBar";

export default function History() {
   return (
      <>
         <PageHead title="Nossa Historia" description="Pagina Principal" />
         <nav>
            <NavBar />
         </nav>

         <HistoryPage />
      </>
   );
}
