import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import {
   Navigation,
   Pagination,
   A11y,
   Autoplay,
   FreeMode,
   EffectFade,
   EffectCards,
   EffectCreative,
   Parallax,
} from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/free-mode";
import "swiper/scss/effect-fade";
import "swiper/scss/effect-cards";
import "swiper/css/effect-creative";

interface SliderProps {
   settings: SwiperProps;
   children: ReactNode;
   css?: any;
}

export function SliderCarousel({ settings, children, css }: SliderProps) {
   return (
      <Swiper
         style={css}
         modules={[
            Navigation,
            Pagination,
            A11y,
            Autoplay,
            FreeMode,
            EffectFade,
            EffectCards,
            EffectCreative,
            Parallax,
         ]}
         {...settings}
      >
         {children}
      </Swiper>
   );
}
