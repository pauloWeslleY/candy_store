import { HomeCards } from "../../components/Pages/Home/HomeCards";
import { OurStory } from "../../components/Pages/Home/OurStory";

import { DividerLine } from "../../components/DividerLine";

import { HeroHome } from "./components/HeroHome";
import { AboutUs } from "./components/AboutUs";

type contentProps = {
   contentOne: {
      title: string;
      subtitle: string;
      image: string;
   };
   contentTwo: {
      title: string;
      subtitle: string;
      image: string;
   };
};

export default function Home() {
   const content: contentProps = {
      contentOne: {
         title: "Lorem ipsum dolor sit amet consectetur",
         subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officiis aspernatur`,
         image: "/images/bn2.jpg",
      },
      contentTwo: {
         title: "Lorem ipsum dolor sit amet consectetur",
         subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officiis aspernatur`,
         image: "/images/bn3.jpg",
      },
   };

   return (
      <main>
         <DividerLine />

         <section>
            <HomeCards
               title="Produtos"
               subtitle="Candys&Cakes"
               id={"HomeCards"}
            />
            <OurStory
               title="History"
               subtitle="Our Story"
               description={`
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem perspiciatis assumenda saepe adipisci ipsam
                  quod ducimus? Excepturi quasi ipsa veritatis esse cumque
                  natus atque similique tempore unde. Aliquid, veniam
                  maiores?
               `}
            />

            <HeroHome
               contentOne={content.contentOne}
               contentTwo={content.contentTwo}
            />

            <AboutUs
               title="Conheça Quem Faz"
               description={`
                  Ut dolor no vero rebum dolores no et stet invidunt. At
                  est erat et ipsum lorem sanctus, consetetur no ipsum
                  eirmod vero accusam dolore, sanctus ut sed sit voluptua
                  erat ea labore ut. Ea diam est dolore sed aliquyam, ut
                  justo eos justo at aliquyam.
               `}
               image={"/images/logo1.jpg"}
            />
         </section>
      </main>
   );
}
