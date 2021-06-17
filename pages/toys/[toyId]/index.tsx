import styles from "./ToyPage.module.scss";

import CustomButton from "../../../components/CustomButtton/CustomButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useRouter } from "next/dist/client/router";
import toys from "../../../config/toys";

const ToyPage: React.FC = () => {
  const dispatch = useDispatch();
  const handleAddCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(cartActions.add({ item, amount: 1 }));
  };
  const router = useRouter();
  const toyId = router.query.toyId;
  const index = toyId ? +toyId : null;
  const item = index ? toys[index] : null;
  return (
    <section>
      {item ? (
        <>
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
        </>
      ) : (
        <h1>404 Page not found</h1>
      )}
    </section>
  );
};

export default ToyPage;
