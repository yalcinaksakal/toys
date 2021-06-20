import Head from "next/head";

import styles from "./Shop.module.scss";

import PreviewCollection from "../../components/Preview-collection/PreviewCollection";

import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Section from "../../models/section";

const ShopPage: React.FC = () => {
  const { directory: sections, toys } = useSelector(
    (state: RootState) => state
  );
  return (
    <section>
      <Head>
        <meta name="description" content="Toys Shop Page" />
      </Head>

      <div className={styles["shop-page"]}>
        {sections.map(
          (section:Section) =>
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
};

export default ShopPage;
