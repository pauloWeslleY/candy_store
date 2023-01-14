import { memo } from "react";
import { Divider } from "@chakra-ui/react";

const DividerLine = () => (
   <>
      <Divider
         borderColor={"red.300"}
         borderWidth={"2px"}
         maxW={{ base: "15rem", lg: "35rem" }}
         mx={"auto"}
      />
   </>
);

export default memo(DividerLine);
