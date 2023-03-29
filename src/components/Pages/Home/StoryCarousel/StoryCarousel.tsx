import { memo } from "react";
import { Center } from "@chakra-ui/react";
import {
   SliderCarousel,
   Slide,
   SliderProps,
} from "../../../../components/Slider";
import { CarouselProps, StoryCarouselItem } from "./index";

interface StoryCarouselCreativeProps {
   slide: CarouselProps[];
}

function StoryCarouselCreative({ slide }: StoryCarouselCreativeProps) {
   const settings: SliderProps = {
      grabCursor: true,
      loop: true,
      effect: "fade",
      autoplay: {
         delay: 1000,
      },
      pagination: {
         dynamicBullets: true,
      },
   };

   if (slide.length === 1) {
      return (
         <Center>
            <StoryCarouselItem carouselItem={slide[0]} />
         </Center>
      );
   }

   return (
      <SliderCarousel settings={settings}>
         {slide.map((props) => (
            <Slide key={props.id}>
               <StoryCarouselItem carouselItem={props} />
            </Slide>
         ))}
      </SliderCarousel>
   );
}

export default memo(StoryCarouselCreative);
