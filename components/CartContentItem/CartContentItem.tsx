import styles from "./CartContentItem.module.scss";
import CartItem from "../../models/cartItem";

const CartContentItem: React.FC<{ item: CartItem }> = ({ item }) => {
  // console.log("item");
  return (
    <div className={styles.cartItem}>
      <img src={`/imgs/${item.img}`} alt="item" />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{item.name}</span>
        <span
          className={styles.price}
        >{`${item.numberOfPieces} × €${item.price}`}</span>

        <span className={styles.total}>{`Total: €${item.totalPrice}`}</span>
      </div>
    </div>
  );
};

export default CartContentItem;
