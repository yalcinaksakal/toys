import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CustomButton from "../CustomButtton/CustomButton";
import { auth } from "../../utils/firebase.utils";
import { profile } from "../../assets/svgs";
import { useRouter } from "next/dist/client/router";
const Profile = () => {
  const { userPicture, email, displayName } = useSelector(
    (state: RootState) => state.login
  );
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {userPicture ? (
        <img
          src={userPicture}
          style={{ width: "100px", borderRadius: "50%", margin: "15px 0" }}
        />
      ) : (
        <svg
          style={{ marginTop: "30px" }}
          width="80"
          height="80"
          viewBox="0 0 20 20"
          fill="dodgerblue"
        >
          <path d={profile} />
        </svg>
      )}
      <h3>{displayName?.toUpperCase()}</h3>
      <p style={{ marginBottom: "50px" }}>{email}</p>
      <CustomButton onClick={() => router.push("/shop")} isGoogleSignIn>
        Shop now
      </CustomButton>
      <br />
      <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
    </div>
  );
};

export default Profile;
