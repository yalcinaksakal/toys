import styles from "./CollectionItem.module.scss";
import Toy from "../../models/toy";

const CollectionItem: React.FC<{ item: Toy }> = ({ item }) => {
  return (
    <div className={styles["collection-item"]}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(/imgs/${item.img})` }}
      />
      <div className={styles["collection-footer"]}>
        <span>{item.name}</span>
        <span>{`€${item.price.toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
