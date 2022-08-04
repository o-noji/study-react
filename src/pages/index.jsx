import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/componets/Header";
import { Posts } from "src/componets/Posts";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
