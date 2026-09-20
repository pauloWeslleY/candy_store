import { memo, useState, useEffect } from "react";
import { ChevronUpIcon } from "@chakra-ui/icons";

import styles from "./styles.module.scss";

function BackToTopButton() {
   const [backToTopButton, setbackToTopButton] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            setbackToTopButton(true);
         } else {
            setbackToTopButton(false);
         }
      });
   }, []);

   const scrollUp = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <>
         {backToTopButton && (
            <button className={styles.backToTopButton} onClick={scrollUp}>
               <ChevronUpIcon />
            </button>
         )}
      </>
   );
}

export default memo(BackToTopButton);
