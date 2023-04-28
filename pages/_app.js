import Head from "next/head";
import Layout from "@/components/Layout";
import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
