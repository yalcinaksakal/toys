import { useSelector } from "react-redux";
import CustomButton from "../CustomButtton/CustomButton";
import styles from "./Cart.module.scss";
import { RootState } from "../../store";
const Cart: React.FC = () => {
  const { numberOfItems } = useSelector((state: RootState) => state.cart);
  return (
    <div className={styles.cart}>
      <div className={styles["cart-items"]} />
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

export default Cart;
