import styles from "./CustomButton.module.scss";

const CustomButton: React.FC<{
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => {};
  isGoogleSignIn?: boolean;
}> = ({ children, isGoogleSignIn = false, ...otherProps }) => (
  <button
    className={`${styles["custom-button"]} ${
      isGoogleSignIn ? styles.google : ""
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
