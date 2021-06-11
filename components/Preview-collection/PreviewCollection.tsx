import styles from "./PreviewCollection.module.scss";
import Toy from "../../models/toy";
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection: React.FC<{ items: Toy[]; section: string }> = ({
  items,
  section,
}) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles.title}>{section.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
