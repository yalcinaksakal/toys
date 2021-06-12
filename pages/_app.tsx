import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Spinner from "../components/Spinner/Spinner";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { events } = useRouter();

  // while navigating between pages show spinner
  useEffect(() => {
    const start = () => setIsLoading(true);
    const end = () => setIsLoading(false);
    events.on("routeChangeStart", start);
    events.on("routeChangeComplete", end);
    events.on("routeChangeError", end);
    return () => {
      events.off("routeChangeStart", start);
      events.off("routeChangeComplete", end);
      events.off("routeChangeError", end);
    };
  }, [events]);

  return (
    <>
      <Head>
        <title>Toy Shop</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Nav />
        {isLoading ? (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
    </>
  );
}
export default MyApp;
