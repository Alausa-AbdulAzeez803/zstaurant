import React from "react";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.callBtn}>
          <Image src="/img/telephone.png" width="35px" height="35px" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.center}>
        <ul className={styles.list}>
          <Link href={`/`} passHref>
            <li className={styles.listItem} style={{ cursor: "pointer" }}>
              Homepage
            </li>
          </Link>
          <Link href={`/#products`} passHref>
            <li className={styles.listItem} style={{ cursor: "pointer" }}>
              Products
            </li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/img/logo.png"
            width="100px"
            height="70px"
            className={styles.listItem}
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.cart}>
          <Link href={`/cart`} passHref>
            <div className="" style={{ cursor: "pointer" }}>
              <Image src="/img/cart.png" width="25px" height="25px" />
            </div>
          </Link>
          <div className={styles.cartModal}>{cart.cartLength}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
