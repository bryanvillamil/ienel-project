import Head from "next/head";

interface SEOProps {
  title?: string;
}

export const SEO = ({ title }: SEOProps) => {
  const defaultTitle = "IENEL SAS";
  const pageTitle = title ?? "";
  return (
    <Head>
      <title>
        {pageTitle !== "" ? `${pageTitle} | ${defaultTitle}` : defaultTitle}
      </title>
    </Head>
  );
};
