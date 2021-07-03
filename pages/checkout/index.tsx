import Head from "next/head";
import { useSelector } from "react-redux";
import styles from "./Checkout.module.scss";
import { RootState } from "../../store";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import CustomButton from "../../components/CustomButtton/CustomButton";
import StripeButton from "../../components/Stripe-Button/StripeButton";

import { useRouter } from "next/dist/client/router";
const CheckoutPage: React.FC = () => {
  const { numberOfItems, items, total } = useSelector(
    (state: RootState) => state.cart
  );
  const isEmpty = Object.keys(items).length === 0;
  const router = useRouter();
  return (
    <section>
      <Head>
        <meta name="description" content="Toys Checkout Page" />
      </Head>

      <div className={styles["checkout-page"]}>
        <div className={styles["checkout-header"]}>
          {["Product", "Description", "Quantity", "Total", "Remove"].map(
            (text, i) => (
              <div key={i} className={styles["header-block"]}>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
        {!isEmpty ? (
          Object.values(items).map(item => (
            <CheckoutItem key={item.id} item={item} />
          ))
        ) : (
          <>
            <div className={styles.empty}>
              <span>Your cart is empty.</span>
            </div>
            <CustomButton onClick={() => router.push("/toys")} isGoogleSignIn>
              Shop now
            </CustomButton>
          </>
        )}
        {!isEmpty && (
          <div className={styles.total}>
            <span>
              TOTAL : {numberOfItems} piece{numberOfItems > 1 ? "s" : ""}, €
              {total}
            </span>
          </div>
        )}
        <div className={styles.payment}>
          <StripeButton price={total} />
        </div>
        <div style={{ fontSize: "12px", color: "orange", textAlign: "center" }}>
          <p> Please use test credit card for payments</p>
          <p>4242 4242 4242 4242 Exp: 01/23 CVC:123</p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
