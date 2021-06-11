import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Toy Shop</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
