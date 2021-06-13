import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CustomButton from "../CustomButtton/CustomButton";
import { auth } from "../../utils/firebase.utils";
import { profile } from "../../assets/svgs";
const Profile = () => {
  const { userPicture, email, displayName } = useSelector(
    (state: RootState) => state.login
  );
  console.log("user:", userPicture);
  return (
    <>
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
      <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
    </>
  );
};

export default Profile;
