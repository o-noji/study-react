import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const CommentCompornent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1 className="text-3xl font-bold">{data?.body}</h1>
      <ul>
        <li>{data?.name}</li>
        <li>{data?.email}</li>
      </ul>
      <h2>元の記事</h2>
    </div>
  );
};
