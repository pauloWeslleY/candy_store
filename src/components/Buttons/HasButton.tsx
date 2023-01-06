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
            borderColor={" .600"}
            rounded={"xl"}
            color={" .600"}
            bgGradient={"linear(to-l, green.100, green.300)"}
            transition={"all 0.3s ease"}
            _hover={{
               bg: "brown.300",
               transform: "translateY(-2px)",
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
