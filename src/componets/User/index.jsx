import Head from "next/head";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();

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
      <h1>{data?.name}</h1>
      <p>{data?.username}</p>
      {data ? <div>Created by {data?.address.suite}</div> : null}
    </div>
  );
};
