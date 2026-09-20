import { Center } from "@chakra-ui/react";
import { memo } from "react";
import {
   SliderCarousel,
   Slide,
   SliderProps,
} from "../../../../components/Slider";
import { BannerCarouselCreativeItem, CarouselProps } from "./index";

interface BannerCarouselCoverFlowProps {
   carousel: CarouselProps[];
}

function BannerCarouselCreative({ carousel }: BannerCarouselCoverFlowProps) {
   const settings: SliderProps = {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
         delay: 5000,
      },
      pagination: {
         dynamicBullets: true,
      },
      keyboard: {
         enabled: true,
      },
      effect: "creative",
      creativeEffect: {
         prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
         },
         next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
         },
      },
   };

   if (carousel.length === 1) {
      return (
         <Center>
            <BannerCarouselCreativeItem carouselInner={carousel[0]} />
         </Center>
      );
   }

   return (
      <SliderCarousel settings={settings}>
         {carousel.map((props, index) => (
            <Slide key={index}>
               <BannerCarouselCreativeItem carouselInner={props} />
            </Slide>
         ))}
      </SliderCarousel>
   );
}

export default memo(BannerCarouselCreative);
