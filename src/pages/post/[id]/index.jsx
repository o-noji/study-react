import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/componets/Header";
import { useRouter } from "next/router";

const PostID = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
};

export default PostID;
