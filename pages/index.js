import Head from "next/head";
import Heading from "@/components/Heading";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text='Home Page' />
      </div>
    </>
  );
};

export default Home;
