import { memo } from "react";
import {
   SliderCarousel,
   Slide,
   SliderProps,
} from "../../../../components/Slider";
import { ParallaxSliderItem, SectionProps } from "./index";

import styles from "./styles.module.scss";

interface ParallaxSliderProps {
   parallax: SectionProps[];
}

function ParallaxSlider({ parallax }: ParallaxSliderProps) {
   const settings: SliderProps = {
      navigation: true,
      parallax: true,
      speed: 300,
      pagination: {
         dynamicBullets: true,
      },
      autoplay: {
         delay: 2000,
      },
      keyboard: {
         enabled: true,
      },
   };

   return (
      <SliderCarousel settings={settings} css={{ height: "55vh" }}>
         <div
            slot="container-start"
            className={styles.parallax__bg}
            style={{
               backgroundImage: "url(/images/bn3.jpg)",
            }}
            data-swiper-parallax="-23%"
         ></div>
         {parallax.map((props, index) => (
            <Slide key={index}>
               <ParallaxSliderItem item={props} />
            </Slide>
         ))}
      </SliderCarousel>
   );
}

export default memo(ParallaxSlider);
