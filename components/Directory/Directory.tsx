import MenuItem from "../MenuItem/MenuItem";
import styles from "./Directory.module.scss";
import sections from "../../config/sections";

const Directory: React.FC = () => (
  <div className={styles["directory-menu"]}>
    {sections.map(section => (
      <MenuItem key={section.id} section={section} />
    ))}
  </div>
);

export default Directory;
