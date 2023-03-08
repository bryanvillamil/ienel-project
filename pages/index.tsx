import { SEO } from "@components/index";
import { DefaultLayout } from "@templates/index";
import VercelImage from "@/assets/img/vercel.svg";

export default function Home() {
  return (
    <>
      <SEO title="IENEL - Home" />
      <DefaultLayout>
        <h1>Hola mundo</h1>
        <VercelImage style={{ color: "white" }} viewBox="0 0 283 64" />
      </DefaultLayout>
    </>
  );
}
