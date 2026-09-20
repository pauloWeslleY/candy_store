import PageHead from "../Head";
import { NavBar } from "../../components/NavBar";
import { Heading } from "@chakra-ui/react";

export default function Blog() {
   return (
      <>
         <PageHead title="Blog" description="Pagina Principal" />

         <nav>
            <NavBar />
         </nav>

         <Heading>Blog</Heading>
      </>
   );
}
