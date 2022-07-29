import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/componets/Footer";
import { Main } from "src/componets/Main";
import { Header } from "src/componets/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}