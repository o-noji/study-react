import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/componets/Footer";
import { Main } from "src/componets/Main";
import { Header } from "src/componets/Header";
import { useCallback } from "react";

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
