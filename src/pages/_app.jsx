// import "src/styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/componets/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
