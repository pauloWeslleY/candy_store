import { memo, ReactElement } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface HasButtonProps extends ButtonProps {
   name: string;
   icon?: ReactElement;
}

function HasButton(BtnProps: HasButtonProps) {
   const { name, icon, ...props } = BtnProps;

   return (
      <>
         <Button
            {...props}
            rightIcon={icon}
            fontSize={"xl"}
            border={2}
            borderStyle={"solid"}
            borderColor={"brown.600"}
            color={"brown.600"}
            bg={"brown.300"}
            transition={"all 0.5s ease-out"}
            _hover={{
               bgGradient: "linear(to-l, green.100, green.300)",
               transform: "rotate(2deg)",
            }}
            _focus={{
               bg: "red.300",
            }}
         >
            {name}
         </Button>
      </>
   );
}

export default memo(HasButton);
