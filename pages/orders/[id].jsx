import React from "react";
import Image from "next/image";

import styles from "../../styles/Orders.module.css";

const Orders = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.orderDetails}>
          <table className={styles.leftTable}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.trId}>2345678909876</td>
                <td className={styles.trName}>John Doe</td>
                <td className={styles.trAddress}>Elton st. 212-33 LA</td>
                <td className={styles.productTotal}>$39.8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.deliveryDetails}>
          <div className={statusClass(0)}>
            <div className={styles.detailDesc}>
              <Image src="/img/paid.png" width={30} height={30} />
              <p className={styles.text}>Payment</p>
            </div>
            <Image
              src="/img/checked.png"
              width={20}
              height={20}
              className={styles.checked}
            />
          </div>
          <div className={statusClass(1)}>
            <div className={styles.detailDesc}>
              <Image src="/img/bake.png" width={30} height={30} />
              <p className={styles.text}>Payment</p>
            </div>
            <Image
              src="/img/checked.png"
              width={20}
              height={20}
              className={styles.checked}
            />
          </div>
          <div className={statusClass(2)}>
            <div className={styles.detailDesc}>
              <Image src="/img/bike.png" width={30} height={30} />
              <p className={styles.text}>Payment</p>
            </div>
            <Image
              src="/img/checked.png"
              width={20}
              height={20}
              className={styles.checked}
            />
          </div>
          <div className={statusClass(3)}>
            <div className={styles.detailDesc}>
              <Image src="/img/delivered.png" width={30} height={30} />
              <p className={styles.text}>Payment</p>
            </div>
            <Image
              src="/img/checked.png"
              width={20}
              height={20}
              className={styles.checked}
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3 className={styles.cardTitle}>CART TOTAL</h3>
          <div className={styles.cardDetails}>
            <div className={styles.cardDetail}>
              Subtotal: <span>$79.00</span>
            </div>
            <div className={styles.cardDetail}>
              Discount: <span>$00.00</span>
            </div>
            <div className={styles.cardDetail}>
              Total: <span>$79.00</span>
            </div>
          </div>
          <button className={styles.cartBtn}>PAID</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
