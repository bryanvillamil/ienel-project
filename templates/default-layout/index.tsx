import { Header, Footer } from "@components/index";

interface DefaultLayoutProps {
  children?: JSX.Element[] | JSX.Element | string;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
