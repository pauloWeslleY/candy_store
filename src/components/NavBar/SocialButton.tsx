import { memo } from "react";
import { chakra, Flex, VisuallyHidden } from "@chakra-ui/react";
import { SocialButtonProps, SOCIAL_ICON } from "./index";

const IconSocial = ({ children, href, label }: SocialButtonProps) => (
   <chakra.button
      as={"a"}
      bg={"whiteAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
         bg: "blackAlpha.200",
      }}
   >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
   </chakra.button>
);

function SocialButton() {
   return (
      <>
         <Flex gap={2}>
            {SOCIAL_ICON.map((props, index) => (
               <IconSocial key={index} href={props.href} label={props.label}>
                  {props.icon}
               </IconSocial>
            ))}
         </Flex>
      </>
   );
}

export default memo(SocialButton);
