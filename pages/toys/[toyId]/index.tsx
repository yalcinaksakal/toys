import styles from "./ToyPage.module.scss";

import CustomButton from "../../../components/CustomButtton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

import { useRouter } from "next/dist/client/router";
import { RootState } from "../../../store";

import Page404 from "../../../components/404/404";
const ToyPage: React.FC = () => {
  const dispatch = useDispatch();
  const handleAddCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(cartActions.add({ item, amount: 1 }));
  };
  const { toys } = useSelector((state: RootState) => state);
  const router = useRouter();
  const toyId = router.query.toyId;
  const index = toyId ? +toyId : null;
  const item = index ? toys[index] : null;
  return (
    <section>
      {item ? (
        <div className={styles.toy}>
          <img src={`/imgs/${item.img}`} alt="Toy" />

          <div className={styles.attributes}>
            <h2>{item.name}</h2>
            <span>{`€${item.price.toFixed(2)}`}</span>
            <CustomButton isGoogleSignIn type="button" onClick={handleAddCart}>
              Add to cart
            </CustomButton>
            <CustomButton onClick={() => router.push("/checkout")}>
              Checkout
            </CustomButton>
            <span>
              {item.gender === 2
                ? "For boys"
                : item.gender == 1
                ? "For girls"
                : "For girls and boys"}
            </span>
          </div>
          <p>
            Elit laboris Lorem duis exercitation laboris laborum reprehenderit
            ut nisi fugiat anim laborum sunt sit. Consequat ex qui excepteur
            incididunt enim aliqua. Lorem anim pariatur eu cillum. Sunt qui ex
            cupidatat fugiat anim occaecat id. Deserunt esse ipsum consectetur
            ullamco aliquip eiusmod in aliquip cupidatat mollit. Aliqua Lorem
            sint esse voluptate incididunt pariatur ipsum. Ut commodo sunt eu ut
            amet non anim. Sunt qui culpa adipisicing proident amet magna irure
            occaecat labore ullamco esse velit. Cupidatat esse esse tempor duis
            in eu nostrud pariatur.
          </p>
        </div>
      ) : (
        <Page404 />
      )}
    </section>
  );
};

export default ToyPage;
