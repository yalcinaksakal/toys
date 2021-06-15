import styles from "./CartIcon.module.scss";

import { cart } from "../../assets/svgs";
import { useEffect, useState } from "react";
const CartIcon: React.FC<{ numberOfItems: number }> = ({ numberOfItems }) => {
  const [bump, setBump] = useState(false);
  useEffect(() => {
    if (!numberOfItems) return;
    setBump(true);
    const bumpTimer = setTimeout(() => setBump(false), 300);
    return () => clearTimeout(bumpTimer);
  }, [numberOfItems]);

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
      <span className={`${styles["item-count"]} ${bump ? styles.bump : ""}`}>
        {numberOfItems}
      </span>
    </div>
  );
};

export default CartIcon;
