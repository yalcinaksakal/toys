import styles from "./CartIcon.module.scss";

import { cart } from "../../assets/svgs";
const CartIcon: React.FC = () => {
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
      <span className={styles["item-count"]}>10</span>
    </div>
  );
};

export default CartIcon;
