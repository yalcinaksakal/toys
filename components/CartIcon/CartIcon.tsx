import styles from "./CartIcon.module.scss";

import { cart } from "../../assets/svgs";
const CartIcon: React.FC<{ numberOfItems: number }> = ({ numberOfItems }) => {
  return (
    <div className={styles["cart-icon"]}>
      <svg
        style={{ transform: "translateY(4px)" }}
        width="25"
        height="25"
        viewBox="0 0 22 22"
      >
        <path d={cart} />
      </svg>
      <span className={styles["item-count"]}>{numberOfItems}</span>
    </div>
  );
};

export default CartIcon;
