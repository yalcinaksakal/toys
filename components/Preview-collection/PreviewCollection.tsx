import styles from "./PreviewCollection.module.scss";
import Toy from "../../models/toy";

const PreviewCollection: React.FC<{ items: Toy[]; section: string }> = ({
  items,
  section,
}) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles.title}>{section.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
