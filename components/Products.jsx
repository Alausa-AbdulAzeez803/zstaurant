import React from "react";
import styles from "../styles/Products.module.css";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>THE BEST PIZZA IN TOWN</div>
      <div className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint delectus
        alias minus quas facere illo aliquid perspiciatis repellendus, est velit
        aspernatur accusantium dicta minima, quos neque, unde beatae odit
        cupiditate.
      </div>
      <ProductCard products={products} />
    </div>
  );
};

export default Products;
