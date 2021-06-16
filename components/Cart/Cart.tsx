import { useSelector } from "react-redux";
import CustomButton from "../CustomButtton/CustomButton";
import styles from "./Cart.module.scss";
import { RootState } from "../../store";
import CartContentItem from "../CartContentItem/CartContentItem";
import React from "react";
import { useRouter } from "next/dist/client/router";
const Cart: React.FC<{
  handleCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ handleCheckout }) => {
  const { numberOfItems, items, total } = useSelector(
    (state: RootState) => state.cart
  );
  const router = useRouter();
  // console.log(numberOfItems, total, items);
  return (
    <div className={styles.cart}>
      <div className={styles["cart-items"]}>
        {Object.values(items).map(item => (
          <CartContentItem key={item.id} item={item} />
        ))}
      </div>
      {numberOfItems ? (
        <span className={styles.total}>{`${numberOfItems} piece${
          numberOfItems > 1 ? "s" : ""
        }, €${total}`}</span>
      ) : null}
      <CustomButton
        onClick={() => {
          router.push("/checkout"), handleCheckout(true);
        }}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

export default React.memo(Cart);
