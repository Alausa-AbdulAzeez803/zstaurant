import React, { useState } from "react";
import Image from "next/image";

import styles from "../styles/Featured.module.css";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === "left") {
      setIndex(index === 0 ? 2 : index - 1);
    }
    if (direction === "right") {
      console.log("hey");
      setIndex(index === 2 ? 0 : index + 1);
    }
  };

  const images = [
    "/img/pizza_PNG44078 (1).png",
    "/img/pizza_PNG44050.png",
    "/img/pizza.png",
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.arrowRight} onClick={() => handleSlider("left")}>
        <Image src="/img/arrowl.png" width="50px" height={50} />
      </div>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => {
          return (
            <div className={styles.slide} key={index}>
              <Image src={image} layout="fill" objectFit="contain" />
            </div>
          );
        })}
      </div>
      <div className={styles.arrowLeft} onClick={() => handleSlider("right")}>
        <Image src="/img/arrowr.png" width="50px" height={50} />
      </div>
    </div>
  );
};

export default Featured;
