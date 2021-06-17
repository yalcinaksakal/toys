import styles from "./CollectionItem.module.scss";
import Toy from "../../models/toy";
import CustomButton from "../CustomButtton/CustomButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { cartActions } from "../../store/cart-slice";
import { useRouter } from "next/dist/client/router";
const CollectionItem: React.FC<{ item: Toy }> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleAddCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(cartActions.add({ item, amount: 1 }));
  };
  const router = useRouter();
  return (
    <div
      className={styles["collection-item"]}
      onClick={() => router.push(`/toys/${item.id}`)}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(/imgs/${item.img})` }}
      />
      <div className={styles["collection-footer"]}>
        <span>{item.name}</span>
        <span>{`€${item.price.toFixed(2)}`}</span>
      </div>

      <CustomButton type="button" onClick={handleAddCart} isCart>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
