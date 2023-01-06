import { memo } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonOrderProps extends ButtonProps {
   name: string;
}

function ButtonOrder(BtnProps: ButtonOrderProps) {
   const { name, ...props } = BtnProps;

   return (
      <Button
         {...props}
         bg={"brown.200"}
         color={"brown.600"}
         border={"solid 2px"}
         borderColor={"brown.600"}
         fontSize={"md"}
         transition={"all 1s ease"}
         _hover={{
            color: "brown.600",
            bg: "green.300",
            border: "2px solid var(--green-300)",
            transform: "rotate(5deg)",
         }}
      >
         {name}
      </Button>
   );
}

export default memo(ButtonOrder);
