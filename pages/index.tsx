import Head from "next/head";
import Directory from "../components/Directory/Directory";

import styles from "./Home.module.scss";

const HomePage: React.FC = () => (
  <>
    <Head>
      <meta name="description" content="Toys Home Page" />
    </Head>

    <div className={styles.homepage}>
      <Directory />
    </div>
  </>
);

export default HomePage;
