import Head from "next/head";
import { Header } from "src/componets/Header";
import { Posts as PostsCompornent } from "src/componets/Posts";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsCompornent />
    </div>
  );
};

export default Posts;
