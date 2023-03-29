import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import styles from "./styles.module.scss";

const ArrowIconButton = () => (
   <>
      <IconButton
         className={styles.has__arrow_button}
         aria-label={"Page Down"}
         icon={<ArrowDownIcon />}
         bg={"brown.600"}
         color={"green.100"}
         borderRadius={"2rem"}
         transition={"all 0.4s ease"}
         _hover={{
            bg: "brown.300",
            color: "green.300",
         }}
      />
   </>
);

export default memo(ArrowIconButton);
