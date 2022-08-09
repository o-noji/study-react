import Head from "next/head";
import { Header } from "src/componets/Header";
import { Users as UsersCompornent } from "src/componets/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersCompornent />
    </div>
  );
};

export default Users;
