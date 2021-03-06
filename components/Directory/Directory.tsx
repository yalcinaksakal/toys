import MenuItem from "../MenuItem/MenuItem";
import styles from "./Directory.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Section from "../../models/section";
const Directory: React.FC = () => {
  const sections = useSelector((state: RootState) => state.directory);

  return (
    <div className={styles["directory-menu"]}>
      {sections.map((section:Section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Directory;
