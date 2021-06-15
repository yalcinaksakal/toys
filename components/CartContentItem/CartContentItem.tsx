import styles from "./CartContentItem.module.scss";
import CartItem from "../../models/cartItem";
import AddRemoveCartItem from "../AddRemoveCartItem/AddRemoveCartItem";
const CartContentItem: React.FC<{ item: CartItem }> = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img src={`/imgs/${item.img}`} alt="item" />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{item.name}</span>
        <AddRemoveCartItem item={item} isRow />
        <span className={styles.total}>{`Total: €${item.totalPrice}`}</span>
      </div>
    </div>
  );
};

export default CartContentItem;
