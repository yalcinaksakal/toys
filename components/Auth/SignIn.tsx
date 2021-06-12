import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, authProvider } from "../../utils/firebase.utils";
import CustomButton from "../CustomButtton/CustomButton";
import FormInput from "../FormInput/FormInput";
import styles from "./SignIn.module.scss";
import { AppDispatch } from "../../store";
import { loginActions } from "../../store/login-slice";
const SignIn: React.FC = () => {
  const [authData, setAuthData] = useState({ email: "", pwd: "" });

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthData({ email: "", pwd: "" });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setAuthData(prev => ({ ...prev, [name]: value }));
  };

  const handleGoogleSignIn = async () => {
    dispatch(loginActions.setLoggingIn(true));
    authProvider.setCustomParameters({ prompt: "select_account" });
    // auth.signInWithPopup(authProvider);
    await auth.signInWithRedirect(authProvider);
    dispatch(loginActions.setLoggingIn(false));
  };
  return (
    <div className={styles["sign-in"]}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          name="email"
          type="email"
          value={authData.email}
          label="Email"
          required
        />

        <FormInput
          onChange={handleChange}
          name="pwd"
          type="password"
          value={authData.pwd}
          label="Password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
      <CustomButton onClick={handleGoogleSignIn}>Google Sign in</CustomButton>
    </div>
  );
};

export default SignIn;
