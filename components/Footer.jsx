import React from "react";
import Image from "next/image";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src="/img/bg.png" layout="fill" />
      </div>
      <div className={styles.contact}>
        <div className={styles.left}>
          OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
        </div>
        <div className={styles.center}>
          <div className={styles.centerDesc}>FIND OUR RESTAURANTS</div>
          <br />
          <div className={styles.centerDesc}>
            1654 R. DON Road #304. <br /> NewYork, 85022 <br /> (602) 867-1010
          </div>
          <br />
          <div className={styles.centerDesc}>
            1654 R. DON Road #304. <br /> NewYork, 85022 <br /> (602) 867-1010
          </div>
          <br />
          <div className={styles.centerDesc}>
            1654 R. DON Road #304. <br /> NewYork, 85022 <br /> (602) 867-1010
          </div>
          <br />
          <div className={styles.centerDesc}>
            1654 R. DON Road #304. <br /> NewYork, 85022 <br /> (602) 867-1010
          </div>
          <br />
        </div>
        <div className={styles.right}>
          <div className={styles.rightDesc}>WORKING HOURS</div>
          <br />
          <div className={styles.rightDesc}>
            MONDAY - FRIDAY <br /> 9:00 - 21:00 <br />
          </div>
          <br />
          <div className={styles.rightDesc}>
            SATURDAY - SUNDAY <br /> 11:00 - 19:00 <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
