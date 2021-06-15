import { useDispatch } from "react-redux";
import styles from "./AddRemoveCartItem.module.scss";
import { cartActions } from "../../store/cart-slice";
import CartItem from "../../models/cartItem";
const AddRemoveCartItem: React.FC<{ item: CartItem; isRow: boolean }> = ({
  item,
  isRow,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={`${isRow ? styles.price : styles.column}`}>
      <span
        className={styles.action}
        onClick={() => dispatch(cartActions.remove({ item }))}
      >
        -
      </span>
      <span
        className={styles.text}
      >{`${item.numberOfPieces} × €${item.price}`}</span>
      <span
        className={styles.action}
        onClick={() => dispatch(cartActions.add({ item, amount: 1 }))}
      >
        +
      </span>
    </div>
  );
};

export default AddRemoveCartItem;
