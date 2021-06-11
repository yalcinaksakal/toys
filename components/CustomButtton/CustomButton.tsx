import styles from "./CustomButton.module.scss";

const CustomButton: React.FC<{
  type: "button" | "submit" | "reset" | undefined;
}> = ({ children, ...otherProps }) => (
  <button className={styles["custom-button"]} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
