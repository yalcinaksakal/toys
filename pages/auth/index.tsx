import Head from "next/head";
import SignIn from "../../components/Auth/SignIn";

import styles from "./Auth.module.scss";

const AuthPage: React.FC = () => (
  <>
    <Head>
      <meta name="description" content="Toys Sign In/Up Page" />
    </Head>
    <SignIn />
  </>
);

export default AuthPage;
