import Head from "next/head";

import styles from "./Home.module.scss";

const categories: string[] = [
  "Action figures",
  "Animals",
  "Cars and RC",
  "Construction toys",
  "Creative toys",
  "Dolls",
  "Educational toys",
  "Electronic toys",
  "Games",
  "Model building",
  "Wooden toys",
];

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Toys Home Page" />
      </Head>
      <div className={styles.homepage}>
        <div className={styles["directory-menu"]}>
          {["Girls","Boys"].map(category => (
            <div className={styles["menu-item"]}>
              <div className={styles.content}>
                <h1 className={styles.title}>{category}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.homepage}>
        <div className={styles["directory-menu"]}>
          {categories.map(category => (
            <div className={styles["menu-item"]}>
              <div className={styles.content}>
                <h1 className={styles.title}>{category}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
