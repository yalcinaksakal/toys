import { useSelector } from "react-redux";
import CustomButton from "../CustomButtton/CustomButton";
import styles from "./Cart.module.scss";
import { RootState } from "../../store";
const Cart: React.FC = () => {
  const { numberOfItems, items, total } = useSelector(
    (state: RootState) => state.cart
  );
  // console.log(numberOfItems, total, items);
  return (
    <div className={styles.cart}>
      <div className={styles["cart-items"]} />
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

export default Cart;
