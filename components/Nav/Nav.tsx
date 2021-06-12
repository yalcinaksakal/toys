import styles from "./Nav.module.scss";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/dist/client/router";

import { auth } from "../../utils/firebase.utils";
import { logoutSvg } from "../../assets/svgs";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
const Nav: React.FC = () => {
  const { pathname } = useRouter();
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  return (
    <div className={styles.header}>
      <Link href="/">
        <img width="100px" src="/icon.png" />
      </Link>
      <div className={styles.options}>
        <div
          className={`${styles.option} ${
            pathname === "/shop" && styles.active
          }`}
        >
          <Link href="/shop">Shop</Link>
        </div>
        <div
          className={`${styles.option} ${
            pathname === "/contact" && styles.active
          }`}
        >
          <Link href="/contact">Contact</Link>
        </div>

        {isLoggedIn ? (
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
        ) : (
          <div
            className={`${styles.option} ${
              pathname === "/auth" && styles.active
            }`}
          >
            <Link href="/auth">Sign In</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
