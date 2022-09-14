import Head from "next/head";
import { Header } from "src/componets/Header";
import { Users as UsersCompornent } from "src/componets/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async () => {
  // ユーザー情報の取得
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersCompornent />
      </SWRConfig>
    </div>
  );
};

export default Users;
