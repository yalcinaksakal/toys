import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, authProvider } from "../../utils/firebase.utils";
import CustomButton from "../CustomButtton/CustomButton";
import FormInput from "../FormInput/FormInput";
import styles from "./SignIn.module.scss";
import { AppDispatch } from "../../store";
import { loginActions } from "../../store/login-slice";
import Spinner from "../Spinner/Spinner2";
const SignIn: React.FC = () => {
  const [authData, setAuthData] = useState({ email: "", pwd: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    try {
      setIsLoading(true);
      await auth.signInWithEmailAndPassword(authData.email, authData.pwd);
      setAuthData({ email: "", pwd: "" });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErr("Invalid email or password");
    }
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
  return isLoading ? (
    <div
      style={{
        width: "30vw",
        minWidth: "180px",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner />
    </div>
  ) : (
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
        <CustomButton type="button" onClick={handleGoogleSignIn} isGoogleSignIn>
          Google Sign in
        </CustomButton>
      </form>{" "}
      <p style={{ color: "red" }}>{err}</p>
    </div>
  );
};

export default SignIn;
