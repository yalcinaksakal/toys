import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Spinner from "../components/Spinner/Spinner";
import { auth } from "../utils/firebase.utils";
// import firebase from "firebase";
import store from "../store";
import { Provider, useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { loginActions } from "../store/login-slice";

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { events } = useRouter();
  // const [currentUser, setCurUser] = useState<firebase.User | null>(null);

  // const { email } = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch<AppDispatch>();
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

  //check whether a user signed in or not
  useEffect(() => {
    dispatch(loginActions.setLoggingIn(true));
    let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      dispatch(
        user
          ? loginActions.login({
              email: user.email,
              displayName: user.displayName,
              picture: user.photoURL,
            })
          : loginActions.logout()
      );
      dispatch(loginActions.setLoggingIn(false));
    });

    return () => unsubscribeFromAuth();
  }, []);

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

function ToysSite(props: AppProps) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
}

export default ToysSite;
