import Head from "next/head";
import { UserByUserId } from "src/componets/User/UserByUserId";
import { CommentsByPostId } from "src/componets/Comments/CommentsByPostId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-xl text-gray-900 mt-2">{data?.body}</p>
      <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
      <div className="mt-2">
        <CommentsByPostId id={data.id} />
      </div>
    </div>
  );
};
