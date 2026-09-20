import { memo } from "react";
import { Divider } from "@chakra-ui/react";

const DividerLine = () => (
   <Divider
      borderColor={"red.300"}
      borderWidth={"1px"}
      w={"99.4vw"}
      mx={"auto"}
   />
);

export default memo(DividerLine);
