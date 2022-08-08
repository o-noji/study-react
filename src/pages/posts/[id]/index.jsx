import styles from "src/styles/Home.module.css";
import { Header } from "src/componets/Header";
import { Post } from "src/componets/Post";

const PostsId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
