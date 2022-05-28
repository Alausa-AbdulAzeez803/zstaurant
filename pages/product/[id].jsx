import React, { useState } from "react";
import Image from "next/image";

import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const Product = ({ pizza }) => {
  const [index, setIndex] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  let orderPrice = pizza.prices[index] + productPrice;

  const setPrice = (e, option) => {
    if (e.target.checked === true) {
      setProductPrice(Number(productPrice) + Number(e.target.value));
      setExtras([...extras, option]);
    }
    if (e.target.checked === false) {
      setProductPrice(Number(productPrice) - Number(e.target.value));
      setExtras(extras.filter((extra) => extra !== option));
    }
  };
  const idInCart =
    pizza.title.split(" ").join("") + pizza._id + extras.toString();

  const addProductToCart = () => {
    dispatch(
      addToCart({ ...pizza, orderPrice, extras, quantity, idInCart: idInCart })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <div className={styles.price}>
          ${pizza.prices[index] + productPrice}
        </div>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.select}>Choose the size</h3>
        <div className={styles.sizeOptions}>
          <div className={styles.sizeOption} onClick={() => setIndex(0)}>
            <Image src="/img/size.png" alt="" height="30px" width="30px" />
            <span className={styles.sizeSpan}>small</span>
          </div>
          <div className={styles.sizeOption} onClick={() => setIndex(1)}>
            <Image src="/img/size.png" alt="" height="40px" width="40px" />
            <span className={styles.sizeSpan}>medium</span>
          </div>
          <div className={styles.sizeOption} onClick={() => setIndex(2)}>
            <Image src="/img/size.png" alt="" height="50px" width="50px" />
            <span className={styles.sizeSpan}>large</span>
          </div>
        </div>
        <h3>Choose additional indregients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => {
            return (
              <div className={styles.ingredient} key={option._id}>
                <input
                  type="checkbox"
                  id={option.text}
                  name="interest"
                  value={option.price}
                  onClick={(e) => setPrice(e, option.text)}
                />
                <label htmlFor={option.text}>{option.text}</label>
              </div>
            );
          })}
        </div>
        <br />
        <div className={styles.cart}>
          <input
            type="number"
            className={styles.cartQuantity}
            onChange={(e) => setQuantity(e.target.value)}
            defaultValue={1}
          />
          <button className={styles.cartBtn} onClick={addProductToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
}
export default Product;
