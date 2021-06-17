import styles from "./PreviewCollection.module.scss";
import Toy from "../../models/toy";
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection: React.FC<{
  id: number | string;
  items: Toy[];
  section: string;
  isMore: boolean;
}> = ({ items, section, isMore, id }) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles.title}>
        {section.toUpperCase()}
        {isMore && <span className={styles.more}>More</span>}
      </h1>

      <div className={styles.preview}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
