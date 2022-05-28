import React from "react";

import Image from "next/image";

import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ products }) => {
  return (
    <div className={styles.container} id="products">
      {products.map((product) => {
        const { title, desc, img, prices } = product;
        return (
          <div className={styles.item} key={product._id}>
            <Link href={`/product/${product._id}`} passHref>
              <div className="">
                <Image src={img} height={500} width={500} alt="" />
              </div>
            </Link>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.price}>${prices[0]}</div>
            <div className={styles.desc}>{desc}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
