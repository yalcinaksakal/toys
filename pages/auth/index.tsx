import Head from "next/head";
import { useSelector } from "react-redux";
import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";
import Profile from "../../components/Profile/profile";
import { RootState } from "../../store";
import Spinner from "../../components/Spinner/Spinner";
import styles from "./Auth.module.scss";
const AuthPage: React.FC = () => {
  const { isLoggedIn, isLoggingIn } = useSelector(
    (state: RootState) => state.login
  );

  return (
    <section>
      <Head>
        <meta name="description" content="Toys Sign In/Up Page" />
      </Head>

      {isLoggingIn ? (
        <Spinner />
      ) : isLoggedIn ? (
        <Profile />
      ) : (
        <div className={styles.auth}>
          <SignIn />
          <SignUp />
        </div>
      )}
    </section>
  );
};

export default AuthPage;
