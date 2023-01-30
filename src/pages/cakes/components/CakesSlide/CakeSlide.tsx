import { memo } from "react";
import { Center } from "@chakra-ui/react";
import {
   SliderCarousel,
   Slide,
   SliderProps,
} from "../../../../components/Slider";
import { ImageCard, HomeCardsProps } from "./index";

interface ICardsSliderProps {
   cards: HomeCardsProps[];
}

function CakeSlide({ cards }: ICardsSliderProps) {
   const settings: SliderProps = {
      spaceBetween: 10,
      slidesPerView: cards.length <= 4 ? cards.length : 3,
      freeMode: true,
      centeredSlides: true,
      grabCursor: true,
      draggable: cards.length >= 3,
      loop: cards.length >= 3,
      pagination: cards.length >= 3 && {
         dynamicBullets: true,
      },
      breakpoints: {
         300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
         },
         500: {
            slidesPerView: cards.length < 2 ? cards.length : 2,
            slidesPerGroup: cards.length < 2 ? cards.length : 2,
         },
         1200: {
            slidesPerView: cards.length < 3 ? cards.length : 3,
            slidesPerGroup: cards.length < 3 ? cards.length : 3,
         },
      },
   };

   if (cards.length === 1) {
      return (
         <Center>
            <ImageCard />
         </Center>
      );
   }

   return (
      <SliderCarousel settings={settings} css={{ padding: "3.2rem" }}>
         {cards.map((_, index) => (
            <Slide key={index}>
               <ImageCard />
            </Slide>
         ))}
      </SliderCarousel>
   );
}

export default memo(CakeSlide);
