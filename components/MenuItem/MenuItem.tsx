import styles from "./MenuItem.module.scss";
import Section from "../../models/section";
import { useRouter } from "next/dist/client/router";

const MenuItem: React.FC<{ section: Section }> = ({ section }) => {
  const router = useRouter();

  return (
    <div className={styles["menu-item"]}>
      <div
        style={{ backgroundImage: `url(${section.imgUrl})` }}
        className={styles["background-image"]}
      ></div>
      <div
        className={styles.content}
        onClick={() =>
          router.push(`/${section.title.toLowerCase().replace(/ /g, "")}`)
        }
      >
        <h1 className={styles.title}>{section.title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
