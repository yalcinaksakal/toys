import Head from "next/head";

import styles from "./Shop.module.scss";

import sections from "../../config/sections";
import PreviewCollection from "../../components/Preview-collection/PreviewCollection";
import toys from "../../config/toys";
const ShopPage: React.FC = () => (
  <section>
    <Head>
      <meta name="description" content="Toys Shop Page" />
    </Head>

    <div className={styles["shop-page"]}>
      {sections.map(
        section =>
          section.id > 2 && (
            <PreviewCollection
              key={section.id}
              items={toys
                .filter(toy => toy.sectionId === section.id)
                .filter((_, i) => i < 4)}
              section={section.title}
              isMore
            />
          )
      )}
    </div>
  </section>
);

export default ShopPage;
