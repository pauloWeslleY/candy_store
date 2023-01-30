import Home from "./Home";

import PageHead from "./Head";

import { NavBar } from "../components/NavBar";

import styles from "../scss/app.module.scss";
import { BannerHome } from "./Home/components/BannerHome";

export default function MyHome() {
   return (
      <>
         <PageHead title="Home" description="Pagina Principal" />

         <div className={styles.hero__banner}>
            <nav>
               <NavBar />
            </nav>

            <header>
               <BannerHome
                  title="All your"
                  label="in one single place."
                  subLabel="customer feedback"
                  subtitle={`
                  Hellonext is a feature voting software where you can allow
                  your users to vote on features, publish roadmap, and complete
                  your customer feedback loop.
               `}
                  id={"HomeCards"}
               />
            </header>
         </div>
         <Home />
      </>
   );
}
