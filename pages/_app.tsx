import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Toys</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
