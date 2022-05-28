import Head from "next/head";
import Featured from "../components/Featured";
import Products from "../components/Products";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Products products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`https://zstaurant.herokuapp.com/api/products`);

  return {
    props: {
      products: res.data,
    },
  };
}

