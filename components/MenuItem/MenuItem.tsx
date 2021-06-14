import styles from "./MenuItem.module.scss";
import Section from "../../models/section";

const MenuItem: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <div className={styles["menu-item"]}>
      <div
        style={{ backgroundImage: `url(${section.imgUrl})` }}
        className={styles["background-image"]}
      ></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{section.title.toUpperCase()}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
