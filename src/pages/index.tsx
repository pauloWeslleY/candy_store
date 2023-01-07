import Home from "./Home";

import PageHead from "./Head";

import { NavBar } from "../components/NavBar";

import styles from "../scss/app.module.scss";

export default function MyHome() {
   return (
      <div className={styles.hero__banner}>
         <PageHead title="Home" description="Pagina Principal" />
         <nav>
            <NavBar />
         </nav>

         <Home />
      </div>
   );
}
