import Home from "./Home";

import { NavBar } from "../components/NavBar";
import { HeroHeader } from "../components/HeroHeader";

import styles from "../scss/app.module.scss";
import Footer from "../components/Footer/Footer";

export default function MyHome() {
   return (
      <main className={styles.hero__banner}>
         <header>
            <HeroHeader title="Rose" label="Gourmet" />
            <NavBar />
         </header>

         <Home />

         <Footer />
      </main>
   );
}
