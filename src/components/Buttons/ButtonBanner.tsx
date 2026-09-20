import { memo, ReactElement } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonBannerProps extends ButtonProps {
   name: string;
   icon?: ReactElement;
}

function ButtonBanner(buttonProps: ButtonBannerProps) {
   const { name, icon, ...props } = buttonProps;

   return (
      <Button
         {...props}
         rightIcon={icon}
         variant={"outline"}
         bg={"whiteAlpha.500"}
         border={"2px solid"}
         borderColor={"brown.600"}
         rounded={"2xl"}
         color={"brown.600"}
         transition={"all 0.5s ease"}
         _hover={{ bg: "green.300" }}
      >
         {name}
      </Button>
   );
}

export default memo(ButtonBanner);
