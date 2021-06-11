import React, { useState } from "react";
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
  return (
    <div className={styles["sign-in"]}>
      <h2>I lready have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={authData.email}
          required
        />
        <label>Password</label>
        <input
          onChange={handleChange}
          name="pwd"
          type="password"
          value={authData.pwd}
          required
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
