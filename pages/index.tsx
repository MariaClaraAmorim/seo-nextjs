import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface HeadProps {
  title: string;
  description: string;
}

export default function Home(props: HeadProps) {
  const { title, description } = props;

  return (
    <div className={styles.container}>
      <NextSeo
        title={title}
        description={description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://seo-final.vercel.app/logo.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "Loja Dantas Bike",
        }}
        twitter={{
          handle: "@dantasBike",
          site: "@dantasBike",
          cardType: "summary_large_image",
        }}
      />

      <NextSeo
        title="Loja online Dantas Bike"
        description="Compre produtos de Dantas Bikes por internet. Temos ofertas, bicicletas e mais. Faça seu pedido, pague-o online e receba onde quiser."
      />
    

      {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </div>
  );
}
