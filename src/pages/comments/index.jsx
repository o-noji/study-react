import Head from "next/head";
import { Header } from "src/componets/Header";
import { Comments as CommentsCompornent } from "src/componets/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comment Page</title>
      </Head>
      <Header />
      <CommentsCompornent />
    </div>
  );
};

export default Comments;
