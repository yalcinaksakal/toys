import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton: React.FC<{
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: React.MouseEvent) => void;
  isGoogleSignIn?: boolean;
  isCart?: boolean;
}> = ({ children, isGoogleSignIn = false, isCart = false, ...otherProps }) => (
  <button
    className={`${styles["custom-button"]} ${
      isGoogleSignIn ? styles.google : ""
    } ${isCart ? styles.cart : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
