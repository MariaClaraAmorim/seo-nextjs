import { Seo } from "../components/seo";
import styles from "../styles/Home.module.css";

interface HeadProps {
  title: string;
  description: string;
}

export default function Home(props: HeadProps) {
  const { title, description } = props;

  return (
    <div className={styles.container}>
      {/* <NextSeo
        title="Loja dantas bike"
        description="Compre produtos de Dantas Bikes por internet. Temos ofertas, bicicletas e mais. Faça seu pedido, pague-o online e receba onde quiser."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://seo-nextjs-sage.vercel.app/",
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
          site_name: "Teste SEO",
        }}
        twitter={{
          handle: "@seo",
          site: "@seo",
          cardType: "summary_large_image",
        }}
      />
       */}

      <Seo />

      <h1>Dantas Bike</h1>
    </div>
  );
}
