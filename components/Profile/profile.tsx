import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CustomButton from "../CustomButtton/CustomButton";
import { auth } from "../../utils/firebase.utils";
const Profile = () => {
  const { userPicture, email, displayName } = useSelector(
    (state: RootState) => state.login
  );

  return (
    <>
      <img
        src={userPicture}
        style={{ width: "100px", borderRadius: "50%", margin: "15px 0" }}
      />
      <h3>{displayName.toUpperCase()}</h3>
      <p style={{ marginBottom: "50px" }}>{email}</p>
      <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
    </>
  );
};

export default Profile;
