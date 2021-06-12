import React, { useState } from "react";
import {
  auth,
  authProvider,
  signInWithGoogle,
} from "../../utils/firebase.utils";

import CustomButton from "../CustomButtton/CustomButton";
import FormInput from "../FormInput/FormInput";
import styles from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  const [authData, setAuthData] = useState({ email: "", pwd: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthData({ email: "", pwd: "" });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setAuthData(prev => ({ ...prev, [name]: value }));
  };

  const handleGoogleSignIn = async () => {
    authProvider.setCustomParameters({ prompt: "select_account" });
    auth.signInWithPopup(authProvider);
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
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      </form>
    </div>
  );
};

export default SignIn;
