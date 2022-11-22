import { NextSeo } from "next-seo";
import { Seo } from "../components/seo";
import styles from "../styles/Home.module.css";

export default function Product() {
  return (
    <>
      <Seo
        title="Caloi Velox 29"
        description="A caloi velox é a sua porta de entrada para o mundo moutain bike. uma bike moderna com um visual arrojado para quem está em busca de aventuras sobre duas rodas"
        canonical="www.dantasbikes.com.br/caloi-velox-29"
      />

      <div className={styles.panel}>
        <div className={styles.column}>
          <div className={styles.gallery}>
            <img
              src="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/139/087/products/sem-nome-1580450px-10241024px-10241024px-11-88ce7f24ce013b280416639560914528-480-0.png"
              alt=""
            />
          </div>

          {/* <Image
              src="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/139/087/products/sem-nome-1580450px-10241024px-10241024px-11-88ce7f24ce013b280416639560914528-480-0.png"
              alt="Imagem do produto"
              width={100}
              height={20}
            /> */}
          <div>
            <h2>Descrição</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et dolor bibendum diam ullamcorper bibendum vitae a ex. Ut in
              ipsum lacus. Nullam dictum nisi sem, sed sagittis arcu ultricies
              ut. Mauris sodales nisl velit. Mauris quis velit at urna bibendum
              viverra. Pellentesque sodales laoreet nunc, et blandit libero
              lobortis eget. Pellentesque pellentesque sed mauris dictum
              porttitor.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.condition}>Novo</div>

          <div className={styles.row}>
            <h1 className={styles.title}>Bicicleta Caloi Velox 29 </h1>
          </div>

          <div className={styles.dispatchTag}>Enviando normalmente</div>

          <div className={styles.priceCard}>
            <div className={styles.priceRow}>
              <span className={styles.symbol}>R$</span>
              <span className={styles.fraction}>1.135</span>
              <span className={styles.cents}>23</span>
            </div>

            <div className={styles.installmentsInfo}>em 12x de R$ 94,60</div>
          </div>
        </div>
      </div>
    </>
  );
}
