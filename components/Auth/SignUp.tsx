import FormInput from "../FormInput/FormInput";
import styles from "./SignUp.module.scss";
import CustomButton from "../CustomButtton/CustomButton";
import { auth, createUserProfileDocument } from "../../utils/firebase.utils";
import { useState } from "react";
import Spinner from "../Spinner/Spinner2";
const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState<{ [key: string]: string }>({
    displayName: "",
    email: "",
    pwd: "",
    confirmPwd: "",
  });
  const [formErr, setFormErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { displayName, email, pwd, confirmPwd } = credentials;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErr("");
    // setAuthData({ email: "", pwd: "" });
    if (pwd !== confirmPwd) {
      setFormErr("Password and Confirm Password do not match");
      return;
    }
    setIsLoading(true);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, pwd);
      // console.log("user:", user);
      await createUserProfileDocument(user, { displayName });
      // setCredentials({
      //   displayName: "",
      //   email: "",
      //   pwd: "",
      //   confirmPwd: "",
      // });
      // setIsLoading(false);
    } catch (err) {
      setFormErr(err.message);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <div
      style={{
        width: "50vw",
        marginLeft: "30px",
        maxWidth: "500px",
        height: "550px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner />
    </div>
  ) : (
    <div className={styles["sign-up"]}>
      <h2 className={styles.title}>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className={styles["sign-up-form"]} onSubmit={handleSubmit}>
        {[
          { type: "text", name: "displayName", label: "Display Name" },
          { type: "email", name: "email", label: "Email" },
          { type: "password", name: "pwd", label: "Password" },
          {
            type: "password",
            name: "confirmPwd",
            label: "Confirm Password",
          },
        ].map((item, index) => (
          <FormInput
            key={index}
            type={item.type}
            name={item.name}
            value={credentials[item.name]}
            onChange={handleChange}
            label={item.label}
            required
          ></FormInput>
        ))}
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
      <p style={{ color: "red" }}>{formErr}</p>
    </div>
  );
};

export default SignUp;
