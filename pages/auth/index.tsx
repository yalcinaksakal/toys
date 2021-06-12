import Head from "next/head";
import { useSelector } from "react-redux";
import SignIn from "../../components/Auth/SignIn";
import Profile from "../../components/Profile/profile";
import { RootState } from "../../store";
import Spinner from "../../components/Spinner/Spinner";
const AuthPage: React.FC = () => {
  const { isLoggedIn, isLoggingIn } = useSelector(
    (state: RootState) => state.login
  );
  return (
    <>
      <Head>
        <meta name="description" content="Toys Sign In/Up Page" />
      </Head>

      {isLoggingIn ? <Spinner /> : isLoggedIn ? <Profile /> : <SignIn />}
    </>
  );
};

export default AuthPage;
