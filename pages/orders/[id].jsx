import React from "react";
import Image from "next/image";

import styles from "../../styles/Orders.module.css";
import axios from "axios";

const Orders = ({ order }) => {
  const status = order.status;

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
                <td className={styles.trId}>{order._id}</td>
                <td className={styles.trName}>{order.customer}</td>
                <td className={styles.trAddress}>{order.address}</td>
                <td className={styles.productTotal}>${order.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.deliveryDetails}>
          <div className={statusClass(0)}>
            <div className={styles.detailDesc}>
              <Image src="/img/paid.png" alt="" width={30} height={30} />
              <p className={styles.text}>Payment</p>
            </div>
            <Image
              src="/img/checked.png"
              alt=""
              width={20}
              height={20}
              className={styles.checked}
            />
          </div>
          <div className={statusClass(1)}>
            <div className={styles.detailDesc}>
              <Image src="/img/bake.png" alt="" width={30} height={30} />
              <p className={styles.text}>Preparing</p>
            </div>
            <Image
              src="/img/checked.png"
              alt=""
              width={20}
              height={20}
              className={styles.checked}
            />
          </div>
          <div className={statusClass(2)}>
            <div className={styles.detailDesc}>
              <Image src="/img/bike.png" alt="" width={30} height={30} />
              <p className={styles.text}>On the way</p>
            </div>
            <Image
              alt=""
              src="/img/checked.png"
              width={20}
              height={20}
              className={styles.checked}
            />
          </div>
          <div className={statusClass(3)}>
            <div className={styles.detailDesc}>
              <Image src="/img/delivered.png" alt="" width={30} height={30} />
              <p className={styles.text}>Delivered</p>
            </div>
            <Image
              src="/img/checked.png"
              alt=""
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
              Subtotal: <span>${order.total}</span>
            </div>
            <div className={styles.cardDetail}>
              Discount: <span>$00.00</span>
            </div>
            <div className={styles.cardDetail}>
              Total: <span>${order.total}</span>
            </div>
          </div>
          <button className={styles.cartBtn}>PAID</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Orders;
