import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, reset } from "../redux/CartSlice";
import { useRouter } from "next/router";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [clicked, setClicked] = useState(false);
  const dispatchh = useDispatch();
  const router = useRouter();
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const removeCartItem = (cartItem) => {
    dispatchh(removeFromCart({ ...cartItem }));
  };

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatchh(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.leftTable}>
          <tbody>
            <tr className={styles.trTitles}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
            {cart.products.map((cartItem) => {
              return (
                <tr
                  className={styles.tr}
                  key={
                    new Date().valueOf().toString(36) +
                    Math.random().toString(36)
                  }
                >
                  <td>
                    <Image
                      src={cartItem.img}
                      width="90px"
                      height="90px"
                      objectFit="contain"
                    />
                  </td>
                  <td className={styles.productName}>{cartItem.title}</td>
                  <td>
                    {cartItem.extras.length > 0
                      ? cartItem.extras.join(",")
                      : "No extra topping"}
                  </td>
                  <td className={styles.productPrice}>
                    ${cartItem.orderPrice}
                  </td>
                  <td className={styles.productQuantiy}>{cartItem.quantity}</td>
                  <td className={styles.productTotal}>
                    $
                    {(
                      Number(cartItem.orderPrice) * Number(cartItem.quantity)
                    ).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className={styles.productRemove}
                      onClick={() => removeCartItem(cartItem)}
                    >
                      Remove item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3 className={styles.cardTitle}>CART TOTAL</h3>
          <div className={styles.cardDetails}>
            <div className={styles.cardDetail}>
              Subtotal: <span>${cart.total.toFixed(2)}</span>
            </div>
            <div className={styles.cardDetail}>
              Discount: <span>$00.00</span>
            </div>
            <div className={styles.cardDetail}>
              Total: <span>${cart.total.toFixed(2)}</span>
            </div>
          </div>

          {clicked && cart.products.length > 0 ? (
            <div>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AdiH_XARa3kL1Umvuo5K79U10rMnebNom9F_U8nrBoB7fcKGxh3eCqk_2GfnvMp5XHl3ds77czjjaq1B",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              className={styles.cartBtn}
              onClick={() => setClicked(true)}
              disabled={cart.products.length > 0 ? false : true}
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
