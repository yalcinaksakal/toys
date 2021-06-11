import styles from "./Nav.module.scss";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/dist/client/router";

const Nav: React.FC = () => {
  const { pathname } = useRouter();

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
      </div>
    </div>
  );
};

export default Nav;
