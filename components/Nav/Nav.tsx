import styles from "./Nav.module.scss";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Spinner2 from "../Spinner/Spinner2";
import { auth } from "../../utils/firebase.utils";
import { logoutSvg } from "../../assets/svgs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import ProfileImg from "../Profile/ProfileImg";
import CartIcon from "../CartIcon/CartIcon";
import Cart from "../Cart/Cart";
import { AppDispatch } from "../../store";
import { cartActions } from "../../store/cart-slice";

const Nav: React.FC = () => {
  const { pathname } = useRouter();
  const { isLoggedIn, isLoggingIn, userPicture } = useSelector(
    (state: RootState) => state.login
  );
  const { hidden, numberOfItems } = useSelector(
    (state: RootState) => state.cart
  );
  const [hide, setHide] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (hidden !== hide) {
        // console.log("setting", hide);
        dispatch(cartActions.setCartHidden(hide));
      }
    }, 100);
    return () => clearTimeout(inputTimer);
  }, [hidden, hide]);

  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <img width="100px" src="/icon.png" />
        </Link>
        <div className={styles.options}>
          <div
            className={`${styles.option} ${
              pathname === "/toys" && styles.active
            }`}
          >
            <Link href="/toys">Toys</Link>
          </div>
          <div
            className={`${styles.option} ${
              pathname === "/cart" && styles.active
            }`}
            onMouseEnter={() => setHide(false)}
            onMouseLeave={() => setHide(true)}
          >
            <Link href="/cart">
              <a>
                <CartIcon numberOfItems={numberOfItems} />
              </a>
            </Link>
          </div>
          {!isLoggingIn && (
            <div
              className={`${styles.option} ${
                pathname === "/auth" && styles.active
              }`}
            >
              <Link href="/auth">
                <a>
                  {isLoggedIn ? (
                    <ProfileImg picture={userPicture} type="nav" />
                  ) : (
                    "Sign In"
                  )}
                </a>
              </Link>
            </div>
          )}
          {isLoggingIn ? (
            <Spinner2 />
          ) : (
            isLoggedIn && (
              <div
                onClick={() => auth.signOut()}
                className={styles.option}
                title="Sign Out"
              >
                <svg
                  style={{ transform: "translateY(4px)" }}
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <path d={logoutSvg} />
                </svg>
              </div>
            )
          )}
        </div>
      </div>
      {!hidden && numberOfItems > 0 && (
        <div
          onMouseEnter={() => setHide(false)}
          onMouseLeave={() => setHide(true)}
        >
          <Cart />
        </div>
      )}
    </>
  );
};

export default Nav;
