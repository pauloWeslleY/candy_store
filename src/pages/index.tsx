import { NavBar } from "../components/NavBar";
import { HeroHeader } from "../components/HeroHeader";

import Home from "./Home";

export default function MyHome() {
   return (
      <>
         <header>
            <HeroHeader title="Rose" label="Gourmet" />
            <nav>
               <NavBar />
            </nav>
         </header>

         <Home />
      </>
   );
}
