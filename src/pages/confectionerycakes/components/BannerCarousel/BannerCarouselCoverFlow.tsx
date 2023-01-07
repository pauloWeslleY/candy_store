import { Center } from "@chakra-ui/react";
import { memo } from "react";
import {
   SliderCarousel,
   Slide,
   SliderProps,
} from "../../../../components/Slider";
import { BannerCarouselCoverFlowItem, CarouselProps } from "./index";

interface BannerCarouselCoverFlowProps {
   carousel: CarouselProps[];
}

function BannerCarouselCoverFlow({ carousel }: BannerCarouselCoverFlowProps) {
   const settings: SliderProps = {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 2,
      autoplay: {
         delay: 5000,
      },
      pagination: {
         dynamicBullets: true,
      },
      keyboard: {
         enabled: true,
      },
      effect: "coverflow",
      coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: false,
      },
   };

   if (carousel.length === 1) {
      return (
         <Center>
            <BannerCarouselCoverFlowItem carouselInner={carousel[0]} />
         </Center>
      );
   }

   return (
      <SliderCarousel settings={settings}>
         {carousel.map((props, index) => (
            <Slide key={index}>
               <BannerCarouselCoverFlowItem carouselInner={props} />
            </Slide>
         ))}
      </SliderCarousel>
   );
}

export default memo(BannerCarouselCoverFlow);
