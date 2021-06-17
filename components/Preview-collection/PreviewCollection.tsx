import styles from "./PreviewCollection.module.scss";
import Toy from "../../models/toy";
import CollectionItem from "../CollectionItem/CollectionItem";
import { useRouter } from "next/dist/client/router";

const PreviewCollection: React.FC<{
  items: Toy[];
  section: string;
  isMore: boolean;
}> = ({ items, section, isMore }) => {
  const router = useRouter();
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles.title}>
        {section.toUpperCase()}
        {isMore && (
          <span
            className={styles.more}
            onClick={() =>
              router.push(`/${section.toLowerCase().replace(/ /g, "")}`)
            }
          >
            More
          </span>
        )}
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
