import { HeroHistoryStatic } from "./components/HeroHistoryStatic";
import { HeroInfoHistory } from "./components/HeroInfoHistory";

export default function HistoryPage() {
   return (
      <main>
         <section>
            <HeroInfoHistory />
            <HeroHistoryStatic
               title="O que temos a oferecer"
               text={`
                  Let's put our heads together to build a successful
                  partnership to benefit both your customers and your
                  business.
               `}
            />
         </section>
      </main>
   );
}
