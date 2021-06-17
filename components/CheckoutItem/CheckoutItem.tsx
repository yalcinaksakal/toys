import styles from "./CheckoutItem.module.scss";
import CartItem from "../../models/cartItem";
import AddRemoveCartItem from "../AddRemoveCartItem/AddRemoveCartItem";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useRouter } from "next/dist/client/router";
const CheckoutItem: React.FC<{ item: CartItem }> = ({ item }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className={styles["checkout-item"]}>
      <div className={styles["image-container"]}>
        <img
          src={`/imgs/${item.img}`}
          alt="item"
          onClick={() => router.push(`/toys/${item.id}`)}
        />
      </div>
      <span className={styles.name}>{item.name}</span>

      <AddRemoveCartItem item={item} isRow={false} />
      <span className={styles.price}> €{item.totalPrice}</span>
      <div
        className={styles["remove-button"]}
        onClick={() => dispatch(cartActions.clear({ item }))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
