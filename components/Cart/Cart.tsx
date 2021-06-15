import CustomButton from "../CustomButtton/CustomButton";
import styles from "./Cart.module.scss";

const Cart: React.FC = () => {
  return (
    <div className={styles.cart}>
      <div className={styles["cart-items"]} />
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

export default Cart;
