import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/componets/Header";
import { Posts as PostsCompornent } from "src/componets/Posts";

const Posts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsCompornent />
    </div>
  );
};

export default Posts;
