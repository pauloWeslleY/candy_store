import { memo } from "react";
import {
   Box,
   Container,
   Link,
   SimpleGrid,
   Stack,
   Text,
   Divider,
   Image,
   Heading,
   chakra,
   Flex,
} from "@chakra-ui/react";
import { SocialButtonIcons, FooterContact } from "./index";
import FooterBar from "./FooterBar";

const ListHeader = ({ title }: { title: string }) => (
   <Text as={"h3"} fontWeight={"500"} fontSize={"lg"} mb={2}>
      {title}
   </Text>
);

function Footer() {
   const LIST_FOOTER: string[] = [
      "Help Center",
      "Terms of Service",
      "Legal",
      "Privacy Policy",
   ];

   const MENU_LIST: string[] = [
      "Home",
      "Nossa Confeitaria",
      "Tortas",
      "Contatos",
   ];

   return (
      <>
         <Divider borderColor={"brown.700"} />
         <Box as={"footer"} bg={"brown.100"}>
            <Container as={Stack} maxW={"6xl"} py={10}>
               <SimpleGrid
                  templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
                  spacing={8}
               >
                  <Stack spacing={6}>
                     <Flex gap={2} align={"center"}>
                        <Image
                           boxSize={"4rem"}
                           alt={"Logo RosesGourmet"}
                           src={"/images/logo.png"}
                        />
                        <Heading
                           as={"h1"}
                           color={"brown.600"}
                           fontWeight={"extrabold"}
                        >
                           {"Rose"}
                           <chakra.span color={"red.200"}>
                              {"Gourmet"}
                           </chakra.span>
                        </Heading>
                     </Flex>
                     <Text fontSize={"sm"}>
                        © 2022 Rose Gourmet. All rights reserved
                     </Text>
                     <Stack direction={"row"} spacing={6}>
                        <SocialButtonIcons />
                     </Stack>
                  </Stack>
                  <Stack align={"flex-start"}>
                     <ListHeader title="Company" />
                     {MENU_LIST.map((props, index) => (
                        <Link key={index} href={"#"}>
                           {props}
                        </Link>
                     ))}
                  </Stack>
                  <Stack align={"flex-start"}>
                     <ListHeader title="Support" />
                     {LIST_FOOTER.map((props, index) => (
                        <Text key={index} as={"span"}>
                           {props}
                        </Text>
                     ))}
                  </Stack>
                  <Stack align={"flex-start"}>
                     <ListHeader title="Contatos" />
                     <FooterContact />
                  </Stack>
               </SimpleGrid>
            </Container>
            <FooterBar />
         </Box>
      </>
   );
}

export default memo(Footer);
