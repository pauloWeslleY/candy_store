import Head from "next/head";

type PageHeadProps = {
   title: string;
   description: string;
};

export default function PageHead({ title, description }: PageHeadProps) {
   return (
      <>
         <Head>
            <title>RoseGourmet | {title}</title>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta name="description" content={description} />
         </Head>
      </>
   );
}
